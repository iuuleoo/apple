"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Cadastro() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      await createUserWithEmailAndPassword(auth, email, senha);

      alert("Conta criada com sucesso!");
      router.push("/login");
    } catch (err: any) {
      if (err.code === "auth/email-already-in-use") {
        setErro("Este e-mail já está em uso.");
      } else if (err.code === "auth/weak-password") {
        setErro("A senha deve ter pelo menos 6 caracteres.");
      } else if (err.code === "auth/invalid-email") {
        setErro("E-mail inválido.");
      } else {
        setErro("Erro ao criar a conta. Verifique os dados.");
      }
    }

    setCarregando(false);
  };

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-8">

        <h2 className="text-3xl font-semibold text-center text-black">
          Criar Conta
        </h2>
        <p className="text-center text-gray-600 -mt-4">
          Preencha os dados para se registrar.
        </p>

        <form onSubmit={handleCadastro} className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">E-mail</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="w-full border border-gray-300 rounded-xl p-3 
              focus:outline-none focus:ring-2 focus:ring-black/40"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Senha</label>
            <input
              type="password"
              placeholder="Mínimo 6 caracteres"
              className="w-full border border-gray-300 rounded-xl p-3 
              focus:outline-none focus:ring-2 focus:ring-black/40"
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          {erro && (
            <p className="text-red-600 text-sm text-center">{erro}</p>
          )}

          <button
            type="submit"
            disabled={carregando}
            className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-3 rounded-xl transition"
          >
            {carregando ? "Criando..." : "Criar Conta"}
          </button>
        </form>

        <p className="text-center text-gray-700 text-sm">
          Já tem conta?{" "}
          <span
            className="text-black font-medium underline cursor-pointer"
            onClick={() => router.push("/login")}
          >
            Fazer login
          </span>
        </p>

      </div>
    </div>
  );
}
