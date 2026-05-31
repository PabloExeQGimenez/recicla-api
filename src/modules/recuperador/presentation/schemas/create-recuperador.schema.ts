import { z } from 'zod';

export const createRecuperadorSchema = z.object({
  name: z.string().min(1, 'El nombre no puede estar vacio'),
  lastName: z.string().min(1, 'El apellido no puede estar vacio'),
  dni: z.string().optional(),
  cuil: z.string().optional(),
  birthdate: z.coerce.date().optional(),
});

export type CreateRecuperadorDTO = z.infer<typeof createRecuperadorSchema>;
