import { useEffect, useState } from "react";
import { palavras } from "../data/data.json";

export const usePalavra = () => {
  const [palavra, setPalavra] = useState<string>("");

  useEffect(() => {
    if (palavras) {
      setPalavra(palavras[Math.floor(Math.random() * palavras.length)]);
    }
  }, []);

  return palavra;
};
