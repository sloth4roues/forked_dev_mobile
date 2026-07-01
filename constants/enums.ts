// constants/enums.ts
// 1.5 — Typage par enums : remplace les chaînes en dur.
// Si une route change de nom, TypeScript signale toutes les utilisations à mettre à jour.

export enum Route {
  Home = "/",
  Contacts = "/contacts",
  Playground = "/playground",
  Converter = "/converter",
}

export enum ContactStatus {
  Active = "active",
  Inactive = "inactive",
  Blocked = "blocked",
}

export enum Priority {
  Low = 1,
  Medium = 2,
  High = 3,
}
