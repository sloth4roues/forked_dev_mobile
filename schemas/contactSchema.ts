// schemas/contactSchema.ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(50, "Le nom ne peut pas dépasser 50 caractères"),
  email: z
    .string()
    .email("Adresse email invalide")
    .refine((val) => val.endsWith("@ynov.com") || val.endsWith("@gmail.com")),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^0[1-9]\d{8}$/.test(val),
      "Le numéro doit commencer par 06 ou 07",
    ),
  role: z.enum(["Designer", "Developer", "Manager", "DevOps"], {
    error: () => "Sélectionnez un rôle valide",
  }),
});
// Le type est GÉNÉRÉ depuis le schéma
export type ContactFormData = z.infer<typeof contactSchema>;
// ContactFormData = { name: string; email: string; phone?: string; role: 'Designer'
