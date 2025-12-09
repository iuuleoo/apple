"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";

export default function Cadastro() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [sucesso, setSucesso] = useState(false);

  const handleCadastro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErro("");
    setSucesso(false);
    setCarregando(true);

    try {
      const resultado = await authClient.signUp.email({
        email,
        password: senha,
        name: nome, // salva o nome no metadata
      });

      if ("error" in resultado && resultado.error) {
        const msg = resultado.error.message || "Erro ao criar conta.";

        if (msg.includes("registered")) setErro("Este e-mail já está em uso.");
        else if (msg.includes("Password")) setErro("A senha deve ter no mínimo 6 caracteres.");
        else setErro("Erro ao criar conta. Verifique os dados.");

        setCarregando(false);
        return;
      }

      setSucesso(true);
      setNome("");
      setEmail("");
      setSenha("");

      setTimeout(() => router.push("/login"), 2000);

    } catch (err) {
      console.error(err);
      setErro("Erro inesperado.");
    }

    setCarregando(false);
  };

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-8"
      >
        <h2 className="text-3xl font-semibold text-center text-black">Criar Conta</h2>
        <p className="text-center text-gray-600 -mt-4">Preencha os dados para se registrar.</p>

        <form onSubmit={handleCadastro} className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Nome completo</label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black/40"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">E-mail</label>
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black/40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Senha</label>
            <input
              type="password"
              placeholder="Mínimo 6 caracteres"
              className="w-full border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-black/40"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          {erro && <p className="text-red-600 text-sm text-center">{erro}</p>}

          {sucesso && (
            <p className="text-green-600 text-sm text-center">
              Conta criada com sucesso! Redirecionando...
            </p>
          )}

          <button
            type="submit"
            disabled={carregando}
            className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-3 rounded-xl transition"
          >
            {carregando ? "Criando conta..." : "Criar Conta"}
          </button>
        </form>

        <p className="text-center text-gray-700 text-sm">
          Já tem conta?{" "}
          <span className="text-black font-medium underline cursor-pointer" onClick={() => router.push("/login")}>
            Fazer login
          </span>
        </p>
      </motion.div>
    </div>
  );
}
