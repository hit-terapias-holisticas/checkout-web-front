import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { userService } from "@/domain/services";

import type { CreateAccountModalProps } from "./types";
import { createAccountSchema } from "@/domain/User/userSchema";
import { CreateAccountFormData } from "@/src/domain/User/userTypes";

export function useCreateAccountModal({
  isOpen,
  onOpenChange,
  email,
  planId,
  couponId,
}: CreateAccountModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<CreateAccountFormData>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      email: email,
      name: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = form;

  useEffect(() => {
    if (isOpen) {
      setValue("email", email);
    }
  }, [email, isOpen, setValue]);

  const onSubmit = async (data: CreateAccountFormData) => {
    try {
      const result = await userService.createUser({
        name: data.name,
        email: data.email,
        password: data.password,
        planId,
        couponId,
        terms: data.acceptTerms,
      });

      window.location.assign(result.linkToPaymentPage);
    } catch {
      toast.error(
        "Ocorreu um erro ao criar sua conta. Por favor, tente novamente."
      );
    }
  };

  const handleOpenChange = (open: boolean) => {
    onOpenChange(open);
    if (!open) {
      reset();
      setShowPassword(false);
      setShowConfirmPassword(false);
    }
  };

  return {
    form,
    register,
    handleSubmit: handleSubmit(onSubmit),
    control,
    errors,
    isSubmitting,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    handleOpenChange,
  };
}
