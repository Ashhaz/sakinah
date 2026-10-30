import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake, Sparkles } from "lucide-react";
import { HomeHero } from "@/components/home-hero";
import { ProblemCard } from "@/components/problem-card";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { emotionalProblems, physicalProblems } from "@/content/problems";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <section className="content-section explore-section" id="explore">
        <div className="section-header-row">
          <SectionTitle eyebrow="START WHERE YOU ARE" title="What are you carrying?" description="You do not need to explain everything. Begin with the topic that feels closest to you today." />
          <Link href="/problems/" className="button button-outline">Explore all topics <ArrowRight size={16} /></Link>
        </div>
        <div className="problem-grid home-grid">
          {emotionalProblems.slice(0, 9).map((problem, index) => <ProblemCard key={problem.slug} problem={problem} index={index} />)}
        </div>
        <div className="section-subhead"><div><span className="eyebrow">PHYSICAL WELLBEING</span><h3>Your body matters, too.</h3></div><p>Spiritual care and physical care belong together. Your body has rights over you.</p></div>
        <div className="problem-grid physical-grid">
          {physicalProblems.map((problem, index) => <ProblemCard key={problem.slug} problem={problem} index={index} />)}
        </div>
      </section>

      <section className="content-section reflection-section">
        <Reveal className="reflection-panel">
          <div className="reflection-copy">
            <span className="eyebrow"><Sparkles size={13} /> A MOMENT TO PAUSE</span>
            <h2>Be gentle with the season you are in.</h2>
            <p>“Cherish that which gives you benefit, seek help from Allah and do not lose heart.”</p>
            <span className="reflection-reference">Sahih Muslim 2664</span>
            <Link href="/quran-hadith/" className="button button-gold">Explore the sources <ArrowRight size={16} /></Link>
          </div>
          <div className="reflection-emblem"><div className="emblem-ring"><BookOpen size={42} strokeWidth={1.15} /></div><span>SEEK · REMEMBER · CONTINUE</span></div>
        </Reveal>
      </section>

      <section className="content-section trust-section">
        <div className="trust-copy"><span className="eyebrow">OUR PROMISE</span><h2>Comfort without careless claims.</h2><p>Islamic sources deserve accuracy. Mental health deserves compassion. We keep revelation, hadith, scholarly context and our own reflections clearly distinguished.</p><Link href="/about/" className="text-link">How Sakinah works <ArrowRight size={15} /></Link></div>
        <div className="trust-points">
          <div><BookOpen /><span><strong>Referenced sources</strong><small>Surah and ayah, or collection and hadith number.</small></span></div>
          <div><HeartHandshake /><span><strong>No judgement</strong><small>Struggling is not treated as a failure of faith.</small></span></div>
          <div><Sparkles /><span><strong>Practical care</strong><small>Spiritual grounding alongside appropriate real-world help.</small></span></div>
        </div>
      </section>
    </>
  );
}
