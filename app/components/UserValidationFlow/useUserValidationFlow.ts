import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import {
  emailValidationSchema,
  type EmailValidationFormData,
} from "@/app/domain/emailValidation/schema";
import { checkUserService } from "@/app/domain/emailValidation/services";

import type { UseUserValidationFlowProps } from "./types";

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
    defaultValues: {
      email: "",
    },
  });

  const onEmailSubmit = async (data: EmailValidationFormData) => {
    setIsLoading(true);

    try {
      const result = await checkUserService(data.email, planId, couponId);

      if (result.type === "redirect") {
        window.location.href = result.url;
      } else {
        setIsEmailModalOpen(false);
        setIsCreateAccountModalOpen(true);
      }
    } catch (error) {
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
