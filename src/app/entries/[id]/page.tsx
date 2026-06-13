import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/app/data/articles";
import {
  Barcode,
  EntryTag,
  ImageRow,
  KeyWordFacts,
  PlaceholderEntry,
  Todo,
} from "@/app/components/shared";

export function generateStaticParams() {
  return articles.map((a) => ({ id: a.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);
  if (!article) return {};
  return {
    title: `${article.title} — The Price of Everything`,
    description: `Entry ${article.number}: ${article.title} · ${article.source} · ${article.tocDate}`,
  };
}

export default async function EntryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);
  if (!article) notFound();

  return (
    <>
      {/* NAV */}
      <nav aria-label="Sections">
        <Link href="/" className="nav-back">
          ← Index
        </Link>
        <span className="brand">The Price of Everything</span>
      </nav>

      <div className="wrap" style={{ paddingTop: "2.4rem", paddingBottom: "4rem" }}>
        {/* BREADCRUMB */}
        <div className="entry-breadcrumb">
          <span>
            Entry {article.number} of {articles.length}
          </span>
          <span>{article.source} · {article.tocDate}</span>
        </div>

        {/* ARTICLE CONTENT */}
        <EntryContent id={id} article={article} />

        {/* PREV / NEXT NAV */}
        <EntryNav currentId={id} />
      </div>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <span>Hemit Patel · CIE3M</span>
          <span className="yellow">The Price of Everything · 2026</span>
          <span>Final due June 15, 2026</span>
        </div>
      </footer>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Article content switcher                                             */
/* ------------------------------------------------------------------ */

function EntryContent({
  id,
  article,
}: {
  id: string;
  article: (typeof articles)[number];
}) {
  if (id === "entry3") return <Entry3 />;

  // Placeholder entries
  const todoMap: Record<string, string> = {
    entry1:
      "Paste your Entry 1 summary (6–7 lines), Economic Concepts (7–8 lines, ≥4 key words wrapped in <span class=\"kw\">), two images, and the chapter key-word list.",
    entry2: "Same structure as Entry 1.",
    entry4: "Same structure as Entry 1.",
  };

  return (
    <PlaceholderEntry
      id={id}
      number={article.number}
      todoText={todoMap[id] ?? "Content coming soon."}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Entry 3 — complete                                                   */
/* ------------------------------------------------------------------ */

function Entry3() {
  return (
    <section className="entry" id="entry3">
      <EntryTag
        number="03"
        title="BoC report estimates counter-tariffs pushed prices up about 6% last year"
        skuLines={[
          "SRC: CTV News",
          "PUB: May 11, 2026",
          "ENTRY: May 19, 2026",
          "CH: 4, 5, 6, 7",
          "LINK: [paste the CTV article URL here]",
        ]}
      />

      <h3>Summary</h3>
      <p>
        In March 2025, the Canadian government placed a 25 percent tax (counter
        tariff) on American goods like groceries and appliances as a retaliation
        to President DJT&rsquo;s tariffs. A Bank of Canada study released on May
        11, 2026 looked at prices of 110,000 items at 7 big Canadian stores. It
        ultimately found that tariffed goods rose about 6 percent more than
        non-tariffed goods over the year.
      </p>

      <h3>Economic Concepts</h3>
      <p>
        The 25% tariff made it more expensive for stores to bring American goods
        into the country, which shifts the{" "}
        <span className="kw">supply curve</span> to the left (reducing overall
        supply). This raised the <span className="kw">equilibrium price</span>{" "}
        and lowered the <span className="kw">equilibrium quantity</span> sold.
        Stores did not pass the full amount of the tax on to customers, which
        suggests demand is relatively <span className="kw">elastic</span> — if
        prices rise too much, shoppers switch to substitute goods or stop buying
        outright. The study only looked at seven big retailers, which is a{" "}
        <span className="kw">concentrated industry</span>. These large firms
        have enough <span className="kw">market power</span> to choose how much
        cost to pass on, while smaller stores would act as{" "}
        <span className="kw">price-takers</span>.
      </p>

      <ImageRow
        labels={[
          "IMAGE SLOT — e.g., supply/demand diagram, leftward supply shift",
          "IMAGE SLOT — e.g., grocery prices / Canada–US trade photo",
        ]}
      />

      <KeyWordFacts subtitle="Chapters 4–7 · full list with definitions">
        <dt>[Paste the full key-word list from chapters 4, 5, 6, 7]</dt>
        <dd>
          [The assignment requires the entire list with definitions — from your
          textbook.]
        </dd>
      </KeyWordFacts>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Prev / Next navigation                                               */
/* ------------------------------------------------------------------ */

function EntryNav({ currentId }: { currentId: string }) {
  const idx = articles.findIndex((a) => a.id === currentId);
  const prev = idx > 0 ? articles[idx - 1] : null;
  const next = idx < articles.length - 1 ? articles[idx + 1] : null;

  return (
    <nav className="entry-pagination" aria-label="Entry navigation">
      <div className="ep-slot">
        {prev && (
          <Link href={`/entries/${prev.id}`} className="ep-link ep-prev">
            <span className="ep-dir">← Previous</span>
            <span className="ep-title">{prev.title}</span>
          </Link>
        )}
      </div>
      <Link href="/" className="ep-home">
        All Entries
      </Link>
      <div className="ep-slot ep-slot-right">
        {next && (
          <Link href={`/entries/${next.id}`} className="ep-link ep-next">
            <span className="ep-dir">Next →</span>
            <span className="ep-title">{next.title}</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
