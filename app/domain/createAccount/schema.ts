import { z } from "zod";

export const createAccountSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, "Nome é obrigatório")
      .min(2, "Nome deve ter pelo menos 2 caracteres"),
    email: z
      .string()
      .trim()
      .toLowerCase()
      .email("Por favor, insira um endereço de email válido"),
    password: z
      .string()
      .min(8, "Senha deve ter pelo menos 8 caracteres")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número"
      ),
    confirmPassword: z.string().min(1, "Confirmação de senha é obrigatória"),
    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "Você deve aceitar os termos e condições",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

export type CreateAccountFormData = z.infer<typeof createAccountSchema>;


