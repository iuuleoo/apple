"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "O fone é compatível com quais dispositivos?",
    answer:
      "Ele funciona com qualquer dispositivo que tenha Bluetooth, como Android, iPhone, tablets, notebooks e smart TVs.",
  },
  {
    question: "Qual é a duração da bateria?",
    answer:
      "A bateria dura entre 6 a 30 horas dependendo do volume, uso e modo ativo de cancelamento de ruído.",
  },
  {
    question: "O fone possui cancelamento de ruído?",
    answer:
      "Sim, o modelo conta com Cancelamento Ativo de Ruído (ANC), reduzindo significativamente os ruídos externos.",
  },
  {
    question: "O fone é resistente à água e suor?",
    answer:
      "Sim, possui certificação IPX4/IPX5 (varia por modelo), garantindo proteção contra respingos e suor.",
  },
  {
    question: "Quanto tempo demora para carregar?",
    answer:
      "O carregamento completo leva entre 1 e 2 horas. Com carga rápida, 10 minutos rendem até 2h de uso.",
  },
  {
    question: "Posso usar o fone para chamadas?",
    answer:
      "Sim! Ele possui microfones com redução de ruído para chamadas claras e sem interferências.",
  },
  {
    question: "O Bluetooth é estável?",
    answer:
      "Sim, utiliza Bluetooth 5.0 ou superior, garantindo maior alcance e estabilidade de conexão.",
  },
  {
    question: "É possível usar apenas um dos lados?",
    answer:
      "Sim, o modo mono permite usar apenas um lado enquanto o outro fica carregando.",
  },
  {
    question: "O fone é confortável?",
    answer:
      "Sim, o design ergonômico e almofadas macias garantem conforto durante horas de uso.",
  },
  {
    question: "O produto tem garantia?",
    answer:
      "Sim, oferecemos suporte e garantia dentro do período legal contra qualquer defeito de fabricação.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full max-w-3xl mx-auto py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-10"
      >
        Perguntas Frequentes
      </motion.h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="p-4 text-gray-600">{faq.answer}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
