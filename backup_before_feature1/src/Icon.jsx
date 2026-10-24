export default function Icon({ name, size = 20, stroke = 1.8 }) {
  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    arrowLeft: <><path d="M19 12H5" /><path d="m11 18-6-6 6-6" /></>,
    sparkles: <><path d="m12 3-1.3 5.7L5 10l5.7 1.3L12 17l1.3-5.7L19 10l-5.7-1.3L12 3Z" /><path d="m5 17-.6 2.4L2 20l2.4.6L5 23l.6-2.4L8 20l-2.4-.6L5 17Z" transform="translate(0 -1) scale(.82)" /></>,
    chart: <><path d="M4 19V5" /><path d="M4 19h16" /><path d="m7 15 4-4 3 2 5-6" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M7 3v4M17 3v4M3 10h18M8 14h3M8 17h6" /></>,
    route: <><circle cx="6" cy="5" r="2" /><circle cx="18" cy="19" r="2" /><path d="M8 5h2a4 4 0 0 1 4 4v3a4 4 0 0 0 4 4" /><path d="M6 7v10a2 2 0 0 0 2 2h8" /></>,
    code: <><path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
    palette: <><path d="M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 1.9-2.6l-.3-.8a2 2 0 0 1 1.9-2.6h1.2A3.3 3.3 0 0 0 21 11.7 8.8 8.8 0 0 0 12 3Z" /><path d="M7.5 10.5h.01M9.5 7.5h.01M14.5 7.5h.01M17 11h.01" strokeWidth="3" /></>,
    brain: <><path d="M12 5a3 3 0 0 0-5.5 1.7A3.5 3.5 0 0 0 5 13.4 3.4 3.4 0 0 0 8.5 19H10v-3M12 5a3 3 0 0 1 5.5 1.7 3.5 3.5 0 0 1 1.5 6.7 3.4 3.4 0 0 1-3.5 5.6H14v-3M12 5v14M8 10h4M12 14h4" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="m16 8 4-4" /></>,
    trend: <><path d="M4 18V6" /><path d="M4 18h16" /><path d="m7 14 3-3 3 2 6-7" /><path d="M15 6h4v4" /></>,
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></>,
  }
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}
