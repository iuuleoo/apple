import { betterAuth } from "better-auth";

export const auth = betterAuth({
  emailAndPassword: { enabled: true }
  // se quiser campos extras de usuário, configurar aqui
});
