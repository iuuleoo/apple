"use client";

import { motion } from "framer-motion";

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="w-full py-20 px-6 bg-white"
    >
      <div className="max-w-3xl mx-auto text-center">

        {/* TÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-semibold text-neutral-900 tracking-tight"
        >
          Como funciona
        </motion.h2>

        {/* LISTA */}
        <div className="mt-10 flex flex-col gap-10 text-left">

          {/* ITEM 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-base font-semibold text-neutral-900">
              1. Conexão rápida e automática
            </p>
            <p className="text-neutral-600 text-sm mt-1 leading-relaxed">
              Assim que você abre o estojo, o fone emparelha automaticamente
              com seu celular graças à tecnologia Bluetooth 5.3.
            </p>
          </motion.div>

          {/* ITEM 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="text-base font-semibold text-neutral-900">
              2. Cancelamento inteligente de ruído
            </p>
            <p className="text-neutral-600 text-sm mt-1 leading-relaxed">
              O sistema de isolamento ajusta o áudio em tempo real para reduzir
              barulhos externos e melhorar sua experiência.
            </p>
          </motion.div>

          {/* ITEM 3 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="text-base font-semibold text-neutral-900">
              3. Toque sensível
            </p>
            <p className="text-neutral-600 text-sm mt-1 leading-relaxed">
              Com apenas um toque você controla músicas, chamadas e até o
              assistente de voz sem precisar tirar o celular do bolso.
            </p>
          </motion.div>

          {/* ITEM 4 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="text-base font-semibold text-neutral-900">
              4. Bateria para o dia todo
            </p>
            <p className="text-neutral-600 text-sm mt-1 leading-relaxed">
              Com até 24 horas de autonomia usando o estojo de carga, você fica
              pronto para trabalhar, treinar ou relaxar sem interrupções.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
