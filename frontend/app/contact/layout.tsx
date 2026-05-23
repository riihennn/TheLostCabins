import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | The Lost Cabins | Thusharagiri, Kerala",
  description: "Get in touch with The Lost Cabins. Book a stay, ask about availability, or reach out to us for any inquiries. We'd love to welcome you to our forest retreat in Kerala.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
