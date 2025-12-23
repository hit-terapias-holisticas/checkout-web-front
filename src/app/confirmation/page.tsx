"use client";

import Image from "next/image";
import Link from "next/link";
import { Smartphone, LockKeyhole, CalendarHeart } from "lucide-react";
import { Button } from "@/src/components/ui/button";

export default function ConfirmationPage() {
  //TODO: remove MOCK ver como vai ser feito
  const isUserRegistered = false;
  return (
    <main className="min-h-screen bg-white md:bg-gray-50 flex flex-col items-center md:justify-center pt-10">
      <div className="w-full max-w-3xl bg-white rounded-3xl p-6 md:p-20 flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-left md:text-center items-start md:items-center">
          <h1 className="text-3-5xl md:text-5xl font-bold text-blue-950">
            Pagamento confirmado!
          </h1>
          {isUserRegistered ? (
            <p className="text-gray-500 text-lg md:text-1-5xl text-sm md:font-bold">
              Parabéns por esta decisão! Sua jornada de bem-estar{" "}
              <span className="text-primary-600 font-bold ">
                começa agora. Siga estes 3 passos e
              </span>{" "}
              marque sua primeira sessão:
            </p>
          ) : (
            <p className="text-gray-500 text-lg md:text-1-5xl text-sm md:font-bold">
              Sua jornada de bem-estar começa agora! Para{" "}
              <span className="text-primary-600 font-bold ">
                marcar sua primeira sessão,
              </span>{" "}
              siga estes 3 passos:
            </p>
          )}
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center">
              <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <div className="flex flex-col gap-2">
              {isUserRegistered ? (
                <>
                  <h3 className="text-1-5xl font-bold text-blue-950">
                    Acesse o App
                  </h3>

                  <p className="text-gray-500 md:text-lg text-sm">
                    Use o aplicativo do HIT em seu celular.
                  </p>
                </>
              ) : (
                <>
                  <h3 className="text-1-5xl font-bold text-blue-950">
                    Baixe o App
                  </h3>
                  <p className="text-gray-500 md:text-lg text-sm">
                    Acesse o aplicativo nas lojas (iOS e Android) para ter
                    acesso completo às suas terapias.
                  </p>
                </>
              )}
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
              {isUserRegistered ? (
                <p className="text-gray-500 md:text-lg text-sm">
                  Se não estiver logado, utilize o e-mail e senha cadastrados.
                </p>
              ) : (
                <p className="text-gray-500 md:text-lg text-sm">
                  Ao abrir o app, use o mesmo e-mail e senha que você utilizou
                  para fazer este cadastro.
                </p>
              )}
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
          {!isUserRegistered && (
            <h4 className="text-primary font-bold text-1-5xl">
              Baixe o App agora
            </h4>
          )}
          <div className="flex flex-col flex-row gap-4 w-full md:w-auto">
            {isUserRegistered ? (
              <Button>Agendar terapia agora</Button>
            ) : (
              <>
                <Link
                  href="#"
                  className="border border-gray-200 rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors"
                >
                  <Image
                    src="/google-play.svg"
                    alt="Google Play"
                    width={24}
                    height={24}
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="text-lg font-semibold text-[#1B3B5F]">
                      Google Play
                    </span>
                  </div>
                </Link>
                <Link
                  href="#"
                  className="border border-gray-200 rounded-xl px-6 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors"
                >
                  <Image
                    src="/apple-store.svg"
                    alt="App Store"
                    width={24}
                    height={24}
                  />
                  <div className="flex flex-col leading-tight">
                    <span className="text-lg font-semibold text-[#1B3B5F]">
                      App Store
                    </span>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
