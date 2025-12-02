"use client";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <div className="w-full bg-white py-28 px-6 flex justify-center">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)]
        rounded-3xl p-10 space-y-8 border border-gray-100"
      >
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-semibold text-black tracking-tight">
            Login
          </h2>
          <p className="text-gray-500">
            Acesse sua conta com segurança.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col gap-3"
        >
          <label className="text-gray-700 font-medium">
            E-mail ou telefone
          </label>

          <input
            type="text"
            placeholder="Digite seu e-mail"
            className="w-full border border-gray-300 bg-gray-50 
            rounded-2xl p-4 text-lg
            focus:outline-none focus:ring-2 focus:ring-black/40 
            transition"
          />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-black hover:bg-gray-900 
          text-white font-semibold py-4 rounded-2xl text-lg transition"
        >
          Continuar
        </motion.button>

      </motion.div>

    </div>
  );
}
