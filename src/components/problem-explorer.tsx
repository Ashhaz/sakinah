"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { problems } from "@/content/problems";
import { ProblemCard } from "./problem-card";

export function ProblemExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"all" | "emotional" | "physical">("all");
  useEffect(() => {
    const initialQuery = new URLSearchParams(window.location.search).get("q");
    if (initialQuery) setQuery(initialQuery);
  }, []);
  const filtered = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    return problems.filter((problem) => {
      const matchesCategory = category === "all" || problem.category === category;
      const haystack = `${problem.title} ${problem.summary} ${problem.feelings.join(" ")}`.toLowerCase();
      return matchesCategory && (!normalized || haystack.includes(normalized));
    });
  }, [query, category]);

  return (
    <div className="explorer">
      <div className="explorer-toolbar">
        <label className="explorer-search">
          <Search size={18} />
          <span className="sr-only">Search problems</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search anxiety, sleep, comparison..." />
          {query && <button type="button" aria-label="Clear search" onClick={() => setQuery("")}><X size={16} /></button>}
        </label>
        <div className="filter-label"><SlidersHorizontal size={15} /> Filter</div>
      </div>
      <div className="filter-row" aria-label="Filter by category">
        {(["all", "emotional", "physical"] as const).map((value) => (
          <button key={value} onClick={() => setCategory(value)} className={category === value ? "filter-pill selected" : "filter-pill"}>
            {value === "all" ? "All problems" : value === "emotional" ? "Emotional & mental" : "Physical wellbeing"}
          </button>
        ))}
      </div>
      <p className="result-count">{filtered.length} {filtered.length === 1 ? "topic" : "topics"} to explore</p>
      {filtered.length ? (
        <div className="problem-grid">{filtered.map((problem, index) => <ProblemCard key={problem.slug} problem={problem} index={index} />)}</div>
      ) : (
        <div className="empty-state"><Search size={26} /><h3>No exact match yet</h3><p>Try a broader word, or clear the search to browse all topics.</p><button className="button button-secondary" onClick={() => { setQuery(""); setCategory("all"); }}>Show all topics</button></div>
      )}
    </div>
  );
}
