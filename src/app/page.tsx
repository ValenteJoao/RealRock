import BandContainer from "@/components/BandContainer";

async function getData() {
  const res = await fetch(
    "https://my-json-server.typicode.com/ValenteJoao/bandas-api/bands"
  );

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="bg-zinc-950 h-screen w-full flex flex-col justify-between overflow-hidden max-md:h-full max-md:overflow-auto">
      <div className="overflow-y-scroll px-24 py-14 max-md:px-10 max-md:overflow-y-hidden max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Lista das melhores bandas</h1>
          <p className="text-base font-light">segundo a minha opinião 😎</p>
        </div>
        <div className="max-md:w-screen max-md:pl-10 max-md:overflow-x-scroll">
          <div className="flex flex-wrap gap-5 items-center relative max-md:flex-nowrap max-md:w-fit">
            {data.map((band: Band, key: number) => (
              <BandContainer band={band} key={key} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
