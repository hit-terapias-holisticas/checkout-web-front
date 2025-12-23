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
      <DialogContent className="w-full max-w-xl md:max-w-2xl px-6 py-10 sm:px-12 sm:py-14 rounded-3xl">
        <div className="flex flex-col items-center text-center pb-8">
          <Image
            src="/images/logo-full.png"
            alt="Logo"
            width={150}
            height={50}
            className="pb-6 w-auto h-auto"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-blue-950 leading-tight pb-3">
            Insira seu e-mail e inicie sua assinatura
          </h1>
          <p className="text-base md:text-lg font-bold text-gray-500">
            Se você já possui um cadastro, use seu e-mail para logar.
          </p>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <Field data-invalid={!!errors.email}>
            <FieldLabel className="text-sm md:text-base font-semibold text-blue-950">
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
