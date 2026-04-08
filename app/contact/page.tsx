// Contact page — route: /contact
//
// Server Component — exports metadata.

import type { Metadata } from "next";
import ContactPageClient from "@/components/pages/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact — Overhandz Boxing Club",
  description:
    "Get in touch with Overhandz Boxing Club in Ivry-sur-Seine, Paris. Send a message, WhatsApp us, or come visit us.",
  openGraph: {
    title: "Contact — Overhandz Boxing Club",
    description:
      "Contact Overhandz Boxing Club in Ivry-sur-Seine, Paris.",
    url: "https://overhandz.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
