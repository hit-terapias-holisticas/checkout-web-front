"use client";

import { Eye, EyeOff } from "lucide-react";
import { Controller } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldContent,
} from "@/components/ui/field";

import { useCreateAccountModal } from "./useCreateAccountModal";
import type { CreateAccountModalProps } from "./types";

export function CreateAccountModal({
  isOpen,
  onOpenChange,
  email,
  planId,
  couponId,
}: CreateAccountModalProps) {
  const {
    register,
    handleSubmit,
    control,
    errors,
    isSubmitting,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    handleOpenChange,
  } = useCreateAccountModal({ isOpen, onOpenChange, email, planId, couponId });

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="w-full max-w-[95vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl px-6 py-10 sm:px-12 sm:py-14 md:px-20 md:py-20 rounded-3xl sm:rounded-4xl gap-0">
        <DialogHeader className="flex flex-col items-center text-center gap-3 sm:gap-4 flex-shrink-0 mb-8">
          <DialogTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950">
            Crie sua conta HIT
          </DialogTitle>
          <DialogDescription className="text-sm sm:text-base md:text-lg lg:text-1-5xl font-bold text-gray-500 text-center leading-7">
            Complete seu cadastro. Você usará estas mesmas informações para
            acessar o app e iniciar suas terapias.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 md:gap-6 flex-shrink-0"
        >
          <Field data-invalid={!!errors.name}>
            <FieldLabel className="text-sm sm:text-sm-plus md:text-base font-semibold text-blue-950">
              Nome
            </FieldLabel>
            <Input
              {...register("name")}
              placeholder="Digite seu nome"
              disabled={isSubmitting}
              aria-invalid={!!errors.name}
              aria-label="Nome"
            />
            <FieldError>{errors.name?.message}</FieldError>
          </Field>

          <Field data-invalid={!!errors.email}>
            <FieldLabel className="text-sm sm:text-sm-plus md:text-base font-semibold text-blue-950">
              E-mail
            </FieldLabel>
            <Input
              {...register("email")}
              type="email"
              placeholder="Digite seu e-mail"
              disabled={isSubmitting || !!email}
              aria-invalid={!!errors.email}
              aria-label="E-mail"
            />
            <FieldError>{errors.email?.message}</FieldError>
          </Field>

          <Field data-invalid={!!errors.password}>
            <FieldLabel className="text-sm sm:text-sm-plus md:text-base font-semibold text-blue-950">
              Senha
            </FieldLabel>
            <FieldContent>
              <div className="relative">
                <Input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  disabled={isSubmitting}
                  className="pr-12"
                  aria-invalid={!!errors.password}
                  aria-label="Senha"
                />
                <Button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 hover:bg-transparent focus:outline-none bg-transparent border-0 shadow-none p-0 h-auto w-auto"
                  tabIndex={-1}
                  aria-label="Alternar visibilidade da senha"
                >
                  {showPassword ? (
                    <EyeOff className="h-6 w-6 text-gray-400" />
                  ) : (
                    <Eye className="h-6 w-6 text-gray-400" />
                  )}
                </Button>
              </div>
            </FieldContent>
            <FieldError>{errors.password?.message}</FieldError>
          </Field>

          <Field data-invalid={!!errors.confirmPassword}>
            <FieldLabel className="text-sm sm:text-sm-plus md:text-base font-semibold text-blue-950">
              Confirme sua senha
            </FieldLabel>
            <FieldContent>
              <div className="relative">
                <Input
                  {...register("confirmPassword")}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirme sua senha"
                  disabled={isSubmitting}
                  className="pr-12"
                  aria-invalid={!!errors.confirmPassword}
                  aria-label="Confirme sua senha"
                />
                <Button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 hover:bg-transparent focus:outline-none bg-transparent border-0 shadow-none p-0 h-auto w-auto"
                  tabIndex={-1}
                  aria-label="Alternar visibilidade da confirmação de senha"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-6 w-6 text-gray-400" />
                  ) : (
                    <Eye className="h-6 w-6 text-gray-400" />
                  )}
                </Button>
              </div>
            </FieldContent>
            <FieldError>{errors.confirmPassword?.message}</FieldError>
          </Field>

          <Field data-invalid={!!errors.acceptTerms}>
            <FieldContent>
              <div className="flex items-start gap-3">
                <Controller
                  name="acceptTerms"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id="acceptTerms"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled={isSubmitting}
                      className="mt-0.5"
                      aria-label="Aceitar termos e condições de uso e política de privacidade"
                    />
                  )}
                />
                <label
                  htmlFor="acceptTerms"
                  className="text-base text-blue-950 cursor-pointer"
                >
                  Declaro que li, estou ciente e concordo com os{" "}
                  <a
                    href="https://c54516a1-4c7e-4526-898e-9cf750803e46.usrfiles.com/ugd/c54516_e5c4dfa1eeb643c79c4b879f1112c482.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 underline font-bold"
                  >
                    Termos e Condições de Uso
                  </a>{" "}
                  e a{" "}
                  <a
                    href="https://c54516a1-4c7e-4526-898e-9cf750803e46.usrfiles.com/ugd/c54516_7566966c322d48d3a686e98ac171aa61.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 underline font-bold"
                  >
                    Política de Privacidade
                  </a>
                </label>
              </div>
            </FieldContent>
            <FieldError>{errors.acceptTerms?.message}</FieldError>
          </Field>

          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
            aria-label={isSubmitting ? "Criando conta..." : "Criar conta"}
          >
            {isSubmitting ? "Criando conta..." : "Criar conta"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
