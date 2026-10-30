import type { Metadata } from "next";
import { ExternalLink, HandHeart } from "lucide-react";
import { PageHeading } from "@/components/page-heading";

export const metadata: Metadata = {
  title: "Du'as for Difficult Moments",
  description: "A carefully sourced Prophetic supplication seeking refuge from worry and grief."
};

export default function DuasPage() {
  return (
    <div className="inner-page">
      <PageHeading eyebrow="SUPPLICATIONS" title="Turn to Allah in your own words, too." description="This starter collection begins with a supplication recorded in Sahih al-Bukhari. The wording and reference are shown so you can check the source." />
      <article className="dua-feature">
        <div className="dua-label"><HandHeart size={17} /> PROPHETIC SUPPLICATION</div>
        <h2>Seeking refuge from worry and grief</h2>
        <p className="dua-arabic" lang="ar" dir="rtl">اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْجُبْنِ وَالْبُخْلِ، وَضَلَعِ الدَّيْنِ، وَغَلَبَةِ الرِّجَالِ</p>
        <div className="dua-translation"><span className="eyebrow">MEANING IN ENGLISH</span><blockquote>“O Allah, I seek refuge with You from worry and grief, from incapacity and laziness, from cowardice and miserliness, from being heavily in debt and from being overpowered by men.”</blockquote></div>
        <div className="dua-source"><div><strong>Sahih al-Bukhari 6369</strong><small>Book 80, Hadith 66 · Narrated by Anas ibn Malik</small></div><a href="https://sunnah.com/bukhari/80/66" target="_blank" rel="noreferrer">Check narration <ExternalLink size={14} /></a></div>
      </article>
      <div className="editorial-banner"><strong>A gentle note</strong><p>This is a supplication taught in the Sunnah, not a guaranteed cure or a substitute for practical action, medical care or mental-health support. You can also speak to Allah in your own words.</p></div>
    </div>
  );
}
