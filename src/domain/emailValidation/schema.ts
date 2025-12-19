import { z } from "zod";

export const emailValidationSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Por favor, insira um endereço de email válido"),
});

export type EmailValidationFormData = z.infer<typeof emailValidationSchema>;

export const checkUserRequestSchema = z.object({
  email: z.string().trim().toLowerCase().email("Invalid email address"),
  planId: z.string().min(1, "Plan ID is required"),
  couponId: z.string().optional(),
});

export type CheckUserRequestDTO = z.infer<typeof checkUserRequestSchema>;
