import React from "react";
import { alfabeto } from "../data/data.json";
import "./Teclado.css";

type Props = {
  palavraArray: string[];
  setLetrasCorretas: React.Dispatch<React.SetStateAction<string[]>>;
  setLetrasErradas: React.Dispatch<React.SetStateAction<string[]>>;
  letrasCorretas: string[];
  letrasErradas: string[];
  letrasParaVitoria: string[];
};

const Teclado = ({
  palavraArray,
  setLetrasCorretas,
  setLetrasErradas,
  letrasCorretas,
  letrasErradas,
  letrasParaVitoria,
}: Props) => {
  const handleClick = (letra: string) => {
    if (
      letrasErradas.length === 6 ||
      letrasCorretas.length === letrasParaVitoria.length ||
      letrasCorretas.includes(letra) ||
      letrasErradas.includes(letra)
    ) {
      return;
    }

    if (palavraArray.includes(letra)) {
      setLetrasCorretas((prev) => [...prev, letra]);
    } else {
      setLetrasErradas((prev) => [...prev, letra]);
    }
  };

  const colorKey = (
    isCorrectLetter: boolean,
    isWrongLetter: boolean,
    wrongLetterColor: string,
    correctLetterColor: string
  ): object | undefined => {
    if (isCorrectLetter) {
      return { backgroundColor: correctLetterColor, color: "white" };
    } else if (isWrongLetter) {
      return { backgroundColor: wrongLetterColor };
    }
  };

  return (
    <div className="teclado-container">
      {alfabeto.map((letra) => {
        return (
          <div
            key={letra}
            className="letra-teclado"
            onClick={() => handleClick(letra)}
            style={colorKey(
              letrasCorretas.includes(letra),
              letrasErradas.includes(letra),
              "#5D87B3",
              "green"
            )}
          >
            {letra}
          </div>
        );
      })}
    </div>
  );
};

export default Teclado;
