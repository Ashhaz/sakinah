import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { reminders } from "@/content/reminders";

export const metadata: Metadata = {
  title: "Gentle Reminders",
  description: "A curated set of referenced Qur'anic and Prophetic reminders for reflection."
};

export default function RemindersPage() {
  return (
    <div className="inner-page">
      <PageHeading eyebrow="RETURN TO WHAT MATTERS" title="A few reminders for the days that feel long." description="These are curated reflections, not automated religious rulings or promises. Open each reference to read its context." />
      <div className="reminder-grid">
        {reminders.map((item, index) => (
          <article className={`reminder-card reminder-card-${index + 1}`} key={item.sourceId}>
            <div className="reminder-eyebrow"><Sparkles size={13} /> {item.eyebrow}</div>
            <h2>{item.title}</h2>
            <blockquote>“{item.quote}”</blockquote>
            <p>{item.reflection}</p>
            <div className="reminder-bottom"><span>{item.reference}</span><Link href="/quran-hadith/">Read the source <ArrowUpRight size={14} /></Link></div>
          </article>
        ))}
      </div>
    </div>
  );
}
