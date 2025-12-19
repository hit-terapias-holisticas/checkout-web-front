import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { userService } from "@/src/domain/services";

import type { UseUserValidationFlowProps } from "./types";
import { EmailValidationFormData } from "@/src/domain/User/userTypes";
import { emailValidationSchema } from "@/src/domain/User/userSchema";
import { AppError, AppErrorAction } from "@/src/utils/errors/AppError";

export function useUserValidationFlow({
  planId,
  couponId,
}: UseUserValidationFlowProps) {
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isCreateAccountModalOpen, setIsCreateAccountModalOpen] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<EmailValidationFormData>({
    resolver: zodResolver(emailValidationSchema),
  });

  const onEmailSubmit = async (data: EmailValidationFormData) => {
    setIsLoading(true);

    try {
      const response = await userService.checkUserAlreadyExists({
        email: data.email,
        planId,
        couponId,
      });

      if (response.linkToPaymentPage) {
        window.location.assign(response.linkToPaymentPage);
        return;
      }

      if (!response.linkToPaymentPage && response.error) {
        throw new AppError(
          response.error.message,
          response.error.statusCode,
          response.error.action
        );
      }
    } catch (error) {
      if (error instanceof AppError) {
        if (error.action === AppErrorAction.RedirectToCreateUser) {
          setIsEmailModalOpen(false);
          setIsCreateAccountModalOpen(true);
          return;
        }

        if (error.action === AppErrorAction.UserAlreadyHasAPlan) {
          toast.success("Parabéns!! Você já possui um plano ativo.");
        }
        return;
      }

      toast.error("Ocorreu um erro ao verificar seu email. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const openEmailModal = () => {
    setIsEmailModalOpen(true);
  };

  const handleEmailModalChange = (open: boolean) => {
    setIsEmailModalOpen(open);
    if (!open) {
      form.reset();
    }
  };

  const handleCreateAccountModalChange = (open: boolean) => {
    setIsCreateAccountModalOpen(open);
  };

  return {
    isEmailModalOpen,
    handleEmailModalChange,
    emailForm: {
      errors: form.formState.errors,
      register: form.register,
      handleSubmit: form.handleSubmit(onEmailSubmit),
      getValues: form.getValues,
    },
    isLoading,

    isCreateAccountModalOpen,
    handleCreateAccountModalChange,

    openEmailModal,
  };
}
