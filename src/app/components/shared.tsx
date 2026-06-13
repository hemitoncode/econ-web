import React from "react";

export function Barcode({ label }: { label: string }) {
  return (
    <>
      <div className="barcode" aria-hidden="true" />
      <div className="barcode-label">{label}</div>
    </>
  );
}

export function EntryTag({
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
          {skuLines.map((line) => {
            if (line.startsWith("LINK: ")) {
              const url = line.slice("LINK: ".length);
              const isPlaceholder = url.startsWith("[");
              const href = isPlaceholder
                ? undefined
                : url.startsWith("http")
                ? url
                : `https://${url}`;
              return (
                <span key={line}>
                  {"LINK: "}
                  {isPlaceholder ? (
                    url
                  ) : (
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      click here to view
                    </a>
                  )}
                </span>
              );
            }
            return <span key={line}>{line}</span>;
          })}
        </div>
      </div>
    </div>
  );
}

export function KeyWordFacts({
  subtitle,
  children,
}: {
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="facts">
      <div className="facts-header">
        <span className="ft">Key Word Facts</span>
        <span className="fs">{subtitle}</span>
      </div>
      <div className="facts-body">
        <dl className="defs">{children}</dl>
      </div>
    </div>
  );
}

export function ImageRow({ labels }: { labels: [string, string] }) {
  return (
    <div className="imgrow">
      <div className="imgslot">{labels[0]}</div>
      <div className="imgslot">{labels[1]}</div>
    </div>
  );
}

export function Todo({ children }: { children: React.ReactNode }) {
  return (
    <div className="todo">
      <b>Out of stock</b> {children}
    </div>
  );
}

export function PlaceholderEntry({
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
