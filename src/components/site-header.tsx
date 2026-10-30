"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, MoonStar, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/problems/", label: "Explore problems" },
  { href: "/quran-hadith/", label: "Qur'an & Hadith" },
  { href: "/duas/", label: "Du'as" },
  { href: "/reminders/", label: "Reminders" },
  { href: "/about/", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Sakinah home">
          <span className="brand-symbol"><MoonStar size={23} strokeWidth={1.5} /></span>
          <span className="brand-copy"><strong>Sakinah</strong><small>GUIDANCE FOR DIFFICULT DAYS</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => {
            const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return <Link key={link.href} href={link.href} className={active ? "nav-link active" : "nav-link"}>{link.label}</Link>;
          })}
        </nav>
        <button className="mobile-menu-button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
        </nav>
      )}
    </header>
  );
}
