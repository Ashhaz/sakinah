import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { ReferenceCard } from "@/components/references-card";
import { references } from "@/content/references";

export const metadata: Metadata = {
  title: "Qur'an & Hadith Library",
  description: "A curated library of Qur'anic verses and hadith with source references, context and application notes."
};

export default function SourcesPage() {
  const quran = references.filter((reference) => reference.kind === "quran");
  const hadith = references.filter((reference) => reference.kind === "hadith");
  return (
    <div className="inner-page">
      <PageHeading eyebrow="SOURCE LIBRARY" title="Read the source. Keep the context." description="A small, curated starter library. Every entry identifies its source and includes a note to help distinguish the original text from the reflection applied on this website." />
      <section className="library-section"><div className="section-title"><div className="eyebrow">THE QUR'AN</div><h2>Verses and their meanings</h2><p>English excerpts use the Saheeh International translation and link to the Quranic Arabic Corpus or a verse page.</p></div><div className="source-grid">{quran.map((reference) => <ReferenceCard key={reference.id} reference={reference} />)}</div></section>
      <section className="library-section"><div className="section-title"><div className="eyebrow">THE SUNNAH</div><h2>Prophetic narrations</h2><p>Hadith references include collection and numbering as shown by the linked source. Numbering can vary between editions and systems.</p></div><div className="source-grid">{hadith.map((reference) => <ReferenceCard key={reference.id} reference={reference} />)}</div></section>
      <div className="editorial-banner"><strong>Editorial standard</strong><p>Do not add a narration just because it sounds comforting. Verify the Arabic, collection, numbering, grading where relevant, translation and context before publication. For religious interpretation, consult qualified scholarship.</p></div>
    </div>
  );
}
