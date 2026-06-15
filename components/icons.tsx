import type { SVGProps } from "react";

// Minimal, consistent stroke icon set — replaces emoji.
// 24x24 grid, 1.6 stroke, currentColor, round joins.
const paths: Record<string, React.ReactNode> = {
  scales: (
    <>
      <path d="M12 3.5v17M7 20.5h10M5 7.5h14M12 4.5 5 7.5m0 0 2.6 5.2a2.6 2.6 0 0 1-5.2 0L5 7.5Z" />
      <path d="M12 4.5 19 7.5m0 0 2.6 5.2a2.6 2.6 0 0 1-5.2 0L19 7.5Z" />
    </>
  ),
  key: (
    <>
      <circle cx="15.5" cy="8.5" r="3.6" />
      <path d="M13 11 4 20v0h3v-3h3v-3l2.5-2.5" />
    </>
  ),
  scroll: (
    <>
      <path d="M7 3.5h8l4 4v13H7z" />
      <path d="M15 3.5v4h4M10 11h6M10 15h6" />
    </>
  ),
  estate: (
    <>
      <path d="M4 20.5h16M5 20.5V10M19 20.5V10M3.2 10 12 4.5l8.8 5.5M9 20.5v-6M15 20.5v-6" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3.5" y="8" width="17" height="11.5" />
      <path d="M8.5 8V6.2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V8M3.5 13h17" />
    </>
  ),
  banknote: (
    <>
      <rect x="3" y="6.5" width="18" height="11" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M6.5 9.5h.01M17.5 14.5h.01" />
    </>
  ),
  filecheck: (
    <>
      <path d="M7 3.5h8l4 4v13H7z" />
      <path d="M15 3.5v4h4M9.5 14.5l2 2 3.5-3.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 19 6v5c0 4.6-3 7.6-7 9-4-1.4-7-4.4-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11.2A7 7 0 1 0 5 9.8C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.6" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  users: (
    <>
      <path d="M15.5 19.5v-1a3.5 3.5 0 0 0-3.5-3.5H7a3.5 3.5 0 0 0-3.5 3.5v1" />
      <circle cx="9.5" cy="8" r="3.2" />
      <path d="M17 4.8a3.2 3.2 0 0 1 0 6.2M20.5 19.5v-1a3.5 3.5 0 0 0-2.6-3.38" />
    </>
  ),
  arrow: <path d="M5 12h13M12.5 6l6 6-6 6" />,
  phone: (
    <path d="M5 4h3.2l1.6 4-2 1.2a11 11 0 0 0 5 5l1.2-2 4 1.6V21a2 2 0 0 1-2 2A16 16 0 0 1 4 6a2 2 0 0 1 1-2Z" />
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" />
      <path d="M4 6.5l8 6 8-6" />
    </>
  ),
  home: <path d="M4 11 12 4.5l8 6.5M6 9.5V20h12V9.5M10 20v-5h4v5" />,
  trend: <path d="M4 17 10 11l3.5 3.5L20 8M15 8h5v5" />,
  check: <path d="M4 12.5l5 5 11-11" />,
};

export type IconName = keyof typeof paths;

export default function Icon({
  name,
  size = 24,
  ...props
}: { name: IconName; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
