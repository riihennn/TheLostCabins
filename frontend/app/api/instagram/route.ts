import { NextResponse } from 'next/server';

export const revalidate = 3600; // revalidate every hour

export async function GET() {
  try {
    const juicerUrl = "https://www.juicer.io/api/feeds/the_lostcabins";
    const res = await fetch(juicerUrl, { next: { revalidate: 3600 } });
    
    if (!res.ok) {
      console.error('Juicer API Error:', await res.text());
      return NextResponse.json({ error: 'Failed to fetch Instagram posts from Juicer' }, { status: 500 });
    }

    const data = await res.json();
    const posts = data.posts?.items || [];

    // Map Juicer data to match the Instagram Graph API structure expected by InstagramFeed.tsx
    const formattedPosts = posts.map((post: any) => {
      // Determine media type
      let mediaType = "IMAGE";
      if (post.video_url || post.full_url?.includes('reel') || post.message?.includes('video')) {
        mediaType = "VIDEO";
      } else if (post.additional_photos && post.additional_photos.length > 0) {
        mediaType = "CAROUSEL_ALBUM";
      }

      return {
        id: String(post.id),
        caption: post.unformatted_message || post.message?.replace(/<[^>]*>?/gm, ''), // strip HTML if needed
        media_type: mediaType,
        media_url: post.image,
        thumbnail_url: post.image,
        permalink: post.full_url || post.external,
        timestamp: post.external_created_at,
        like_count: post.like_count || post.likes || 0,
      };
    });

    return NextResponse.json(formattedPosts);
  } catch (error) {
    console.error('Juicer API Exception:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
