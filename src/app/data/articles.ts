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
    title: "[Article title — to be added]",
    tocChapters: "CH —",
    source: "[Source 1]",
    tocDate: "[date]",
  },
  {
    id: "entry2",
    number: "02",
    title: "[Article title — to be added]",
    tocChapters: "CH —",
    source: "[Source 2]",
    tocDate: "[date]",
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
    title: "[Article title — to be added]",
    tocChapters: "CH —",
    source: "[Source 4]",
    tocDate: "[date]",
  },
];
