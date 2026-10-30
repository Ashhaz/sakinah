import Link from "next/link";
import { ArrowLeft, MoonStar } from "lucide-react";

export default function NotFound() {
  return <div className="not-found inner-page"><MoonStar size={34} /><div className="eyebrow">A QUIET DETOUR</div><h1>This page is not here.</h1><p>The topic may have moved, or the link may be incorrect. You can return to the home page and find another starting point.</p><Link className="button button-gold" href="/"><ArrowLeft size={15} /> Back home</Link></div>;
}
