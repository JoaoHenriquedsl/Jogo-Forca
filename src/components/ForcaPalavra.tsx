import "./ForcaPalavra.css";
type Props = {
  palavraArray: string[];
  letrasCorretas: string[];
};

const ForcaPalavra = ({
  palavraArray,
  letrasCorretas,
}: Props) => {
  return (
    <div className="forcaPalavra">
      {palavraArray.map((letra, index) => {
        const isLetraCorreta = letrasCorretas.includes(letra);

        return (
          <div className="letra-container" key={index}>
            <div
              className="letra"
              style={{
                color: isLetraCorreta ? "#334155" : "transparent",
              }}
            >
              {letra}
            </div>
            <div className="underline" /> 
          </div>
        );
      })}
    </div>
  );
};

export default ForcaPalavra;
