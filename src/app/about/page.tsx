import type { Metadata } from "next";
import { BookOpenCheck, HeartHandshake, ShieldCheck, Stethoscope } from "lucide-react";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = {
  title: "About Sakinah",
  description: "The principles behind Sakinah: Islamic source accuracy, compassionate language, privacy and appropriate professional care."
};

const principles = [
  { icon: BookOpenCheck, title: "Sources before slogans", text: "Every Qur'anic excerpt includes a surah and ayah. Every hadith includes its collection and reference number, plus a link to the cited record." },
  { icon: ShieldCheck, title: "Context before conclusions", text: "A verse or hadith is not detached from its original context to create an easy answer. Our reflections are labelled as reflections, not revelation." },
  { icon: HeartHandshake, title: "Compassion without judgement", text: "A person can experience sadness, anxiety or illness without being labelled weak in faith. No one should be shamed for seeking support." },
  { icon: Stethoscope, title: "Spiritual and professional care", text: "Du'a, worship, community, doctors and mental-health professionals can all have a place. Sakinah does not diagnose or prescribe treatment." }
];

export default function AboutPage() {
  return (
    <div className="inner-page">
      <PageHeading eyebrow="WHY THIS EXISTS" title="Comfort should never come at the cost of accuracy." description="Sakinah is imagined as a quiet digital place for people navigating the emotional and physical pressures of modern life, with Islamic guidance presented carefully and humanely." />
      <div className="principle-grid">{principles.map((principle) => { const Icon = principle.icon; return <article className="principle-card" key={principle.title}><span><Icon size={23} /></span><h2>{principle.title}</h2><p>{principle.text}</p></article>; })}</div>
      <section className="editorial-section">
        <div className="section-title"><div className="eyebrow">HOW WE HANDLE ISLAMIC CONTENT</div><h2>A strict editorial rule.</h2></div>
        <div className="editorial-list">
          <div><b>01</b><p>Find the original Qur'an or hadith source and record the exact reference.</p></div>
          <div><b>02</b><p>Check Arabic wording, translation attribution, hadith grading where applicable and numbering.</p></div>
          <div><b>03</b><p>Read the surrounding context and reliable explanation before connecting a text to a modern problem.</p></div>
          <div><b>04</b><p>Ask a qualified scholar or knowledgeable reviewer to review religious interpretation before public release.</p></div>
          <div><b>05</b><p>Clearly mark original source text, editorial reflection and general wellbeing advice as different things.</p></div>
        </div>
      </section>
      <div className="editorial-banner"><strong>Important limitation</strong><p>This is an educational and spiritual-support project, not a fatwa service, medical service or crisis service. The starter content needs a qualified human review before being treated as a formally approved religious resource.</p></div>
    </div>
  );
}
