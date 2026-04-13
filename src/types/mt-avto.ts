export type ContactLink = {
  href: string;
  label: string;
};

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export type ServiceCard = {
  title: string;
  description: string;
  badge: string;
};

export type ReviewCard = {
  author: string;
  role: string;
  quote: string;
};

export type HeroOffer = {
  title: string;
  subtitle: string;
  bullets: string[];
  accent: string;
};
