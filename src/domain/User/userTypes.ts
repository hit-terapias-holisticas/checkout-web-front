import z from "zod";
import { createAccountSchema, emailValidationSchema } from "./userSchema";

export type CreatedUserResponse = {
  linkToPaymentPage: string;
};

export type CheckUserResponse = {
  linkToPaymentPage: string;
};

export type EmailValidationFormData = z.infer<typeof emailValidationSchema>;
export type CreateAccountFormData = z.infer<typeof createAccountSchema>;
