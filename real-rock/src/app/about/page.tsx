import { FaGithub } from "react-icons/fa6";

export default async function Home() {
  return (
    <div className="bg-zinc-950 h-screen w-full flex flex-col justify-center gap-10 overflow-hidden px-24 py-14 max-md:px-10 max-md:text-center">
      <div className="flex flex-col gap-10 max-md:items-center">
        <h1 className="text-3xl font-bold">Conheça o projeto</h1>
        <p className="text-base font-light w-8/12 max-md:w-full">
          Este projeto é um estudo dedicado ao framework Next.js. Nele, estou
          trabalhando com requisições de API no lado do servidor, utilizando as
          rotas de API do Next.js para uma gestão eficiente das requisições.
          Além disso, estou aplicando o Tailwind CSS para a estilização,
          aproveitando ao máximo sua flexibilidade e eficiência no design.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Tecnologias utilizadas</h2>
        <div className="flex gap-5 max-md:flex-col">
          <span className="text-xl bg-violet-900 py-2 px-4 rounded-xl">
            Next.js
          </span>
          <span className="text-xl bg-violet-900 py-2 px-4 rounded-xl">
            Tailwind CSS
          </span>
          <span className="text-xl bg-violet-900 py-2 px-4 rounded-xl">
            TypeScript
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 max-md:items-center">
        <h2 className="text-2xl font-bold">Autor</h2>
        <span className="text-xl font-light">João Valente</span>
        <a
          href=""
          target="_blank"
          className="text-xl font-light flex gap-2 border-2 p-4 w-fit rounded-xl border-violet-900 hover:bg-violet-900 cursor-pointer"
        >
          <FaGithub /> Acesse meu GitHub
        </a>
      </div>
    </div>
  );
}
