import { contactSchema } from '../contactSchema';

describe('contactSchema', () => {
    it('accepte des données valides', () => {
        const result = contactSchema.safeParse({
            name: 'Alice Martin',
    email: 'alice@ynov.com',
    role: 'Developer',
 });
 expect(result.success).toBe(true);
 });
 it('rejette un nom trop court', () => {
 const result = contactSchema.safeParse({ name: 'A', email: 'a@b.com', role:
'Developer' });
 expect(result.success).toBe(false);
 if (!result.success) {
 expect(result.error.issues[0].message).toContain('2 caractères');
 }
 });
 it('rejette un email invalide', () => {
 const result = contactSchema.safeParse({ name: 'Alice', email: 'pas-un-email',
role: 'Developer' });
 expect(result.success).toBe(false);
 });
 it('rejette un rôle non listé', () => {
 const result = contactSchema.safeParse({ name: 'Alice', email: 'alice@ynov.com', role:
'CEO' });
 expect(result.success).toBe(false);
 });
 it('accepte un téléphone optionnel absent', () => {
 const result = contactSchema.safeParse({ name: 'Alice', email: 'alice@ynov.com', role:
'Developer' });
 expect(result.success).toBe(true);
 });
});
