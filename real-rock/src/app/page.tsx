import BandContainer from "@/components/BandContainer";

async function getData() {
  const res = await fetch(
    "https://my-json-server.typicode.com/ValenteJoao/bandas-api/bands"
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="bg-zinc-950 h-screen w-full flex flex-col justify-between overflow-hidden">
      <div className="overflow-y-scroll px-24 py-14">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Lista das melhores bandas</h1>
          <p className="text-base font-light">segundo a minha opinião 😎</p>
        </div>
        <div className="flex flex-wrap gap-5 items-center relative">
          {data.map((band, key) => (
            <BandContainer band={band} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
}
