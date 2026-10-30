"use client";

import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";
import { problems } from "@/content/problems";

export function ProblemSearch() {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const matches = useMemo(() => {
    const value = query.toLowerCase().trim();
    if (!value) return [];
    return problems.filter((problem) => `${problem.title} ${problem.summary} ${problem.feelings.join(" ")}`.toLowerCase().includes(value)).slice(0, 4);
  }, [query]);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!query.trim()) {
      setMessage("Type a feeling or topic to begin.");
      return;
    }
    if (matches[0]) router.push(`/problems/${matches[0].slug}/`);
    else router.push(`/problems/?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <div className="hero-search-wrap">
      <form className="hero-search" onSubmit={submit} role="search">
        <Search size={19} aria-hidden="true" />
        <label className="sr-only" htmlFor="hero-problem-search">What are you going through?</label>
        <input id="hero-problem-search" value={query} onChange={(event) => { setQuery(event.target.value); setMessage(""); }} placeholder="What are you going through?" autoComplete="off" />
        <button type="submit" aria-label="Search topics"><ArrowRight size={19} /></button>
      </form>
      {message && <p className="search-message">{message}</p>}
      {matches.length > 0 && query.trim() && (
        <div className="search-suggestions">
          {matches.map((problem) => <button key={problem.slug} onClick={() => router.push(`/problems/${problem.slug}/`)}>{problem.shortTitle}<ArrowRight size={14} /></button>)}
        </div>
      )}
    </div>
  );
}
