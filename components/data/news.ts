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
    title: "La saison a déjà commencé",
    excerpt:
      "La saison a déjà commencé, on vous attend à la salle et sur le ring. Club de boxe anglaise, Muay Thai, Cross training. Inscription au mois ou à l'année au 13 rue Molière, Ivry-sur-Seine 94200.",
    date: "2023-01-05",
    imageUrl: "/images/news/post-1.png",
    category: "announcement",
    author: "Overhandz Team",
  },
  {
    id: "news-2",
    title: "La collection est toujours disponible",
    excerpt:
      "Overhandz boxing club. La collection est toujours disponible. Le lien est en bio !",
    date: "2022-11-14",
    imageUrl: "/images/news/post-2.png",
    category: "update",
    author: "Overhandz Team",
  },
  {
    id: "news-3",
    title: "Get yourself prepared",
    excerpt:
      "We've got everyday classes of various martial arts and trainings available on our planning. We had 100 spots available for this session and there's a bit less than 50 left this week — be quick to get your spot!",
    date: "2021-09-16",
    imageUrl: "/images/news/post-3.png",
    category: "announcement",
    author: "Overhandz Team",
  },
  {
    id: "news-4",
    title: "On va bientôt poster",
    excerpt:
      "On a eu une belle semaine 🥊 On va bientôt poster le lendemain. #overhandz #boxing #club #boxingmotivation",
    date: "2021-12-31",
    imageUrl: "/images/news/post-4.png",
    category: "update",
    author: "Overhandz Team",
  },
];
