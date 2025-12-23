"use client";

import Image from "next/image";
import Link from "next/link";
import { Smartphone, LockKeyhole, CalendarHeart } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function ConfirmationPage() {
  return (
    <main className="min-h-screen bg-white md:bg-gray-50 flex flex-col items-center md:justify-center pt-10">
      <div className="w-full max-w-3xl bg-white rounded-3xl p-6 md:p-20 flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-left md:text-center items-start md:items-center">
          <h1 className="text-3-5xl md:text-5xl font-bold text-blue-950">
            Pagamento confirmado!
          </h1>

          <p className="text-gray-500 text-lg md:text-1-5xl text-sm md:font-bold">
            Sua jornada de bem-estar começa agora! Para{" "}
            <span className="text-primary-600 font-bold ">
              marcar sua primeira sessão,
            </span>{" "}
            siga estes 3 passos:
          </p>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center">
              <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <div className="flex flex-col gap-2">
              <>
                <h3 className="text-1-5xl font-bold text-blue-950">
                  Acesse o App
                </h3>

                <p className="text-gray-500 md:text-lg text-sm">
                  Use o aplicativo do HIT em seu celular.
                </p>
              </>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center">
              <LockKeyhole className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-1-5xl font-bold text-blue-950">
                Faça o login
              </h3>
              <p className="text-gray-500 md:text-lg text-sm">
                Se não estiver logado, utilize o e-mail e senha cadastrados.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center">
              <CalendarHeart className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-1-5xl font-bold text-blue-950">
                Agende sua sessão
              </h3>
              <p className="text-gray-500 md:text-lg text-sm">
                Escolha o tipo de terapia e agende com um terapeuta no horário
                que melhor se encaixa na sua rotina.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-4">
          <h4 className="text-primary font-bold text-1-5xl">Acessar agora</h4>
          <div className="flex flex-col flex-row gap-4 w-full md:w-auto">
            <>
              <Link href="https://play.google.com/store/apps/details?id=com.m9.hit&hl=pt_BR">
                <Image
                  src="/images/google_button.png"
                  alt="Google Play"
                  width={230}
                  height={78}
                  className="cursor-pointer"
                />
              </Link>
              <Link href="https://apps.apple.com/br/app/hit-terapias-hol%C3%ADsticas/id1568904022">
                <Image
                  src="/images/apple_button.png"
                  alt="App Store"
                  width={230}
                  height={78}
                  className="cursor-pointer"
                />
              </Link>
            </>
          </div>
        </div>
      </div>
    </main>
  );
}
