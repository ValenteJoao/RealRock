"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Aside() {
  const router = usePathname();

  return (
    <aside className="flex flex-col justify-between py-14 bg-zinc-950 border-r-2 border-zinc-800 h-screen items-center px-24 max-w-[30%]">
      <Image src="/logo.png" alt="logo" width={150} height={150} />
      <nav className="flex flex-col gap-10 w-max">
        <Link
          className={`${
            router == "/" ? "border-l-8 pl-4 -ml-6 border-l-violet-900" : ""
          }`}
          href="/"
        >
          Lista das melhores bandas
        </Link>
        <Link
          href="/newBand"
          className={`${
            router == "/newBand"
              ? "border-l-8 pl-4 -ml-6 border-l-violet-900"
              : ""
          }`}
        >
          Indique uma banda para <br /> entrar na lista
        </Link>
        <Link
          className={`${
            router == "/about"
              ? "border-l-8 pl-4 -ml-6 border-l-violet-900"
              : ""
          }`}
          href="/about"
        >
          Conheça o projeto
        </Link>
      </nav>
      <div className="flex flex-col w-full">
        <span>Criado por</span>
        <span className="font-black text-xl">João Valente</span>
      </div>
    </aside>
  );
}

export default Aside;
