"use client";

import { useState } from "react";

export default function Home() {
  const [alertMessage, setAlertMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setAlertMessage("Banda indicada com sucesso, obrigado !");
    setTimeout(() => {
      setAlertMessage("");
    }, 3000);
  }

  return (
    <>
      <div className="bg-zinc-950 h-screen w-full flex flex-col justify-center gap-10 overflow-hidden px-24 py-14">
        <div>
          <h1 className="text-3xl font-bold">
            Indique uma banda <br />
            para entrar lista
          </h1>
          <p className="text-base font-light">só vale banda top da galáxia</p>
        </div>

        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-5 w-3/5"
        >
          <div className="flex gap-4">
            <input
              className="bg-zinc-800 w-6/12 p-5 rounded-xl"
              placeholder="Seu e-mail"
            />
            <input
              className="bg-zinc-800 w-6/12 p-5 rounded-xl"
              placeholder="Digite seu nome"
            />
          </div>
          <div className="flex gap-4">
            <input
              className="bg-zinc-800 w-6/12 p-5 rounded-xl"
              placeholder="Qual banda ?"
            />
            <input
              className="bg-zinc-800 w-6/12 p-5 rounded-xl"
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
        } fixed bottom-5 right-5 bg-violet-900 p-4 rounded-xl transition-all`}
      >
        {alertMessage}
      </p>
    </>
  );
}
