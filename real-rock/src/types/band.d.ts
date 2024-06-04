interface BandContainerProps {
    band: {
      id: number;
      name: string;
      origin: string;
      genres: string[];
      spotifyLink: string;
      coverImage: string;
    };
  }

  interface Band {
    id: number;
    name: string;
    origin: string;
    genres: string[];
    spotifyLink: string;
    coverImage: string;
  }