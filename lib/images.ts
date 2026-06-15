// Imagery. Currently AI-generated, on-brand placeholder photography hosted on a CDN
// (the build sandbox is firewalled from downloading them locally). To self-host or
// swap for the firm's real photos, drop files in /public and point these at them,
// e.g. HERO = `${BASE}/hero.jpg`.
const CDN = "https://d8j0ntlcm91z4.cloudfront.net/user_3CW3PE41RjZmhQ2hNJj71mHSiQp";

export const IMG = {
  hero: `${CDN}/hf_20260615_051501_58f8eaf7-a639-4943-bcf2-e0362b26a0b9.png`,
  boardroom: `${CDN}/hf_20260615_051507_ce7f5c65-f118-45e5-a090-814f37b53f46.png`,
  street: `${CDN}/hf_20260615_051512_c6a6f046-afe4-4ac1-b14b-797a4b965cfd.png`,
};
