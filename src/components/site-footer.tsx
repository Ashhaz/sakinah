import Link from "next/link";
import { HeartHandshake, MoonStar } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand-block">
          <Link href="/" className="brand footer-brand">
            <span className="brand-symbol"><MoonStar size={22} strokeWidth={1.5} /></span>
            <span className="brand-copy"><strong>Sakinah</strong><small>A QUIET PLACE FOR DIFFICULT DAYS</small></span>
          </Link>
          <p>Pause. Remember. Reflect. Take one gentle next step.</p>
        </div>
        <div className="footer-links">
          <Link href="/problems/">Explore problems</Link>
          <Link href="/quran-hadith/">Qur'an & Hadith</Link>
          <Link href="/duas/">Du'as</Link>
          <Link href="/about/">Our approach</Link>
        </div>
      </div>
      <div className="footer-safety">
        <HeartHandshake size={17} />
        <p><strong>Care matters.</strong> This website offers spiritual reflection and general information. It is not a diagnosis, fatwa or substitute for qualified medical or mental-health care. If you may be in immediate danger, reach out to someone you trust and local emergency services.</p>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Sakinah</span><span>Built with care. References shown with sources.</span></div>
    </footer>
  );
}
