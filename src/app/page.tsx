import Link from "next/link";
import { articles } from "@/app/data/articles";
import { Barcode } from "@/app/components/shared";

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav aria-label="Sections">
        <span className="brand">The Price of Everything</span>
      </nav>

      {/* COVER */}
      <header id="cover">
        <div className="wrap">
          <div className="shelf-tag">
            <h1>
              The Price of
              <br />
              <span className="hl">Everything</span>
            </h1>
            <p className="sub">
              An e-scrapbook of tariffs, markets, and money in Canada —
              tracked like a grocery shelf, February to June 2026.
            </p>
          </div>

          <div className="cover-meta">
            <div className="who">
              COMPILED BY <b>HEMIT PATEL</b>
              <br />
              4 ENTRIES · 4 SOURCES · FINAL DUE <b>JUNE 15, 2026</b>
            </div>
          </div>
        </div>
      </header>

      <div className="wrap">
        {/* TOC RECEIPT */}
        <section id="toc">
          <div className="receipt" role="navigation" aria-label="Entries">
            {articles.map((article, i) => (
              <div className="line" key={article.id}>
                <span className="no">{String(i + 1).padStart(2, "0")}</span>
                <Link href={`/entries/${article.id}`}>{article.title}</Link>
                <span className="ch">{article.tocChapters}</span>
                <span className="meta">
                  {article.source} · {article.tocDate}
                </span>
              </div>
            ))}
            <hr />
            <div className="total">
              <span>SUBTOTAL</span>
              <span>4 ENTRIES</span>
            </div>
            <div className="total">
              <span>SOURCES (NO REPEATS)</span>
              <span>4</span>
            </div>
            <div className="total">
              <span>COUNTER-TARIFF (25%)</span>
              <span>INCLUDED</span>
            </div>
            <hr />
            <div className="thanks">
              THANK YOU FOR READING · NO REFUNDS ON DEADLINES
            </div>
            <Barcode label="J U N E · 1 5 · 2 0 2 6" />
          </div>
        </section>

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
