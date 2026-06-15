export type Person = {
  name: string;
  role: string;
  email: string;
  /** Set to a path in /public (e.g. "/team/gerard-hughes.jpg") to use a real headshot. */
  photo: string | null;
};

// Single source of truth for the team. Drop real headshots into /public/team/
// and set each `photo` path — the portrait row and people grid both update.
export const TEAM: Person[] = [
  { name: "Gerard Hughes", role: "Partner", email: "gerard@hugheslegal.com.au", photo: null },
  { name: "David Blunt", role: "Partner", email: "david@hugheslegal.com.au", photo: null },
  { name: "Chris Hughes", role: "Partner", email: "chris@hugheslegal.com.au", photo: null },
  { name: "James Marchesani", role: "Partner", email: "james@hugheslegal.com.au", photo: null },
  { name: "Vince Roccisano", role: "Solicitor", email: "vince@hugheslegal.com.au", photo: null },
  { name: "Luke Di Lizio", role: "Solicitor", email: "luke@hugheslegal.com.au", photo: null },
  { name: "Jesse Manunzio", role: "Senior Property Conveyancer", email: "jesse@hugheslegal.com.au", photo: null },
];

export const PHONE_DISPLAY = "(03) 9375 4226";
export const PHONE_HREF = "tel:+61393754226";
export const EMAIL = "mail@hugheslegal.com.au";

// Brand-tinted blocks for the hero portrait row (HireLaw / Adam Law style).
export const PORTRAIT_BLOCKS = [
  "#cdeee6", "#fbe3cf", "#d6e4f5", "#d8efe6", "#e2e0f3", "#fbe0d4", "#cdeee6",
];
export const AVATAR_GRADIENTS = [
  "linear-gradient(135deg,#15b89a,#0a5f51)",
  "linear-gradient(135deg,#e8843c,#b85a1f)",
  "linear-gradient(135deg,#1f7ae0,#16407a)",
  "linear-gradient(135deg,#3aa893,#0f9a80)",
  "linear-gradient(135deg,#5b6bd6,#33408f)",
  "linear-gradient(135deg,#d4722c,#8f4516)",
  "linear-gradient(135deg,#16a085,#0a5f51)",
];

export const initials = (name: string): string =>
  name
    .split(" ")
    .map((w) => w.charAt(0))
    .join("")
    .slice(0, 2)
    .toUpperCase();
