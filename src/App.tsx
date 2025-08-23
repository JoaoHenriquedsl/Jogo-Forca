import { useMemo, useState } from "react";
import { usePalavra } from "./hooks/usePalavra";
import "./App.css";
import Forca from "./components/Forca";
import ForcaPalavra from "./components/ForcaPalavra";
import Teclado from "./components/Teclado";
import WinLoseScreen from "./components/WinLoseScreen";

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
      // amazonq-ignore-next-line
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
     <WinLoseScreen letrasCorretas={letrasCorretas} letrasErradas={letrasErradas} palavra={palavra} letrasParaVitoria={letrasParaVitoria}/>
      <Forca letrasErradas={letrasErradas} />
      <ForcaPalavra
        palavraArray={palavraArray}
        letrasCorretas={letrasCorretas}
      />
      <Teclado
        // amazonq-ignore-next-line
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
