type TocEntry = {
  id: string;
  title: string;
  chapters: string;
  source: string;
  date: string;
};

const tocEntries: TocEntry[] = [
  { id: "entry1", title: "[Article title — to be added]", chapters: "CH —", source: "[Source 1]", date: "[date]" },
  { id: "entry2", title: "[Article title — to be added]", chapters: "CH —", source: "[Source 2]", date: "[date]" },
  { id: "entry3", title: "BoC report estimates counter-tariffs pushed prices up about 6% last year", chapters: "CH 4–7", source: "CTV News", date: "May 11, 2026" },
  { id: "entry4", title: "[Article title — to be added]", chapters: "CH —", source: "[Source 4]", date: "[date]" },
];

function Barcode({ label }: { label: string }) {
  return (
    <>
      <div className="barcode" aria-hidden="true" />
      <div className="barcode-label">{label}</div>
    </>
  );
}

function EntryTag({
  number,
  title,
  skuLines,
}: {
  number: string;
  title: string;
  skuLines: string[];
}) {
  return (
    <div className="entry-tag">
      <div className="price">
        <span className="n">{number}</span>
        <span className="u">ENTRY / EA</span>
      </div>
      <div className="info">
        <div className="title">{title}</div>
        <div className="sku-line">
          {skuLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function KeyWordFacts({
  subtitle,
  children,
}: {
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <details className="facts">
      <summary>
        <span className="ft">Key Word Facts</span>
        <span className="fs">{subtitle}</span>
      </summary>
      <div className="facts-body">
        <dl className="defs">{children}</dl>
      </div>
    </details>
  );
}

function ImageRow({ labels }: { labels: [string, string] }) {
  return (
    <div className="imgrow">
      <div className="imgslot">{labels[0]}</div>
      <div className="imgslot">{labels[1]}</div>
    </div>
  );
}

function Todo({ children }: { children: React.ReactNode }) {
  return (
    <div className="todo">
      <b>Out of stock</b> {children}
    </div>
  );
}

function PlaceholderEntry({
  id,
  number,
  todoText,
}: {
  id: string;
  number: string;
  todoText: string;
}) {
  return (
    <section className="entry" id={id}>
      <EntryTag
        number={number}
        title="[Article Title]"
        skuLines={[
          "SRC: [different source]",
          "PUB: [date ≥ Feb 2026]",
          "CH: [ ]",
          "LINK: [paste article URL]",
        ]}
      />
      <Todo>{todoText}</Todo>
      <h3>Summary</h3>
      <p>[6–7 lines]</p>
      <h3>Economic Concepts</h3>
      <p>
        [7–8 lines with at least four <span className="kw">key words</span>{" "}
        bolded]
      </p>
      <ImageRow labels={["IMAGE 1", "IMAGE 2"]} />
      <KeyWordFacts subtitle="Full chapter list · definitions required">
        <dt>[Term]</dt>
        <dd>[Definition]</dd>
      </KeyWordFacts>
    </section>
  );
}

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
            {tocEntries.map((entry, i) => (
              <div className="line" key={entry.id}>
                <span className="no">{String(i + 1).padStart(2, "0")}</span>
                <a href={`#${entry.id}`}>{entry.title}</a>
                <span className="ch">{entry.chapters}</span>
                <span className="meta">
                  {entry.source} · {entry.date}
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

        {/* ENTRY 1 */}
        <PlaceholderEntry
          id="entry1"
          number="01"
          todoText="Paste your Entry 1 summary (6–7 lines), Economic Concepts (7–8 lines, ≥4 key words wrapped in <span class=&quot;kw&quot;>), two images, and the chapter key-word list."
        />

        {/* ENTRY 2 */}
        <PlaceholderEntry
          id="entry2"
          number="02"
          todoText="Same structure as Entry 1."
        />

        {/* ENTRY 3 (COMPLETE) */}
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
            In March 2025, the Canadian government placed a 25 percent tax
            (counter tariff) on American goods like groceries and appliances as a
            retaliation to President DJT&rsquo;s tariffs. A Bank of Canada study
            released on May 11, 2026 looked at prices of 110,000 items at 7 big
            Canadian stores. It ultimately found that tariffed goods rose about 6
            percent more than non-tariffed goods over the year.
          </p>

          <h3>Economic Concepts</h3>
          <p>
            The 25% tariff made it more expensive for stores to bring American
            goods into the country, which shifts the{" "}
            <span className="kw">supply curve</span> to the left (reducing
            overall supply). This raised the{" "}
            <span className="kw">equilibrium price</span> and lowered the{" "}
            <span className="kw">equilibrium quantity</span> sold. Stores did
            not pass the full amount of the tax on to customers, which suggests
            demand is relatively <span className="kw">elastic</span> — if prices
            rise too much, shoppers switch to substitute goods or stop buying
            outright. The study only looked at seven big retailers, which is a{" "}
            <span className="kw">concentrated industry</span>. These large firms
            have enough <span className="kw">market power</span> to choose how
            much cost to pass on, while smaller stores would act as{" "}
            <span className="kw">price-takers</span>.
          </p>

          <ImageRow
            labels={[
              "IMAGE SLOT — e.g., supply/demand diagram, leftward supply shift",
              "IMAGE SLOT — e.g., grocery prices / Canada–US trade photo",
            ]}
          />

          <KeyWordFacts subtitle="Chapters 4–7 · full list with definitions">
            <dt>
              [Paste the full key-word list from chapters 4, 5, 6, 7]
            </dt>
            <dd>
              [The assignment requires the entire list with definitions — from
              your textbook.]
            </dd>
          </KeyWordFacts>
        </section>

        {/* ENTRY 4 */}
        <PlaceholderEntry
          id="entry4"
          number="04"
          todoText="Same structure as Entry 1."
        />

        {/* REFLECTION */}
        <section id="reflection">
          <div className="shelf-strip">
            <span className="sku">Exit Survey</span>
            <h2>Reflection</h2>
          </div>
          <div className="reflect-card">
            <Todo>
              Write your own reflection on the scrapbook and the course. What did
              following economic news for a semester teach you? Which entry
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
