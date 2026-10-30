import type { Metadata } from "next";
import { PageHeading } from "@/components/page-heading";
import { ProblemExplorer } from "@/components/problem-explorer";

export const metadata: Metadata = {
  title: "Explore Problems",
  description: "Browse emotional, psychological and physical wellbeing topics with carefully referenced Islamic guidance."
};

export default function ProblemsPage() {
  return (
    <div className="inner-page">
      <PageHeading eyebrow="A SPACE WITHOUT JUDGEMENT" title="Start with what you are feeling." description="Explore emotional, psychological and physical concerns. Every topic separates the source text from reflection and practical suggestions." />
      <ProblemExplorer />
    </div>
  );
}
