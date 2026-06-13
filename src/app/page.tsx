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
              An e-scrapbook of tariffs, markets, and money in Canada -
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

      {/* TOC RECEIPT */}
      <section id="toc">
        <div className="entry-tag" style={{ marginBottom: "1.4rem" }}>
          <div className="price">
            <span className="n">E</span>
            <span className="u">E-SCRAP</span>
          </div>
          <div className="info">
            <div className="title">E-Scrapbook Entries 1 through 4</div>
            <div className="sku-line">
              <span>CLASS: CIE3M</span>
              <span>PERIOD: FEB&ndash;JUN 2026</span>
              <span>CH: 1&ndash;9</span>
              <span>ENTRIES: 4</span>
            </div>
          </div>
        </div>
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

      {/* REFLECTION */}
      <section id="reflection">
        <div className="entry-tag" style={{ marginBottom: "2rem" }}>
          <div className="price">
            <span className="n">R</span>
            <span className="u">REFLECT</span>
          </div>
          <div className="info">
            <div className="title">Course Reflection: Entries 1 through 4</div>
            <div className="sku-line">
              <span>BY: HEMIT PATEL</span>
              <span>DATE: JUN 15, 2026</span>
              <span>CH: 1&ndash;9</span>
              <span>ENTRIES: 4</span>
            </div>
          </div>
        </div>

        <div className="wrap">
          <p style={{ maxWidth: "46rem", marginBottom: ".9rem", textAlign: "justify" }}>
            I came into this course expecting economics to be mostly graphs and
            formulas. What I didn&rsquo;t expect was to spend most of the
            semester reading about Canada&rsquo;s grocery stores.
          </p>

          <p style={{ maxWidth: "46rem", marginBottom: ".9rem", textAlign: "justify" }}>
            The first entry set the tone. Canada&rsquo;s GDP contracted in Q4,
            which seemed simple at first: less output, lower GDP, Canada moves
            inside its production possibilities curve. But the more I read, the
            more I realized the contraction wasn&rsquo;t really a production
            problem. Companies had the capacity to make things. They just
            weren&rsquo;t using it, because they were scared the goods they
            manufactured wouldn&rsquo;t sell. The textbook didn&rsquo;t quite
            prepare me for that. The PPC assumes a physical limit on output. A
            fear-based limit is different.
          </p>

          <p style={{ maxWidth: "46rem", marginBottom: ".9rem", textAlign: "justify" }}>
            By entry two, I was starting to see how the government tries to
            fill those gaps. Ontario&rsquo;s $13.8 billion deficit budget was
            my first real look at fiscal policy in action. The small business
            tax cut from 3.2% to 2.2% might sound minor, but across 375,000
            businesses, that&rsquo;s a real change in how much stays in a sole
            proprietor&rsquo;s pocket at year&rsquo;s end. The home buyer
            rebate was even blunter, up to $130,000 off on homes priced up to
            $1.85 million. I kept trying to figure out whether that actually
            helps buyers or just props up an already expensive market. I still
            don&rsquo;t have a clean answer on that one.
          </p>

          <p style={{ maxWidth: "46rem", marginBottom: ".9rem", textAlign: "justify" }}>
            Entry three was the one that genuinely surprised me. If the
            government imposes a 25% tariff on American goods, I expected
            prices to go up roughly 25%. They went up about 6%. I had to sit
            with that for a bit. The answer, once I worked through it, was
            market power. The major retailers (the Bank of Canada only studied
            seven of them) could choose how much of that cost to absorb and how
            much to pass on to customers. They are price-makers, not
            price-takers. Supply and demand still explains which direction
            prices moved, but the size of the move depended entirely on who was
            doing the selling.
          </p>

          <p style={{ maxWidth: "46rem", marginBottom: ".9rem", textAlign: "justify" }}>
            Entry four felt like the consequence of entry three. If a handful
            of retailers have that much control over pricing, and five grocery
            chains account for about 75% of sales, there is no real competitive
            pressure to keep prices down. Ottawa&rsquo;s $3.2 billion food
            security strategy is basically a bet that funding regional food hubs
            and giving the Competition Bureau more resources will change that.
            Whether it shifts industrial concentration in any lasting way is a
            different question. But it was interesting to see the government go
            directly at the structure of the market rather than just adjusting
            prices at the edges.
          </p>

          <p style={{ maxWidth: "46rem", marginBottom: ".9rem", textAlign: "justify" }}>
            What I actually took away from these four entries is not any single
            concept. It is something about how the models work in practice.
            Supply and demand holds. The PPC is real. But the models assume
            conditions that Canadian grocery retail does not actually meet. The
            most useful shift for me was getting into the habit of asking,
            before applying any model: how many sellers are there, and how much
            can they actually control the price? That question changes what the
            model predicts.
          </p>
        </div>
      </section>

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
