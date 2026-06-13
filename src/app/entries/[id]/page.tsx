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
    title: `${article.title} - The Price of Everything`,
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
  if (id === "entry1") return <Entry1 />;
  if (id === "entry2") return <Entry2 />;
  if (id === "entry3") return <Entry3 />;
  if (id === "entry4") return <Entry4 />;

  return (
    <PlaceholderEntry
      id={id}
      number={article.number}
      todoText="Content coming soon."
    />
  );
}

/* ------------------------------------------------------------------ */
/* Entry 1 - complete                                                   */
/* ------------------------------------------------------------------ */

function Entry1() {
  return (
    <section className="entry" id="entry1">
      <EntryTag
        number="01"
        title="Canada's Q4 GDP unexpectedly contracts, full-year growth at 1.7%"
        skuLines={[
          "SRC: Reuters",
          "PUB: Feb 27, 2026",
          "ENTRY: Mar 3, 2026",
          "CH: 1",
          "LINK: https://www.reuters.com/world/americas/canadas-q4-gdp-contracts-annualized-basis-full-year-growth-17-2026-02-27/",
        ]}
      />

      <h3>Summary</h3>
      <p>
        The Canadian Gross Domestic Product (GDP), a metric that measures total
        goods and services produced, decreased in the fourth quarter (Q4) by an
        annualized rate of 0.6 percent, annualized meaning it is scaled to a
        yearly basis. Analysts had forecasted little to no growth in Q4, so this
        signals an unexpected worsening of the Canadian economy. The main culprit
        was a lack of production of new goods, leading to a lower number of
        products being outputted into economy. Worsening trade relations with US
        left companies reluctant to invest in new production for fear that the
        goods they manufactured would not sell.
      </p>

      <h3>Economic Concepts</h3>
      <p>
        This article connects directly to Chapter 1. Canada&rsquo;s declining{" "}
        <span className="kw">GDP</span> is a direct result of reduced production
        of new goods, which shows how <span className="kw">scarcity</span> worsens
        when <span className="kw">inputs</span> are not being used efficiently.
        Companies held back <span className="kw">capital</span> investment in
        machinery and equipment out of fear that the goods they made would not
        sell due to trade tensions with the US. This drop in investment lowers{" "}
        <span className="kw">productivity</span>, as fewer goods are produced per
        worker, meaning Canada moves inside its{" "}
        <span className="kw">Production Possibilities Curve</span>. The long-term
        impact threatens Canada&rsquo;s{" "}
        <span className="kw">standard of living</span>, since lower production
        means fewer goods and services available to households. The{" "}
        <span className="kw">opportunity cost</span> of not investing was the
        economic growth Canada gave up by keeping production low.
      </p>

      <div className="imgrow">
        <div className="imgslot" style={{ aspectRatio: "auto", padding: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/entries/entry1/gdp.png"
            alt="GDP letter tiles stacked on coins"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
        <div className="imgslot" style={{ aspectRatio: "auto", padding: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/entries/entry1/canada-flag.png"
            alt="Canadian flag"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
      </div>

      <KeyWordFacts subtitle="Chapter 1 · full list with definitions">
        <dt>Inputs</dt>
        <dd>
          Resources such as labour, capital equipment, and natural resources,
          that are used to produce goods and services.
        </dd>
        <dt>Capital</dt>
        <dd>
          The tools, equipment, machinery, buildings and factories used in the
          production of goods and services.
        </dd>
        <dt>Productivity</dt>
        <dd>Output per worker per hour. It is a measure of efficiency.</dd>
        <dt>Standard of Living</dt>
        <dd>
          A measure of the prosperity of a society, usually expressed in terms
          of the volume of good consumer goods and services consumed per
          household or person per year.
        </dd>
        <dt>Scarcity</dt>
        <dd>
          The fundamental economic problem that occurs because people&rsquo;s
          wants and needs are unlimited but are limited to those economic
          resources that are available to satisfy them.
        </dd>
        <dt>Opportunity Cost</dt>
        <dd>
          The economic cost of producing something is the foregone opportunity
          of producing something else that could have been produced with those
          same economic inputs.
        </dd>
        <dt>Production Possibilities Curve</dt>
        <dd>
          A curve that shows the economy&rsquo;s potential output, assuming
          economic inputs are fully used.
        </dd>
        <dt>GDP</dt>
        <dd>
          A measure of the value of goods and services produced and incomes
          earned in a country in a year.
        </dd>
      </KeyWordFacts>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Entry 2 - complete                                                   */
/* ------------------------------------------------------------------ */

function Entry2() {
  return (
    <section className="entry" id="entry2">
      <EntryTag
        number="02"
        title="Ontario's 2026 budget sees deficit hit $13.8B amid looming global instability"
        skuLines={[
          "SRC: CBC News",
          "PUB: Mar 26, 2026",
          "ENTRY: Apr 6, 2026",
          "CH: 2, 3",
          "LINK: cbc.ca/news/canada/toronto/ontario-budget-2026-9.7143032",
        ]}
      />

      <h3>Summary</h3>
      <p>
        The 2026 budget for Ontario was unveiled by Minister of Finance Peter
        Bethlenfalvy. It projects a 13.8 billion dollar deficit, meaning that
        the government will spend 13.8 billion more than their revenue
        (primarily taxes) in the fiscal year. A 244 billion dollar spending
        plan proposed will prioritize infrastructure, research, and support for
        high-growth industries. A key measure is a cut to the small business
        corporate income tax rate from 3.2% to 2.2%, benefiting an estimated
        375,000 businesses. The budget also includes a temporary IST rebate for
        new home buyers on properties up to 1.85 million dollars.
      </p>

      <h3>Economic Concepts</h3>
      <p>
        This article connects directly to Chapter 2 &amp; 3. Ontario&rsquo;s
        budget demonstrates how Canada operates in a{" "}
        <span className="kw">market system</span> mixed with some{" "}
        <span className="kw">command system</span> features. Citizens can
        freely open businesses and buy from these companies, but the government
        still intervenes in economic activities. For example, Ontario cut the
        small business corporate income tax rate from 3.2% to 2.2%, which
        directly impacts the <span className="kw">profits</span> business
        owners keep from their sale. It mainly affects{" "}
        <span className="kw">sole proprietorships</span>, since they make up
        most small businesses. The temporary rebate for new home buyers that
        covers about 130,000 dollars on homes valued up to 1.85 million is a
        clear example of a <span className="kw">subsidy</span> as the
        government provides funds to offset the cost for the end user to reduce
        the cost for the buyer.
      </p>

      <div className="imgrow">
        <div className="imgslot" style={{ aspectRatio: "auto", padding: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/entries/entry2/ontario-flag.png"
            alt="Ontario flag"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
        <div className="imgslot" style={{ aspectRatio: "auto", padding: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/entries/entry2/budget.png"
            alt="Calculator and budget document"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
      </div>

      <KeyWordFacts subtitle="Chapters 2–3 · full list with definitions">
        <dt>Market system</dt>
        <dd>
          An economic system in which economic decisions are made mainly by
          buyers and sellers of goods, services and resources in an
          uncoordinated manner.
        </dd>
        <dt>Command system</dt>
        <dd>
          An economic system in which economic decisions are made mainly by the
          government in a centralized manner.
        </dd>
        <dt>Profits</dt>
        <dd>
          Those funds left from a business&rsquo;s sales revenues after all
          expenses have been paid. Such funds are therefore available (after
          taxes have been paid) for dividends to shareholders or for
          reinvestment in the firm.
        </dd>
        <dt>Sole proprietorship</dt>
        <dd>
          A business firm owned (and usually managed) by a single person who
          bears full legal liability for the firm&rsquo;s debts.
        </dd>
        <dt>Subsidies</dt>
        <dd>
          Payments by the government to lower the cost of a service in order to
          reduce the cost to the user of the service.
        </dd>
      </KeyWordFacts>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Entry 3 - complete                                                   */
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
          "LINK: https://www.ctvnews.ca/business/inflation/article/boc-report-estimates-counter-tariffs-pushed-prices-up-about-6-last-year/",
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
        suggests demand is relatively <span className="kw">elastic</span>: if
        prices rise too much, shoppers switch to substitute goods or stop buying
        outright. The study only looked at seven big retailers, which is a{" "}
        <span className="kw">concentrated industry</span>. These large firms
        have enough <span className="kw">market power</span> to choose how much
        cost to pass on, while smaller stores would act as{" "}
        <span className="kw">price-takers</span>.
      </p>

      <div className="imgrow">
        <div className="imgslot" style={{ aspectRatio: "auto", padding: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/entries/entry3/us-canada-flags.png"
            alt="US and Canada flags overlapping"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
        <div className="imgslot" style={{ aspectRatio: "auto", padding: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/entries/entry3/tariffs.png"
            alt="Shipping containers with tariffs tape"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
      </div>

      <KeyWordFacts subtitle="Chapters 4–7 · full list with definitions">
        <dt>Supply curve</dt>
        <dd>A graphical representation of a supply schedule.</dd>
        <dt>Equilibrium price</dt>
        <dd>
          A price determined in the marketplace by the interaction of supply and
          demand. The price where there is no surplus or shortage.
        </dd>
        <dt>Equilibrium quantity</dt>
        <dd>The quantity sold (bought) at the equilibrium price.</dd>
        <dt>Elastic Demand</dt>
        <dd>
          The term used to describe demand if a price increase causes a
          reduction in total sales revenue.
        </dd>
        <dt>Concentrated industry</dt>
        <dd>
          An industry that is dominated by a few large firms and is not easily
          entered by new competitors.
        </dd>
        <dt>Market power</dt>
        <dd>
          The ability to raise one&rsquo;s prices, usually associated with a
          dominant or monopolistic position in the market.
        </dd>
        <dt>Price-taker</dt>
        <dd>
          Term used to describe the position of the individual small firm in a
          competitive industry, which is unable to influence the price of its
          product and is forced to accept (take) whatever price is determined
          in the market.
        </dd>
      </KeyWordFacts>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Entry 4 - in progress                                                */
/* ------------------------------------------------------------------ */

function Entry4() {
  return (
    <section className="entry" id="entry4">
      <EntryTag
        number="04"
        title="Ottawa aims to cut grocery bills with $3.2B food security strategy"
        skuLines={[
          "SRC: Global News",
          "PUB: Jun 11, 2026",
          "ENTRY: Jun 12, 2026",
          "CH: 7, 9",
          "LINK: https://globalnews.ca/news/11232576/canada-food-security-strategy-grocery-prices/",
        ]}
      />

      <h3>Summary</h3>
      <p>
        On June 11, 2026, Ottawa announced a $3.2-billion national food
        security strategy called &ldquo;More Choice. More Control. More
        Canada.&rdquo; Prime Minister Mark Carney said it aims to lower grocery
        bills, cut Canada&rsquo;s reliance on imported food, and loosen the
        grip of the five chains that control about 75 per cent of grocery sales.
        A new Food-Link Fund will spend $1 billion over ten years to expand the
        Ontario Food Terminal and build regional food hubs so independent
        grocers and farmers can bypass the Big Five. The plan also gives the
        Competition Bureau $12.9 million more each year to investigate tactics
        like property controls that block new competitors.
      </p>

      <h3>Economic Concepts</h3>
      <p>
        The article ties directly to market structures and government policy
        toward business. Canadian grocery retail is a clear{" "}
        <span className="kw">concentrated industry</span>, since five chains
        hold about 75 per cent of sales, much like an{" "}
        <span className="kw">oligopoly</span>. That size gives them{" "}
        <span className="kw">market power</span>, the ability to keep prices
        higher than real competition would allow, which the government blames
        for rising food costs. By funding food hubs for independent grocers,
        Ottawa is trying to weaken this{" "}
        <span className="kw">industrial concentration</span>. The strategy is
        the opposite of <span className="kw">laissez-faire</span>, since the
        government steps in and funds the Competition Bureau to fight
        anti-competitive tactics. It also pushes back on{" "}
        <span className="kw">globalization</span> by reducing reliance on
        imported food.
      </p>

      <div className="imgrow">
        <div className="imgslot" style={{ aspectRatio: "auto", padding: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/entries/entry4/grocery-prices.png"
            alt="Person shopping at bulk grocery store with tiered pricing"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
        <div className="imgslot" style={{ aspectRatio: "auto", padding: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/entries/entry4/parliament.png"
            alt="Canadian Parliament buildings"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
      </div>

      <KeyWordFacts subtitle="Chapters 7–9 · full list with definitions">
        <dt>Concentrated industry</dt>
        <dd>
          An industry that is dominated by a few large firms and is not easily
          entered by new competitors.
        </dd>
        <dt>Oligopoly</dt>
        <dd>
          A situation in which four or fewer firms account for at least half of
          the sales of an industry.
        </dd>
        <dt>Market power</dt>
        <dd>
          The ability to raise one&rsquo;s prices, usually associated with a
          dominant or monopolistic position in the market.
        </dd>
        <dt>Industrial concentration</dt>
        <dd>
          The degree to which an industry is dominated by a few firms.
        </dd>
        <dt>Laissez-faire</dt>
        <dd>
          The doctrine or philosophy that, from the viewpoint of the public
          interest, it is neither necessary nor beneficial for governments to
          intervene in the operation of the economy.
        </dd>
        <dt>Globalization</dt>
        <dd>
          The growing internationalization of business, trade, and finance that
          has characterized the period since the early 1980s.
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
            ← Previous
          </Link>
        )}
      </div>
      <Link href="/" className="ep-home">
        All Entries
      </Link>
      <div className="ep-slot ep-slot-right">
        {next && (
          <Link href={`/entries/${next.id}`} className="ep-link ep-next">
            Next →
          </Link>
        )}
      </div>
    </nav>
  );
}
