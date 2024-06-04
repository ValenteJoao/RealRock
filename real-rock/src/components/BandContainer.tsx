import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSpotify } from "react-icons/fa6";

function BandContainer({ band }: BandContainerProps) {
  const lastWordOfOrigin = band.origin.split(" ").pop();

  return (
    <div className="w-52 h-80 bg-zinc-900 rounded-xl flex flex-col justify-between items-center py-6 text-center">
      <Image
        className="size-28 rounded-full object-cover"
        width={112}
        height={112}
        src={band.coverImage}
        alt={band.name}
      />
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-xl">{band.name}</h2>
        <span className="font-light">{lastWordOfOrigin}</span>
        <span className="bg-violet-900 px-3 py-1 rounded-lg my-2">
          {band.genres[0]}
        </span>
      </div>
      <div className="flex gap-2 items-center justify-center border-2 border-violet-900 px-3 py-2 rounded-lg hover:bg-violet-900 transition-all duration-300">
        <FaSpotify color="#1DD05D" />
        <Link href={band.spotifyLink} target="_blank">
          acessar spotify
        </Link>
      </div>
    </div>
  );
}

export default BandContainer;
