// ---------------------------------------------------------------------------
// MOCK DATA — News / Updates
// ---------------------------------------------------------------------------
//
// FUTURE BACKEND:
// Replace with API route: /api/news
// Connect to a CMS (e.g. Sanity, Contentful) or DB table
// Allow coaches to post updates from a dashboard
// ---------------------------------------------------------------------------

export type NewsCategory = "fight-result" | "update" | "announcement";

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;         // ISO date "YYYY-MM-DD"
  imageUrl: string;
  category: NewsCategory;
  author: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "news-1",
    title: "Karim wins by TKO at Paris Open",
    excerpt:
      "Our head coach Karim stepped back into the ring last Saturday and delivered a dominant performance, stopping his opponent in the 3rd round at the Paris Open Championships.",
    date: "2026-03-28",
    imageUrl: "https://placehold.co/800x500/121212/FFFFFF",
    category: "fight-result",
    author: "Overhandz Team",
  },
  {
    id: "news-2",
    title: "New Saturday schedule starting April 19",
    excerpt:
      "We're adding two new Saturday slots: 09:00 Sparring and 11:00 Muay Thai. Check the schedule page for full details and book your spot early — they're filling up fast.",
    date: "2026-04-07",
    imageUrl: "https://placehold.co/800x500/141414/FFFFFF",
    category: "update",
    author: "Coach Yasmine",
  },
  {
    id: "news-3",
    title: "Online booking is now live",
    excerpt:
      "No more DMs to book a class. You can now see real-time availability and secure your spot in seconds — directly from your phone, anytime.",
    date: "2026-04-01",
    imageUrl: "https://placehold.co/800x500/161616/FFFFFF",
    category: "announcement",
    author: "Overhandz Team",
  },
  {
    id: "news-4",
    title: "Fight team selects 4 athletes for regionals",
    excerpt:
      "After months of preparation, Coaches Karim and Samir have selected four athletes to represent Overhandz at the Regional Amateur Boxing Championship in June.",
    date: "2026-03-15",
    imageUrl: "https://placehold.co/800x500/0f0f0f/FFFFFF",
    category: "announcement",
    author: "Coach Karim",
  },
];
