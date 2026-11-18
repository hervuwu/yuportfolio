/**
 * Schema contracts for the local JSON CMS in `src/data/`.
 *
 * Every file is assigned (not cast) to its interface in `src/data/index.ts`,
 * so `npm run build` fails on a missing field or a typo instead of shipping
 * an empty section.
 */

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  handle: string;
  url: string;
}

export interface DisciplineSticker {
  label: string;
  /** Any CSS colour; kept in JSON so stickers can be re-coloured without code. */
  accent: string;
  /** Degrees of tilt. */
  rotate: number;
}

export interface Site {
  name: string;
  initials: string;
  handle: string;
  year: string;
  location: string;
  email: string;
  /** Repo-relative path to the portrait. */
  avatar: string;
  title: string;
  description: string;
  nav: NavItem[];
  hero: {
    eyebrow: string;
    /** One entry per stacked display line, e.g. ["PORT", "FOLIO"]. */
    displayLines: string[];
    intro: string;
    description: string;
    stickers: DisciplineSticker[];
    avatarTitle: string;
    avatarCaption: string;
    availability: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  marquee: string[];
  contact: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    emailLabel: string;
    surpriseLabel: string;
  };
  socials: SocialLink[];
  dialog: {
    title: string;
    message: string;
    detail: string;
    confirm: string;
    dismiss: string;
  };
  colophon: {
    copyright: string;
    note: string;
    built: string;
  };
}

export interface Work {
  title: string;
  /** Optional: several student works have no reliable date on record. */
  year?: string;
  /** Short classification, e.g. "Short film" or "Brand identity". */
  medium: string;
  description: string;
  /**
   * Primary media. An image path shows inline; a Google Drive `/preview` or
   * Facebook plugin URL mounts a player; anything else becomes a link.
   */
  mediaUrl?: string;
  liveUrl?: string;
}

export interface Discipline {
  slug: string;
  title: string;
  /** Hex accent token that drives the band heading and card frame. */
  accent: string;
  /** Three lines of sub-specialties printed beside the discipline title. */
  specialties: string[];
  works: Work[];
}

/** `catalog.json` is a flat array of disciplines; every work is printed inline. */
export type Catalog = Discipline[];

export interface Capability {
  id: string;
  title: string;
  accent: string;
  summary: string;
  items: string[];
}

export interface Profile {
  eyebrow: string;
  heading: string;
  manifesto: string[];
  note: string;
  exploring: {
    label: string;
    items: string[];
  };
  capabilities: Capability[];
  cta: { label: string; href: string };
}

export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  period: string;
  note: string;
}

export interface ReferenceEntry {
  name: string;
  tag: string;
  quote: string;
}

export interface StackLedger {
  title: string;
  caption: string;
}

export interface Stack {
  eyebrow: string;
  heading: string;
  summary: string;
  experience: StackLedger & { items: ExperienceEntry[] };
  education: StackLedger & { items: EducationEntry[]; cta: { label: string; href: string } };
  techSpecs: StackLedger & { tags: string[] };
  references: StackLedger & { items: ReferenceEntry[] };
}
