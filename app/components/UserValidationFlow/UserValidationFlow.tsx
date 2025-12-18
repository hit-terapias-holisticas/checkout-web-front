"use client";

import { Button } from "@/components/ui/button";
import { useUserValidationFlow } from "./useUserValidationFlow";
import { EmailValidationModal } from "../EmailValidationModal/EmailValidationModal";
import { CreateAccountModal } from "../CreateAccountModal/CreateAccountModal";

import type { UserValidationFlowProps } from "./types";

export function UserValidationFlow({
  planId,
  couponId,
}: UserValidationFlowProps) {
  const {
    isEmailModalOpen,
    handleEmailModalChange,
    emailForm,
    isLoading,
    isCreateAccountModalOpen,
    handleCreateAccountModalChange,
    openEmailModal,
  } = useUserValidationFlow({ planId, couponId });

  return (
    <>
      <Button className="shadow-cta-glow" onClick={openEmailModal}>
        Open Dialog
      </Button>

      <EmailValidationModal
        isOpen={isEmailModalOpen}
        isLoading={isLoading}
        errors={emailForm.errors}
        register={emailForm.register}
        onOpenChange={handleEmailModalChange}
        onSubmit={emailForm.handleSubmit}
      />

      <CreateAccountModal
        isOpen={isCreateAccountModalOpen}
        onOpenChange={handleCreateAccountModalChange}
        email={emailForm.getValues("email")}
      />
    </>
  );
}
