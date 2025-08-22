import { useMemo, useState } from "react";
import { usePalavra } from "./hooks/usePalavra";
import "./App.css";
import Forca from "./components/Forca";
import ForcaPalavra from "./components/ForcaPalavra";
import Teclado from "./components/Teclado";

function App() {
  const palavra: string = usePalavra();
  const palavraArray: string[] = useMemo(() => palavra.split(""), [palavra]);
  const [letrasCorretas, setLetrasCorretas] = useState<string[]>([]);
  const [letrasErradas, setLetrasErradas] = useState<string[]>([]);
  const letrasParaVitoria = useMemo(
    () => [...new Set(palavraArray)],
    [palavraArray]
  );
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {letrasErradas.length === 6 && (
        <div style={{ color: "red", fontSize: "2rem" }} className="loseWin">
          Você perdeu! a palavra era {palavra}
        </div>
      )}
      {letrasCorretas.length === letrasParaVitoria.length &&
        letrasParaVitoria.length !== 0 && (
          <div style={{ color: "green", fontSize: "2rem" }} className="loseWin">
            Você ganhou!
          </div>
        )}
      <Forca letrasErradas={letrasErradas} />
      <ForcaPalavra
        palavraArray={palavraArray}
        letrasCorretas={letrasCorretas}
      />
      <Teclado
        palavraArray={palavraArray}
        setLetrasCorretas={setLetrasCorretas}
        setLetrasErradas={setLetrasErradas}
        letrasCorretas={letrasCorretas}
        letrasErradas={letrasErradas}
        letrasParaVitoria={letrasParaVitoria}
      />
    </div>
  );
}

export default App;
