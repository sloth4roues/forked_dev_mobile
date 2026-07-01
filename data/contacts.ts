export type Contact = {
  id: string;
  name: string;
  role: string;
  avatar: string;
};

export const ROLES = ["Designer", "Developer", "Manager", "DevOps"] as const;

// 50 contacts générés (3.1). avatar via pravatar avec un seed stable par utilisateur.
export const CONTACTS: Contact[] = Array.from({ length: 50 }, (_, i) => ({
  id: String(i + 1),
  name: `Contact ${i + 1}`,
  role: ROLES[i % 4],
  avatar: `https://i.pravatar.cc/100?u=user${i}`,
}));
