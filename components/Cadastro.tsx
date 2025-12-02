"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function Cadastro() {
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
      // Criar usuário
      const res = await createUserWithEmailAndPassword(auth, email, senha);

      // Adicionar nome
      await updateProfile(res.user, {
        displayName: nome,
      });

      setSucesso(true);
      // opcional: limpar campos (mantive apenas nome/email/senha vazios)
      setNome("");
      setEmail("");
      setSenha("");
    } catch (err: any) {
      // Mostra o erro completo no console para debug
      console.error("🔥 ERRO FIREBASE - createUser:", err);
      console.error("📌 Código do erro:", err?.code);

      // Tratar erros comuns do Firebase
      if (err?.code === "auth/email-already-in-use") {
        setErro("Este e-mail já está em uso.");
      } else if (err?.code === "auth/weak-password") {
        setErro("A senha deve ter pelo menos 6 caracteres.");
      } else if (err?.code === "auth/invalid-email") {
        setErro("E-mail inválido.");
      } else if (err?.code === "auth/network-request-failed") {
        setErro("Erro de rede. Verifique sua conexão.");
      } else {
        setErro("Erro ao criar a conta. Verifique os dados.");
      }
    }

    setCarregando(false);
  };

  return (
    <div className="w-full bg-white py-24 px-6 flex justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-8">

        <h2 className="text-3xl font-semibold text-center text-black">
          Criar Conta
        </h2>
        <p className="text-center text-gray-600 -mt-4">
          Crie sua conta e acesse nossos serviços.
        </p>

        <form onSubmit={handleCadastro} className="space-y-4">

          {/* Nome */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Nome completo</label>
            <input
              type="text"
              placeholder="Seu nome"
              className="w-full border border-gray-300 rounded-xl p-3 
              focus:outline-none focus:ring-2 focus:ring-black/40"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">E-mail</label>
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full border border-gray-300 rounded-xl p-3 
              focus:outline-none focus:ring-2 focus:ring-black/40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Senha */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium">Senha</label>
            <input
              type="password"
              placeholder="Crie uma senha"
              className="w-full border border-gray-300 rounded-xl p-3 
              focus:outline-none focus:ring-2 focus:ring-black/40"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          {/* Erro */}
          {erro && <p className="text-red-600 text-sm text-center">{erro}</p>}

          {/* Sucesso */}
          {sucesso && (
            <p className="text-green-600 text-sm text-center">
              Conta criada com sucesso! Agora você pode fazer login.
            </p>
          )}

          {/* Botão */}
          <button
            type="submit"
            disabled={carregando}
            className="w-full bg-black hover:bg-gray-900 text-white font-semibold py-3 rounded-xl transition"
          >
            {carregando ? "Criando conta..." : "Criar Conta"}
          </button>

        </form>
      </div>
    </div>
  );
}
