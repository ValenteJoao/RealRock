"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [alertMessage, setAlertMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAlertMessage("Banda indicada com sucesso, obrigado !");
    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  }

  return (
    <>
      <div className="bg-zinc-950 h-screen w-full flex flex-col justify-center gap-10 overflow-hidden px-24 py-14 max-md:px-10 max-md:text-center">
        <div>
          <h1 className="text-3xl font-bold">
            Indique uma banda <br />
            para entrar lista
          </h1>
          <p className="text-base font-light">só vale banda top da galáxia</p>
        </div>

        <form
          onSubmit={(event) => {
            handleSubmit(event);
          }}
          className="flex flex-col gap-5 w-3/5 max-md:w-full"
        >
          <div className="flex gap-4 max-md:flex-col">
            <input
              className="bg-zinc-800 w-6/12 p-5 rounded-xl max-md:w-full"
              placeholder="Seu e-mail"
            />
            <input
              className="bg-zinc-800 w-6/12 p-5 rounded-xl max-md:w-full"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="flex gap-4 max-md:flex-col">
            <input
              className="bg-zinc-800 w-6/12 p-5 rounded-xl max-md:w-full"
              placeholder="Qual banda ?"
            />
            <input
              className="bg-zinc-800 w-6/12 p-5 rounded-xl max-md:w-full"
              placeholder="Link do spotify"
            />
          </div>
          <textarea
            className="bg-zinc-800 w-full p-5 rounded-xl h-48"
            placeholder="O porque dessa banda ?"
          ></textarea>
          <button className="bg-violet-900 py-4 rounded-xl" type="submit">
            Enviar Indicação
          </button>
        </form>
      </div>
      <p
        className={`${
          alertMessage == "" ? "opacity-0" : "opacity-100"
        } fixed bottom-5 right-5 bg-violet-900 p-4 rounded-xl transition-all max-md:bottom-auto max-md:top-6`}
      >
        {alertMessage}
      </p>
    </>
  );
}
