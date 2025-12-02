"use client";

import { Headphones, ShieldCheck, Timer, CheckCircle } from "lucide-react";

export default function Benefits() {
  return (
    <section
      id="beneficios"
      className="w-full max-w-6xl mx-auto py-28 px-6 text-center"
    >
      <h2 className="text-3xl font-semibold mb-14">
        Por que escolher nossos fones?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-neutral-700">
        
        <div className="flex flex-col items-center">
          <Headphones size={32} className="mb-4" />
          <h3 className="font-semibold text-lg">Som Imersivo</h3>
          <p className="text-sm mt-2">
            Drivers afinados para entregar profundidade e clareza extrema.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <ShieldCheck size={32} className="mb-4" />
          <h3 className="font-semibold text-lg">Qualidade Premium</h3>
          <p className="text-sm mt-2">
            Materiais resistentes e design confortável para horas de uso.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Timer size={32} className="mb-4" />
          <h3 className="font-semibold text-lg">Bateria Duradoura</h3>
          <p className="text-sm mt-2">
            Até 48h de reprodução contínua sem interrupções.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <CheckCircle size={32} className="mb-4" />
          <h3 className="font-semibold text-lg">Alta Aprovação</h3>
          <p className="text-sm mt-2">
            Mais de 90% dos clientes recomendam pela experiência sonora.
          </p>
        </div>

      </div>
    </section>
  );
}
