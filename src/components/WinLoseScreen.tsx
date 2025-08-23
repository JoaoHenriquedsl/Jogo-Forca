import "./WinLoseScreen.css";
type Props = {
  letrasCorretas: string[];
  letrasErradas: string[];
  palavra: string;
  letrasParaVitoria: string[];
};

const WinLoseScreen = ({
  letrasCorretas,
  letrasErradas,
  palavra,
  letrasParaVitoria,
}: Props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {letrasErradas.length === 6 && (
        <div className="loseWin">
          <div className="box">
            <p>
              Você perdeu!
              <br />
              A palavra era:
              <br />
              {palavra.toUpperCase()}
            </p>
            <a href={""}>Reiniciar</a>
          </div>
        </div>
      )}
      {letrasCorretas.length === letrasParaVitoria.length &&
        letrasParaVitoria.length !== 0 && (
          <div className="loseWin">
            <div className="box">
              <p>
                Você ganhou!
                <br />
                {palavra.toUpperCase()}
              </p>
              <a href={""}>Reiniciar</a>
            </div>
          </div>
        )}
    </div>
  );
};

export default WinLoseScreen;
