"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import type { CreateAccountModalProps } from "./types";

export function CreateAccountModal({
  isOpen,
  onOpenChange,
  email,
}: CreateAccountModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-[95vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-6 py-10 sm:px-12 sm:py-14 md:px-20 md:py-20 rounded-3xl sm:rounded-4xl">
        <DialogHeader className="flex flex-col items-center text-center">
          <Image
            src="/images/logo-full.png"
            alt="Logo"
            width={150}
            height={50}
            className="pb-4 sm:pb-6 md:pb-8 w-25 sm:w-30 md:w-37.5 h-auto"
          />
          <DialogTitle className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950">
            Criar conta
          </DialogTitle>
          <DialogDescription className="text-base sm:text-lg md:text-1-5xl font-bold text-gray-500">
            Complete seu cadastro para continuar
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6 md:gap-8 pt-6">
          <p className="text-gray-500">
            Formulário de criação de conta (placeholder)
          </p>
          {email && (
            <p className="text-blue-950 font-semibold">
              Email pré-preenchido: {email}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
