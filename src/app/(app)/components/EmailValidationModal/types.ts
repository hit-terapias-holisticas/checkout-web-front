import { EmailValidationFormData } from "@/src/domain/User/userTypes";
import type { FieldErrors, UseFormRegister } from "react-hook-form";

export type EmailValidationModalProps = {
  isOpen: boolean;
  isLoading: boolean;
  errors: FieldErrors<EmailValidationFormData>;
  register: UseFormRegister<EmailValidationFormData>;
  onOpenChange: (open: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
};
