export type ArticleMeta = {
  id: string;
  number: string;
  title: string;
  tocChapters: string;
  source: string;
  tocDate: string;
};

export const articles: ArticleMeta[] = [
  {
    id: "entry1",
    number: "01",
    title: "Canada's Q4 GDP unexpectedly contracts, full-year growth at 1.7%",
    tocChapters: "CH 1",
    source: "Reuters",
    tocDate: "Feb 27, 2026",
  },
  {
    id: "entry2",
    number: "02",
    title: "Ontario's 2026 budget sees deficit hit $13.8B amid looming global instability",
    tocChapters: "CH 2–3",
    source: "CBC News",
    tocDate: "Mar 26, 2026",
  },
  {
    id: "entry3",
    number: "03",
    title:
      "BoC report estimates counter-tariffs pushed prices up about 6% last year",
    tocChapters: "CH 4–7",
    source: "CTV News",
    tocDate: "May 11, 2026",
  },
  {
    id: "entry4",
    number: "04",
    title: "[Article title - to be added]",
    tocChapters: "CH -",
    source: "[Source 4]",
    tocDate: "[date]",
  },
];
