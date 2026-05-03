// Single source of truth for the public contact details.

export const CONTACT = {
  phone: "+30 698 828 9061",
  phoneTel: "+306988289061",
  email: "alexandermuellerhermann@gmail.com",
  city: "Athens, Greece",
  fullName: "Alexander Müller-Hermann",
} as const;

export function mailtoLink(subject: string, body?: string) {
  const parts = [`subject=${encodeURIComponent(subject)}`];
  if (body) parts.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${CONTACT.email}?${parts.join("&")}`;
}
