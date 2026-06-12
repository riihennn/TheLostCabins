import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Reach The Lost Cabins | Thusharagiri, Kerala",
  description:
    "Contact The Lost Cabins to inquire about cabin availability, bookings, or any questions about your stay near Thusharagiri Waterfalls, Kerala. We're here to help plan your perfect forest retreat.",
  keywords: [
    "contact thusharagiri resort",
    "book resort thusharagiri",
    "thusharagiri resort booking",
    "thusharagiri resort phone number",
    "book cabin thusharagiri kerala",
    "resort booking thusharagiri",
    "contact the lost cabins",
    "the lost cabins phone number",
    "thusharagiri accommodation booking",
    "book rooms thusharagiri",
    "wayanad thusharagiri resort contact",
    "resort inquiry kozhikode",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: "https://www.thelostcabins.in/contact",
    siteName: "The Lost Cabins",
    title: "Contact The Lost Cabins | Thusharagiri, Kerala",
    description:
      "Reach out to The Lost Cabins for bookings, availability, and questions about your cabin stay near Thusharagiri Waterfalls, Kerala.",
    images: [
      {
        url: "/images/Aframe1.jpg",
        width: 1200,
        height: 630,
        alt: "The Lost Cabins — Forest Cabin Resort near Thusharagiri, Kerala",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact The Lost Cabins | Thusharagiri, Kerala",
    description:
      "Get in touch with The Lost Cabins for cabin bookings and inquiries. Forest retreat near Thusharagiri Waterfalls, Kerala.",
    images: ["/images/Aframe1.jpg"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
