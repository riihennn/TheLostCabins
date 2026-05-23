import { NextResponse } from 'next/server';

export const revalidate = 3600; // revalidate every hour

export async function GET() {
  try {
    const token = process.env.INSTAGRAM_ACCESS_TOKEN;
    const userId = process.env.INSTAGRAM_USER_ID;

    if (!token || !userId) {
      return NextResponse.json({ error: 'Instagram credentials not configured' }, { status: 500 });
    }

    const limit = 12;
    const url = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count&access_token=${token}&limit=${limit}`;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    
    if (!res.ok) {
      const errorData = await res.json();
      console.error('Instagram API Error:', errorData);
      return NextResponse.json({ error: 'Failed to fetch Instagram posts' }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data.data || []);
  } catch (error) {
    console.error('Instagram API Exception:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
