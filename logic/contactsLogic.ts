// logic/contactsLogic.ts
// 2.4 — logique métier isolée de l'UI (cours séance 3, partie 2).
import { Contact } from "../data/contacts";

export function filterContacts(contacts: Contact[], query: string): Contact[] {
  if (!query.trim()) return contacts;
  const q = query.toLowerCase();
  return contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(q) || c.role.toLowerCase().includes(q),
  );
}

export function sortByName(contacts: Contact[]): Contact[] {
  return [...contacts].sort((a, b) => a.name.localeCompare(b.name));
}

export function groupByRole(contacts: Contact[]): Record<string, Contact[]> {
  const groups: Record<string, Contact[]> = {};
  for (const contact of contacts) {
    if (!groups[contact.role]) {
      groups[contact.role] = [];
    }
    groups[contact.role].push(contact);
  }
  return groups;
}

export function getStatistics(contacts: Contact[]) {
  const byRole = groupByRole(contacts);
  return {
    total: contacts.length,
    byRole: Object.entries(byRole).map(([role, list]) => ({
      role,
      count: list.length,
    })),
  };
}
