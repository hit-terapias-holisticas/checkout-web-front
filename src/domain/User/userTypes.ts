import z from "zod";
import { createAccountSchema, emailValidationSchema } from "./userSchema";
import { AppErrorAction } from "@/src/utils/errors/AppError";

export type CreatedUserResponse = {
  linkToPaymentPage: string;
};

export type CheckUserResponse = {
  linkToPaymentPage: string;
};

export type PlainAppError = {
  message: string;
  statusCode: number;
  action?: AppErrorAction;
};

export type PaymentLinkServiceResponse = {
  success: boolean;
  linkToPaymentPage: string;
  error?: PlainAppError;
};

export type CheckUserAlreadyExistsServiceResponse = PaymentLinkServiceResponse;
export type CreateUserServiceResponse = PaymentLinkServiceResponse;
export type EmailValidationFormData = z.infer<typeof emailValidationSchema>;
export type CreateAccountFormData = z.infer<typeof createAccountSchema>;
