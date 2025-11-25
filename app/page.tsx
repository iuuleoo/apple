import Header from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold">Bem-vindo à Apple</h2>
        <p className="text-neutral-600 mt-4 text-lg">
          Esta é a página inicial do site da Apple, onde você pode encontrar informações sobre nossos produtos e serviços.
        </p>
      </section>
    </main>
  );
}
