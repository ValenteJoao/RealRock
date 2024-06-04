"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import swipe from "../../public/arrow_up.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

function Aside() {
  const router = usePathname();

  return (
    <aside className="flex flex-col justify-between py-14 bg-zinc-950 border-r-2 border-zinc-800 h-screen items-center px-24 max-w-[30%] max-md:max-w-screen-md">
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

      <div className="flex flex-col gap-5 items-center justify-center">
        <div className="flex flex-col w-full max-md:items-center">
          <span>Criado por</span>
          <span className="font-black text-xl">João Valente</span>
        </div>

        <Lottie
          animationData={swipe}
          className="w-20 invert hidden max-md:block"
        />
      </div>
    </aside>
  );
}

export default Aside;
