"use client";

import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-[#F4F7F7] flex flex-col items-center justify-center p-6 text-center">
      <div className="flex flex-col items-center max-w-2xl w-full gap-10 md:gap-8">
        <div className="flex justify-center">
          <Frown
            className="size-28 md:size-36 text-primary"
            strokeWidth={1.5}
          />
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="text-4-5xl md:text-6-5xl font-black text-gray-600 leading-tight md:leading-6-5xl tracking-tight">
            Erro ao finalizar <br /> pagamento
          </h1>
          <p className="text-gray-500 text-base md:text-xl max-w-[540px] mx-auto leading-relaxed">
            Não foi possível processar o pagamento. Tente novamente ou selecione
            outra forma de pagamento.
          </p>
        </div>

        <div className="w-full max-w-md">
          <Link href="/">
            <Button
              className="w-full text-lg h-16 rounded-[20px]"
              variant="primary"
            >
              Tentar novamente
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
