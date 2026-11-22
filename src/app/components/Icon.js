const paths = {
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
  arrowUp: <><path d="m7 17 10-10" /><path d="M8 7h9v9" /></>,
  back: <><path d="M19 12H5" /><path d="m11 18-6-6 6-6" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2" /></>,
  layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>,
  orbit: <><circle cx="12" cy="12" r="3" /><ellipse cx="12" cy="12" rx="10" ry="5" transform="rotate(-35 12 12)" /><path d="M18.5 5.7h.01" strokeWidth="3" /></>,
  users: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2" /><path d="M17 4a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5v1" /></>,
  server: <><rect x="3" y="3" width="18" height="8" rx="2" /><rect x="3" y="13" width="18" height="8" rx="2" /><path d="M7 7h.01M7 17h.01" strokeWidth="3" /><path d="M11 7h7M11 17h7" /></>,
  briefcase: <><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12c5 3 13 3 18 0" /></>,
  terminal: <><rect x="2" y="3" width="20" height="18" rx="3" /><path d="m6 9 3 3-3 3M12 16h6" /></>,
  trophy: <><path d="M7 3h10v8a5 5 0 0 1-10 0V3ZM7 5H3v3a4 4 0 0 0 4 4M17 5h4v3a4 4 0 0 1-4 4M12 16v4M8 21h8" /></>,
  graduation: <><path d="m2 9 10-5 10 5-10 5L2 9ZM6 11v6c3 3 9 3 12 0v-6M22 9v8" /></>,
  send: <><path d="m22 2-7 20-4-9-9-4 20-7ZM11 13 22 2" /></>,
  github: <><path d="M9 19c-4 1-4-2-6-3M15 22v-3.5a3 3 0 0 0-.8-2.4C18 15.7 21 14.4 21 9a6 6 0 0 0-1.6-4.2A5.5 5.5 0 0 0 19.3 1S17.5 1 16 3a14 14 0 0 0-8 0C6.5 1 4.7 1 4.7 1a5.5 5.5 0 0 0-.1 3.8A6 6 0 0 0 3 9c0 5.4 3 6.7 6.8 7.1a3 3 0 0 0-.8 2.4V22" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  close: <><path d="M5 5 19 19M19 5 5 19" /></>,
  sparkle: <><path d="m12 2 2.1 7.9L22 12l-7.9 2.1L12 22l-2.1-7.9L2 12l7.9-2.1L12 2Z" /></>,
  check: <path d="m5 12 5 5L20 7" />,
  code: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" /></>,
  filter: <><path d="M4 7h16M7 12h10M10 17h4" /></>,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c-3 3-3 15 0 18M12 3c3 3 3 15 0 18" /></>,
};

export default function Icon({ name, size = 20, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] ?? paths.code}
    </svg>
  );
}
