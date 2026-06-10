import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.thelostcabins.in',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        'https://www.thelostcabins.in/images/areal.jpg',
        'https://www.thelostcabins.in/images/Aframe1.jpg',
        'https://www.thelostcabins.in/images/Hexa_image/IMG_7816.jpg',
        'https://www.thelostcabins.in/images/IMG_7825.jpg',
      ],
    },
    {
      url: 'https://www.thelostcabins.in/rooms',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [
        'https://www.thelostcabins.in/images/Aframe1.jpg',
        'https://www.thelostcabins.in/images/Hexa_image/IMG_7816.jpg',
        'https://www.thelostcabins.in/images/Twinpines_image/IMG_7813.jpg',
      ],
    },
    {
      url: 'https://www.thelostcabins.in/rooms/a-frame-cabin',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [
        'https://www.thelostcabins.in/images/Aframe1.jpg',
        'https://www.thelostcabins.in/images/A-Frame_image/IMG_7839.jpg',
        'https://www.thelostcabins.in/images/A-Frame_image/IMG_7832.jpg',
        'https://www.thelostcabins.in/images/A-Frame_image/IMG_7843.jpg',
      ],
    },
    {
      url: 'https://www.thelostcabins.in/rooms/hexa-cabin',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [
        'https://www.thelostcabins.in/images/Hexa_image/IMG_7816.jpg',
        'https://www.thelostcabins.in/images/Hexa_image/IMG_7814.jpg',
        'https://www.thelostcabins.in/images/Hexa_image/IMG_7864.jpg',
      ],
    },
    {
      url: 'https://www.thelostcabins.in/rooms/twin-pines-cabin',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [
        'https://www.thelostcabins.in/images/Twinpines_image/IMG_7813.jpg',
        'https://www.thelostcabins.in/images/Twinpines_image/IMG_7845.jpg',
      ],
    },
    {
      url: 'https://www.thelostcabins.in/experiences',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      images: [
        'https://www.thelostcabins.in/images/IMG_7842.jpg',
        'https://www.thelostcabins.in/images/IMG_7847.jpg',
      ],
    },
    {
      url: 'https://www.thelostcabins.in/booking',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [
        'https://www.thelostcabins.in/images/areal.jpg',
      ],
    },
    {
      url: 'https://www.thelostcabins.in/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
      images: [
        'https://www.thelostcabins.in/images/areal.jpg',
      ],
    },
    {
      url: 'https://www.thelostcabins.in/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ];
}

