"use client";

import { useUserValidationFlow } from "./useUserValidationFlow";
import { EmailValidationModal } from "../EmailValidationModal/EmailValidationModal";
import { CreateAccountModal } from "../CreateAccountModal/CreateAccountModal";

import type { UserValidationFlowProps } from "./types";
import { use } from "react";
import { useGetPlans } from "../../hooks/useGetPlans";
import { PlanCarousel } from "@/src/components/planCarousel";

export function UserValidationFlow({ searchParams }: UserValidationFlowProps) {
  const params = use(searchParams);
  const couponId = params?.cupom;

  // const { data, isLoading: isLoadingPlans, error } = useGetPlans(couponId);
  const {
    isEmailModalOpen,
    onSelecPlan,
    emailForm,
    isLoading,
    isCreateAccountModalOpen,
    handleCreateAccountModalChange,
    planId,
  } = useUserValidationFlow({ couponId });

  // //TODO: Arrumar depois de pronto
  // if (isLoadingPlans) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-gray-50">
  //       <div className="flex flex-col items-center gap-4">
  //         <div className="w-10 h-10 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
  //         <p className="text-gray-600 font-semibold">Carregando planos...</p>
  //       </div>
  //     </div>
  //   );
  // }

  // //TODO: Arrumar depois de pronto
  // if (error) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-gray-50">
  //       <div className="text-center flex flex-col gap-4">
  //         <p className="text-red-500 font-semibold">
  //           Erro ao carregar planos. Tente novamente mais tarde.
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  // const plans = data?.plans ?? [];

  return (
    <>
      {/* <div className="min-h-screen flex flex-col items-center bg-gray-50 pt-10 gap-6 md:gap-8">
        <div className="px-4 flex flex-col items-center gap-6">
          <div className="bg-primary-600/10 px-8 py-2 rounded-full">
            <p className="text-primary-600 text-sm font-bold">
              ✨ Mais de 40.000 pessoas transformadas
            </p>
          </div>
          <div className="text-center flex flex-col gap-6">
            {data?.coupon?.percentOff ? (
              <h1 className="text-4-5xl md:text-6-5xl font-black text-blue-950 leading-none md:leading-6-5xl ">
                Invista em você com{" "}
                <span className="text-primary-600">
                  {data?.coupon?.percentOff}% <br /> de desconto
                </span>
              </h1>
            ) : (
              <h1 className="text-4-5xl md:text-6-5xl font-black text-blue-950 leading-none md:leading-6-5xl ">
                Escolha o plano{" "}
                <span className="text-primary-600">
                  ideal para <br /> sua jornada
                </span>
              </h1>
            )}

            <p className="text-gray-600 text-lg font-semibold leading-tight">
              Escolha o plano ideal e comece sua jornada de autoconhecimento
              hoje mesmo.
            </p>
          </div>
        </div>

        <PlanCarousel plans={plans} handleEmailModalChange={onSelecPlan} />
      </div> */}

      <EmailValidationModal
        isOpen={isEmailModalOpen}
        isLoading={isLoading}
        errors={emailForm.errors}
        register={emailForm.register}
        onOpenChange={onSelecPlan}
        onSubmit={emailForm.handleSubmit}
      />

      <CreateAccountModal
        isOpen={isCreateAccountModalOpen}
        onOpenChange={handleCreateAccountModalChange}
        email={emailForm.getValues("email")}
        planId={planId!}
        couponId={couponId}
      />
    </>
  );
}
