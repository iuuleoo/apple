import Header from "@/components/header";
import Showcase from "../components/Showcase";
import Benefits from "@/components/benefits";
import HowItWorks from "../components/HowItWorks";
import Faq from "@/components/FAQ";
import Login from "@/components/Login";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* SEÇÃO DE BOAS-VINDAS */}
      <section className="max-w-5xl mx-auto px-6 pt-36 pb-16">
        <h2 className="text-4xl font-semibold tracking-tight text-black">
          Bem-vindo à Apple
        </h2>
        <p className="text-neutral-600 mt-6 text-lg leading-relaxed max-w-2xl">
          Esta é a página inicial do site da Apple, onde você pode encontrar
          informações sobre nossos produtos e serviços.
        </p>
      </section>

      {/* SHOWCASE */}
      <Showcase />

      {/* BENEFÍCIOS */}
      <Benefits />

      {/* COMO FUNCIONA */}
      <HowItWorks />

      {/* FAQ */}
      <section id="faq">
        <Faq />
      </section>

      {/* LOGIN */}
      <section className="mt-28">
        <Login />
      </section>

      {/* FOOTER */}
      <section className="mt-40">
        <Footer />
      </section>

    </main>
  );
}
