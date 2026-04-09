// Footer — site-wide footer with links, location, and Instagram icon
//
// Server Component — no client-side features needed (only static links).

import Link from "next/link"
import Image from "next/image"

// ---------------------------------------------------------------------------
// Footer sections definition — add or remove columns here
// ---------------------------------------------------------------------------

const FOOTER_LINKS = {
  Train: [
    { href: "/schedule", label: "Schedule" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
  ],
  Info: [
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // bg-canvas = darkest background (#0B0B0B)
    // border-t border-edge = subtle separator from page content above
    <footer className="bg-canvas border-t border-edge">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* TOP ROW — logo + nav columns + instagram */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* BRAND COLUMN */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="hover:opacity-80 transition-opacity inline-block">
              <Image
                src="/images/ui/logo-transparent.png"
                alt="Overhandz Boxing Club"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-3 text-dim text-sm leading-relaxed max-w-xs">
              Parisian boxing club based in Ivry-sur-Seine. Real fighters, real
              training. Book your class online in seconds.
            </p>

            {/* LOCATION */}
            <div className="mt-4 flex items-start gap-2 text-dim text-sm">
              {/* Map pin icon (inline SVG — no image import needed for icons) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mt-0.5 shrink-0"
              >
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Ivry-sur-Seine, Paris — Île-de-France</span>
            </div>

            {/* INSTAGRAM LINK */}
            <a
              href="https://www.instagram.com/overhandzclub/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-dim hover:text-white transition-colors text-sm"
              aria-label="Follow Overhandz on Instagram"
            >
              {/* Instagram icon — inline SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
              @overhandzclub
            </a>
          </div>

          {/* NAV COLUMNS — render each group of links */}
          {Object.entries(FOOTER_LINKS).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-white text-sm font-semibold mb-4">{group}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-dim hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW — copyright */}
        <div className="pt-8 border-t border-edge flex flex-col md:flex-row items-center justify-between gap-4 text-dim text-xs">
          <p>© {currentYear} Overhandz Boxing Club. All rights reserved.</p>
          <p>Ivry-sur-Seine · Paris · France</p>
        </div>
      </div>
    </footer>
  );
}
