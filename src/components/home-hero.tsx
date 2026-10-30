import Link from "next/link";
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react";
import { SceneLoader } from "./scene-loader";
import { ProblemSearch } from "./problem-search";

export function HomeHero() {
  return (
    <section className="hero-section">
      <SceneLoader />
      <div className="hero-mist hero-mist-one" />
      <div className="hero-mist hero-mist-two" />
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14} /> A QUIET CORNER FOR DIFFICULT DAYS</div>
          <h1>You don&apos;t have to carry it <em>all at once.</em></h1>
          <p className="hero-description">Whatever you&apos;re facing, take a moment. Find carefully referenced guidance from the Qur&apos;an and Sunnah, thoughtful reflection, and one gentle next step.</p>
          <ProblemSearch />
          <div className="popular-topics"><span>START HERE</span><Link href="/problems/anxiety-and-overthinking/">Anxiety</Link><Link href="/problems/depression-and-sadness/">Sadness</Link><Link href="/problems/burnout-and-exhaustion/">Burnout</Link><Link href="/problems/sleep-difficulties/">Sleep</Link></div>
        </div>
        <div className="hero-verse-wrap">
          <div className="hero-verse-orbit" />
          <div className="hero-verse-card">
            <div className="ornament-line"><span /> A VERSE TO RETURN TO <span /></div>
            <div className="hero-arabic" lang="ar" dir="rtl">أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ</div>
            <blockquote>“Unquestionably, by the remembrance of Allah hearts are assured.”</blockquote>
            <div className="verse-reference">Qur&apos;an · Ar-Ra&apos;d 13:28</div>
            <Link href="/quran-hadith/" className="text-link">Read with context <ArrowRight size={15} /></Link>
          </div>
          <div className="hero-note"><span className="note-dot" /> Take what helps. Leave the rest for another day.</div>
        </div>
      </div>
      <a className="scroll-cue" href="#explore"><span>EXPLORE AT YOUR OWN PACE</span><ArrowDown size={15} /></a>
    </section>
  );
}
