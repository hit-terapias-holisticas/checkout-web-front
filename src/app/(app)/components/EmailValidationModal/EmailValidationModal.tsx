"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";

import type { EmailValidationModalProps } from "./types";

export function EmailValidationModal({
  isOpen,
  isLoading,
  errors,
  register,
  onOpenChange,
  onSubmit,
}: EmailValidationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-[95vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-6 py-10 sm:px-12 sm:py-14 md:px-20 md:py-20 rounded-3xl sm:rounded-4xl gap-0">
        <div className="flex flex-col items-center text-center pb-6 sm:pb-8 md:pb-10">
          <Image
            src="/images/logo-full.png"
            alt="Logo"
            width={150}
            height={50}
            className="pb-4 sm:pb-6 md:pb-8 w-25 sm:w-30 md:w-37.5 h-auto"
          />
          <h1 className="text-5xl sm:text-4xl md:text-5xl font-bold text-blue-950 leading-tight sm:leading-tight md:leading-15 pb-2 sm:pb-3 md:pb-4">
            Insira seu e-mail e inicie sua assinatura
          </h1>
          <p className="text-base sm:text-lg md:text-1-5xl font-bold text-gray-500">
            Se você já possui um cadastro, use seu e-mail para logar.
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center text-center gap-4 sm:gap-6 md:gap-8"
        >
          <Field data-invalid={!!errors.email}>
            <FieldLabel className="text-sm sm:text-sm-plus md:text-base font-semibold text-blue-950">
              Email
            </FieldLabel>
            <Input
              {...register("email")}
              placeholder="Digite seu email"
              disabled={isLoading}
            />
            <FieldError className="text-left">
              {errors.email?.message}
            </FieldError>
          </Field>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Verificando..." : "Continuar"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
