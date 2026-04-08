// About page — route: /about
//
// Server Component — exports metadata.

import type { Metadata } from "next";
import AboutPageClient from "@/components/pages/AboutPageClient";

export const metadata: Metadata = {
  title: "About — Overhandz Boxing Club",
  description:
    "The story behind Overhandz Boxing Club in Ivry-sur-Seine, Paris. Meet the coaches and discover our training philosophy.",
  openGraph: {
    title: "About — Overhandz Boxing Club",
    description:
      "Meet the coaches and learn the story behind Overhandz Boxing Club in Paris.",
    url: "https://overhandz.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
