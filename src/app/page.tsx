import Link from "next/link";
import { articles } from "@/app/data/articles";
import { Barcode, Todo } from "@/app/components/shared";

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
          <div className="aisle">
            <span>
              <span className="num">Aisle 11</span>&nbsp; Economics — CIE3M
            </span>
            <span>Teacher: B. Paschalidis</span>
            <span>Semester 2 · 2026</span>
          </div>

          <div className="shelf-tag">
            <div className="left">
              <h1>
                The Price of
                <br />
                Everything
              </h1>
              <p className="sub">
                An e-scrapbook of tariffs, markets, and money in Canada —
                tracked like a grocery shelf, February to June 2026.
              </p>
            </div>
          </div>

          <div className="cover-meta">
            <div className="who">
              COMPILED BY <b>HEMIT PATEL</b>
              <br />
              4 ENTRIES · 4 SOURCES · FINAL DUE <b>JUNE 15, 2026</b>
            </div>
            <div className="cover-bar">
              <Barcode label="C I E 3 M · 2 0 2 6" />
            </div>
          </div>
        </div>
      </header>

      <div className="wrap">
        {/* TOC RECEIPT */}
        <section id="toc">
          <div className="shelf-strip" style={{ width: "100%" }}>
            <span className="sku">Checkout</span>
            <h2>Table of Contents</h2>
          </div>
          <div className="receipt" role="navigation" aria-label="Entries">
            <div className="store">
              THE PRICE OF EVERYTHING
              <small>CIE3M E-SCRAPBOOK · HEMIT PATEL</small>
              <small>ALL ITEMS PUBLISHED FEB 2026 OR LATER</small>
            </div>
            <hr />
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

        {/* REFLECTION */}
        <section id="reflection">
          <div className="shelf-strip">
            <span className="sku">Exit Survey</span>
            <h2>Reflection</h2>
          </div>
          <div className="reflect-card">
            <Todo>
              Write your own reflection on the scrapbook and the course. What
              did following economic news for a semester teach you? Which entry
              changed how you think? Be specific — generic reflections read as
              filler.
            </Todo>
            <p>[Your reflection goes here.]</p>
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
