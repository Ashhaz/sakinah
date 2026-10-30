import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Problem } from "@/content/problems";
import { Reveal } from "./reveal";

export function ProblemCard({ problem, index = 0 }: { problem: Problem; index?: number }) {
  const Icon = problem.icon;
  return (
    <Reveal delay={(index % 3) * 0.055}>
      <Link href={`/problems/${problem.slug}/`} className="problem-card">
        <div className="problem-card-top">
          <span className="problem-icon"><Icon size={23} strokeWidth={1.55} /></span>
          <span className="card-arrow"><ArrowUpRight size={18} /></span>
        </div>
        <div className="problem-category">{problem.category === "emotional" ? "EMOTIONAL WELLBEING" : "PHYSICAL WELLBEING"}</div>
        <h3>{problem.shortTitle}</h3>
        <p>{problem.summary}</p>
      </Link>
    </Reveal>
  );
}
