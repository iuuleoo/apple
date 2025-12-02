export default function Footer() {
  return (
    <footer className="w-full bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Coluna 1 */}
        <div>
          <h3 className="text-lg font-semibold">Apple</h3>
          <p className="text-sm text-gray-600 mt-3">
            Especialistas em inovação e tecnologia que transformam o mundo.
          </p>
        </div>

        {/* Coluna 2 */}
        <div>
          <h3 className="text-lg font-semibold">Links</h3>
          <ul className="text-sm text-gray-600 mt-3 space-y-2">
            <li>
              <a href="#" className="hover:underline">Política de Privacidade</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Termos de Uso</a>
            </li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div>
          <h3 className="text-lg font-semibold">Contato</h3>
          <ul className="text-sm text-gray-600 mt-3 space-y-2">
            <li>CNPJ: 00.000.000/0001-00</li>
            <li>contato@.com</li>
          </ul>
        </div>

      </div>

      <div className="border-t py-6">
        <p className="text-center text-sm text-gray-600">
          © 2025 Apple. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
