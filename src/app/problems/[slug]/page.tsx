import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Heart, Lightbulb } from "lucide-react";
import { PageHeading } from "@/components/page-heading";
import { ReferenceCard } from "@/components/references-card";
import { ProblemCard } from "@/components/problem-card";
import { SupportNote, UrgentSupportNote } from "@/components/support-note";
import { Reveal } from "@/components/reveal";
import { getProblem, problems } from "@/content/problems";
import { getReference } from "@/content/references";

type RouteProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return problems.map((problem) => ({ slug: problem.slug }));
}

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { slug } = await params;
  const problem = getProblem(slug);
  if (!problem) return { title: "Topic not found" };
  return { title: problem.title, description: problem.summary };
}

export default async function ProblemDetailPage({ params }: RouteProps) {
  const { slug } = await params;
  const problem = getProblem(slug);
  if (!problem) notFound();
  const Icon = problem.icon;
  const sourceCards = problem.referenceIds.map((id) => getReference(id)).filter((reference) => reference !== undefined);
  const related = problem.related.map((id) => getProblem(id)).filter((item) => item !== undefined);
  const supportText = problem.supportNote ?? (problem.category === "emotional"
    ? "If this experience is persistent, intense or affecting daily life, a qualified mental-health professional can help you understand what is happening and explore support options."
    : "For persistent, severe or worsening symptoms, consider an assessment by a qualified healthcare professional. This page is not a medical assessment or treatment plan.");

  return (
    <div className="inner-page problem-detail-page">
      <Link href="/problems/" className="back-link"><ArrowLeft size={15} /> All topics</Link>
      <div className="detail-hero">
        <div className="detail-heading">
          <div className="eyebrow">{problem.category === "emotional" ? "EMOTIONAL & MENTAL WELLBEING" : "PHYSICAL WELLBEING"}</div>
          <h1>{problem.title}</h1>
          <p>{problem.introduction}</p>
        </div>
        <div className="detail-icon"><Icon size={54} strokeWidth={1.15} /></div>
      </div>

      <Reveal className="detail-section">
        <div className="section-title"><div className="eyebrow">YOU MIGHT RECOGNISE</div><h2>What this can feel like</h2><p>These are examples, not a checklist or diagnosis. Your experience may look different.</p></div>
        <div className="feeling-grid">{problem.feelings.map((feeling) => <div className="feeling-item" key={feeling}><span><CheckCircle2 size={15} /></span>{feeling}</div>)}</div>
      </Reveal>

      <section className="detail-section">
        <div className="section-title"><div className="eyebrow">QUR'AN & SUNNAH</div><h2>Guidance with its references.</h2><p>Read the source, its context and the limits of how we apply it. Translations are meanings in English, not the Arabic revelation itself.</p></div>
        <div className="source-grid">{sourceCards.map((reference) => <ReferenceCard key={reference.id} reference={reference} />)}</div>
        <div className="context-banner"><BookIcon /><div><strong>Context matters</strong><p>{problem.sourceContext}</p></div></div>
      </section>

      <Reveal className="detail-section action-section">
        <div className="section-title"><div className="eyebrow">ONE GENTLE STEP AT A TIME</div><h2>What you can try today</h2><p>These are general suggestions, not religious rulings or medical instructions. Adapt them to your circumstances.</p></div>
        <div className="steps-list">{problem.practicalSteps.map((step, index) => <div className="step-item" key={step}><span className="step-number">0{index + 1}</span><p>{step}</p></div>)}</div>
      </Reveal>

      <div className="detail-section"><SupportNote text={supportText} />{problem.category === "emotional" && <UrgentSupportNote />}</div>

      <div className="detail-closing"><Heart size={18} /><p>You are allowed to seek help, take things slowly, and return to this page whenever you need a reminder.</p></div>

      {related.length > 0 && <section className="detail-section related-section"><div className="section-title"><div className="eyebrow">KEEP EXPLORING</div><h2>Related topics</h2></div><div className="problem-grid">{related.map((item, index) => <ProblemCard key={item.slug} problem={item} index={index} />)}</div></section>}
    </div>
  );
}

function BookIcon() {
  return <span className="context-icon"><Lightbulb size={19} /></span>;
}
