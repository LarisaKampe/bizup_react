import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "./Button";

/* ── Inline SVGs ─────────────────────────────────────── */
const PhoneIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z"
    />
  </svg>
);
const UserIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);
const GlobeIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path
      strokeLinecap="round"
      d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"
    />
  </svg>
);
const ChevronDn = () => (
  <svg
    className="w-3.5 h-3.5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);
const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

/* ── BizUp Logo ──────────────────────────────────────── */
function Logo() {
  return (
    <Link to="/" className="flex items-center select-none" aria-label="BizUp home">
      <svg
        className="h-8 w-auto sm:h-9"
        viewBox="0 0 156 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M26.7637 33.5616C25.755 32.9211 24.6326 32.4804 23.4576 32.2633C24.2043 32.063 24.9305 31.793 25.6267 31.4569C27.0713 30.7231 28.2872 29.6075 29.1426 28.2314C30.0759 26.6728 30.5406 24.8783 30.4811 23.0625C30.5266 21.1018 29.9907 19.1714 28.941 17.5147C27.8454 15.892 26.3017 14.6228 24.4978 13.8618C22.2305 12.9229 19.7901 12.475 17.3372 12.5474H0V53.1889H17.9339C20.4466 53.2576 22.9444 52.7817 25.2558 51.7938C27.1352 50.9788 28.7296 49.623 29.836 47.899C30.9075 46.1551 31.4534 44.1393 31.4085 42.0931C31.4227 40.3783 30.992 38.689 30.1586 37.1903C29.3442 35.7188 28.1778 34.4721 26.7637 33.5616ZM8.70888 19.45H15.7889C17.3411 19.3401 18.8796 19.805 20.1111 20.7563C20.6111 21.214 21.0035 21.7768 21.26 22.4042C21.5166 23.0316 21.6309 23.7081 21.5948 24.385C21.6336 25.0586 21.5204 25.7323 21.2635 26.3563C21.0067 26.9802 20.6128 27.5384 20.1111 27.9895C18.891 28.918 17.3748 29.3709 15.8453 29.2636H8.70888V19.45ZM20.982 44.7945C19.6794 45.7393 18.0885 46.2012 16.4824 46.1008H8.70888V35.7066H16.3695C18.006 35.6132 19.6219 36.108 20.9255 37.1016C21.4781 37.5832 21.914 38.184 22.2004 38.8587C22.4868 39.5334 22.6161 40.2644 22.5786 40.9964C22.6244 41.7099 22.5041 42.4242 22.2271 43.0832C21.95 43.7423 21.5238 44.3281 20.982 44.7945Z" fill="#052235" />
        <path d="M45.8346 12.4667C44.7628 11.5488 43.3818 11.0731 41.972 11.1362C40.5895 11.0761 39.2374 11.5529 38.1982 12.4667C37.7233 12.8994 37.3476 13.4297 37.0971 14.0213C36.8465 14.6129 36.727 15.2517 36.7467 15.8938C36.7315 16.5271 36.8532 17.1561 37.1038 17.7379C37.3543 18.3197 37.7276 18.8404 38.1982 19.2645C39.2374 20.1783 40.5895 20.655 41.972 20.595C43.3818 20.6581 44.7628 20.1824 45.8346 19.2645C46.3123 18.8445 46.6926 18.3252 46.9488 17.7431C47.2051 17.1609 47.3312 16.5298 47.3183 15.8938C47.3357 15.249 47.2118 14.6081 46.9555 14.0162C46.6992 13.4242 46.3167 12.8954 45.8346 12.4667Z" fill="#052235" />
        <path d="M46.3266 23.9253H37.6177V53.1888H46.3266V23.9253Z" fill="#052235" />
        <path d="M76.4044 30.8924V23.9253H52.2533V31.1263H66.4133L52.0759 46.2217V53.1888H76.6947V45.9878H61.946L76.4044 30.8924Z" fill="#052235" />
        <path d="M107.289 37.3919C107.336 38.9905 107.019 40.5789 106.362 42.0366C105.793 43.2613 104.846 44.2706 103.66 44.9154C102.321 45.5878 100.835 45.9149 99.338 45.8669C97.8589 45.9105 96.3925 45.5834 95.0722 44.9154C93.8894 44.2739 92.9491 43.2629 92.395 42.0366C91.7601 40.5726 91.4545 38.987 91.5 37.3919V12.5474H82.7911V37.3355C82.6693 40.5533 83.4217 43.744 84.9683 46.5685C86.3539 48.9427 88.4141 50.8514 90.8871 52.0519C93.4864 53.2933 96.3367 53.9197 99.217 53.8824C102.131 53.9214 105.016 53.2954 107.652 52.0519C110.169 50.848 112.285 48.9442 113.748 46.5685C115.367 43.7683 116.161 40.5675 116.038 37.3355V32.9568H107.329L107.289 37.3919Z" fill="#052235" />
        <path d="M153.212 30.7472C152.049 28.5275 150.343 26.6383 148.253 25.2557C146.117 23.8837 143.622 23.1764 141.084 23.2237C139.715 23.1995 138.352 23.4067 137.052 23.8365C135.983 24.2017 134.99 24.7623 134.125 25.4896C133.33 26.1677 132.609 26.9272 131.972 27.7555L130.988 23.9252H123.263V65.9618H131.972V49.7051C132.972 51.0111 134.264 52.0636 135.746 52.7775C137.44 53.5513 139.287 53.9291 141.149 53.8822C143.631 53.9131 146.07 53.2272 148.172 51.9066C150.289 50.5643 152.021 48.694 153.196 46.4796C154.428 44.0406 155.071 41.3461 155.071 38.6134C155.071 35.8807 154.428 33.1862 153.196 30.7472H153.212ZM145.261 42.6171C144.674 43.7434 143.779 44.6801 142.681 45.3185C141.539 45.9667 140.244 46.2979 138.931 46.278C137.602 46.3031 136.291 45.9717 135.133 45.3185C134.026 44.6776 133.128 43.7313 132.545 42.5929C131.911 41.3448 131.593 39.9605 131.617 38.561C131.593 37.1898 131.912 35.8343 132.545 34.6178C133.152 33.456 134.071 32.487 135.2 31.8202C136.328 31.1533 137.621 30.8152 138.931 30.8439C140.252 30.8238 141.551 31.1759 142.681 31.86C143.773 32.5308 144.664 33.4835 145.261 34.6178C145.872 35.8642 146.189 37.2337 146.189 38.6215C146.189 40.0093 145.872 41.3787 145.261 42.6251V42.6171Z" fill="#052235" />
        <path d="M115.998 29.2635V8.70889V0H82.791V8.70889H107.289V29.2635H115.998Z" fill="#13ABEB" />
      </svg>
    </Link>
  );
}

/* ── Nav items definition ────────────────────────────── */
const NAV_ITEMS = [
  {
    label: "Our Products",
    dropdown: [
      { label: "How it works", to: "/" },
      { label: "Get a quote", to: "/offer-finance" },
      { label: "FAQs", to: "/resources" },
    ],
  },
  { label: "Offer Finance", to: "/offer-finance" },
  {
    label: "Resources",
    to: "/resources",
    dropdown: [
      { label: "Business blog", to: "/resources" },
      { label: "Business loan comparison", to: "/resources" },
    ],
  },
  {
    label: "Company",
    dropdown: [
      { label: "About us", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Press", to: "/press" },
      { label: "Corporate responsibility", to: "/corporate-responsibility" },
    ],
  },
];

/* ── Dropdown item ───────────────────────────────────── */
function DropdownItem({ item }) {
  return (
    <NavLink
      to={item.to}
      className="block px-4 py-2.5 text-sm text-navy hover:text-cyan hover:bg-gray-50 rounded-lg transition-colors duration-150"
    >
      {item.label}
    </NavLink>
  );
}

/* ── Desktop nav item (with optional dropdown) ───────── */
function DesktopNavItem({ item }) {
  const hasDropdown = Boolean(item.dropdown);

  if (!hasDropdown) {
    return (
      <NavLink
        to={item.to}
        className={({ isActive }) => `nav-link ${isActive ? "text-cyan" : ""}`}
      >
        {item.label}
      </NavLink>
    );
  }

  return (
    <div className="nav-item relative">
      <button className="nav-link flex items-center gap-1 cursor-default">
        {item.to ? (
          <NavLink
            to={item.to}
            className={({ isActive }) => (isActive ? "text-cyan" : "")}
          >
            {item.label}
          </NavLink>
        ) : (
          item.label
        )}
        <ChevronDn />
      </button>
      <div className="nav-dropdown p-2">
        {item.dropdown.map((d) => (
          <DropdownItem key={d.label} item={d} />
        ))}
      </div>
    </div>
  );
}

/* ── Main Navbar ─────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  // Close mobile on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location]);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled
            ? "shadow-[0_1px_12px_rgba(0,0,0,0.1)]"
            : "shadow-sm border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Logo />

          {/* Desktop center nav */}
          <nav
            className="hidden lg:flex items-center gap-7"
            aria-label="Main navigation"
          >
            {NAV_ITEMS.map((item) => (
              <DesktopNavItem key={item.label} item={item} />
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-4 text-sm font-medium text-navy">
            <a
              href="tel:1234567890"
              className="flex items-center gap-1.5 hover:text-cyan transition-colors duration-200"
            >
              <PhoneIcon /> 1234567890
            </a>
            <button className="flex items-center gap-1.5 hover:text-cyan transition-colors duration-200">
              <UserIcon /> My BizUp
            </button>
            <Button to="/offer-finance" size="sm">
              Apply Now
            </Button>
            <button className="flex items-center gap-1 hover:text-cyan transition-colors duration-200">
              <GlobeIcon /> EN <ChevronDn />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-350 ease-in-out bg-white border-t border-gray-100 ${
            mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-5 py-4 space-y-1" aria-label="Mobile navigation">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.to && !item.dropdown ? (
                  <NavLink
                    to={item.to}
                    className="block px-3 py-3 text-sm font-semibold text-navy hover:text-cyan transition-colors"
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-navy"
                      onClick={() =>
                        setMobileExpanded((e) =>
                          e === item.label ? null : item.label,
                        )
                      }
                    >
                      {item.label}
                      <span
                        className={`transition-transform duration-200 ${mobileExpanded === item.label ? "rotate-180" : ""}`}
                      >
                        <ChevronDn />
                      </span>
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="ml-4 border-l-2 border-gray-100 pl-3 space-y-1 pb-2">
                        {item.dropdown.map((d) => (
                          <NavLink
                            key={d.label}
                            to={d.to}
                            className="block py-2 text-sm text-navy/70 hover:text-cyan transition-colors"
                          >
                            {d.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}

            {/* Mobile utilities */}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-3 px-3">
              <a
                href="tel:1234567890"
                className="flex items-center gap-2 text-sm text-navy hover:text-cyan transition-colors"
              >
                <PhoneIcon /> 1234567890
              </a>
              <Button
                to="/offer-finance"
                size="md"
                className="w-full justify-center"
              >
                Apply Now
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer so page content starts below fixed navbar */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
}
