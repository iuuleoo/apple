"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Cadastro() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function handleCadastro(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");
    setCarregando(true);

    const result = await authClient.signUp.email({
      email,
      password: senha,
      name: nome  // ← CORRETO AQUI ✔
    });

    if (result.error) {
      setCarregando(false);

      if (result.error.code === "EMAIL_ALREADY_EXISTS") {
        return setErro("Este e-mail já está em uso.");
      }
      if (result.error.code === "WEAK_PASSWORD") {
        return setErro("Senha muito curta. Mínimo 6 caracteres.");
      }
      
      if (result.error?.message === "Password too short") {
  return setErro("A senha deve conter no mínimo 8 caracteres.");
}

    return setErro("Erro ao criar conta. Verifique os dados e tente novamente.");
    }

    router.push("/login");
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <form onSubmit={handleCadastro} className="w-full max-w-md space-y-5 p-6 shadow-xl rounded-2xl">
        <h1 className="text-2xl font-bold text-center">Criar Conta</h1>

        <input
          type="text"
          placeholder="Nome completo"
          className="border p-3 rounded-xl w-full"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Seu e-mail"
          className="border p-3 rounded-xl w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Senha"
          className="border p-3 rounded-xl w-full"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        {erro && <p className="text-red-600 text-center text-sm">{erro}</p>}

        <button
          type="submit"
          disabled={carregando}
          className="w-full bg-black text-white p-3 rounded-xl font-semibold"
        >
          {carregando ? "Criando conta..." : "Criar Conta"}
        </button>

        <p className="text-center text-sm">
          Já tem conta?{" "}
          <span onClick={() => router.push("/login")} className="underline cursor-pointer font-semibold">
            Entrar
          </span>
        </p>
      </form>
    </div>
  );
}
