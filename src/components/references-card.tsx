import { BookOpen, ExternalLink, ScrollText } from "lucide-react";
import type { IslamicReference } from "@/content/references";

export function ReferenceCard({ reference }: { reference: IslamicReference }) {
  const Icon = reference.kind === "quran" ? BookOpen : ScrollText;
  return (
    <article className="source-card">
      <div className="source-topline">
        <span className="source-kind"><Icon size={14} /> {reference.kind === "quran" ? "Qur'an" : "Hadith"}</span>
        <span className="source-citation">{reference.citation}</span>
      </div>
      <h3>{reference.title}</h3>
      <blockquote>{reference.excerpt}</blockquote>
      <p className="translation-label">{reference.translation}</p>
      <div className="source-context"><strong>Context</strong><p>{reference.context}</p></div>
      <div className="source-context source-application"><strong>How this is used here</strong><p>{reference.applicationNote}</p></div>
      <a className="source-link" href={reference.sourceUrl} target="_blank" rel="noreferrer">
        Open original reference <ExternalLink size={14} />
      </a>
    </article>
  );
}
