"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full backdrop-blur-md border-b border-black/[0.07]">
      <nav className="max-w-2xl mx-auto flex items-center justify-between px-8 pt-14 pb-4">

        {/* LOGO estilo Apple */}
        <h1 className="text-[16px] font-medium tracking-[-0.2px] text-black">
          Apple
        </h1>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex items-center gap-7 text-[13.5px] text-neutral-500 font-normal tracking-[-0.2px]">
          <li className="hover:text-black transition-colors cursor-pointer">Início</li>
          <li
             onClick={() => {
            document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" });
         }}
            className="hover:text-black transition-colors cursor-pointer"
          >
             Como Funciona
          </li>


          <li>
          <a href="#beneficios" className="hover:text-black transition-colors cursor-pointer">
           Benefícios
          </a>
          </li>
          <li className="hover:text-black transition-colors cursor-pointer">FAQ</li>
        </ul>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-neutral-700 active:scale-95 transition-transform"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden border-t border-black/5">
          <ul className="flex flex-col px-6 py-4 gap-4 text-[15px] text-neutral-700">
            <li className="hover:text-black transition-colors">Início</li>
             <li
               onClick={() => {
               document.getElementById("como-funciona")?.scrollIntoView({ behavior: "smooth" });
            }}
              className="hover:text-black transition-colors cursor-pointer"
            >
              Como Funciona
            </li>


            <li
                onClick={() => {
                document.getElementById("beneficios")?.scrollIntoView({ behavior: "smooth" });
                setOpen(false);
              }}
                className="hover:text-black transition-colors"
            >
               Benefícios
            </li>
            <li className="hover:text-black transition-colors">FAQ</li>
          </ul>
        </div>
      )}
    </header>

  );
}
