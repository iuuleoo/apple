"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      router.push("/loja");
    } catch (err: any) {
      console.error("ERRO LOGIN FIREBASE:", err);
      console.error("Código:", err.code);

      if (err.code === "auth/invalid-email") {
        setErro("E-mail inválido.");
      } else if (err.code === "auth/user-not-found") {
        setErro("Usuário não encontrado.");
      } else if (err.code === "auth/wrong-password") {
        setErro("Senha incorreta.");
      } else {
        setErro("Erro ao fazer login. Tente novamente.");
      }
    }

    setCarregando(false);
  };

  return (
    <div className="w-full min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-8">

        <h2 className="text-3xl font-semibold text-center text-black">
          Login
        </h2>
        <p className="text-center text-gray-600 -mt-4">
          Acesse sua conta de forma segura.
        </p>

        <form onSubmit={handleLogin} className="space-y-4">

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
              placeholder="Digite sua senha"
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
            {carregando ? "Entrando..." : "Continuar"}
          </button>

          <p className="text-center text-gray-600">
            Não tem conta?{" "}
            <a
              href="/cadastro"
              className="text-black font-medium hover:underline"
            >
              Criar conta
            </a>
          </p>

        </form>

      </div>
    </div>
  );
}
