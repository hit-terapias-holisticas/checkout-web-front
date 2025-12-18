import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { EmailValidationFormData } from "@/app/domain/emailValidation/schema";

export type EmailValidationModalProps = {
  isOpen: boolean;
  isLoading: boolean;
  errors: FieldErrors<EmailValidationFormData>;
  register: UseFormRegister<EmailValidationFormData>;
  onOpenChange: (open: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
};
