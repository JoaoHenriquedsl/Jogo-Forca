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
        <div style={{ color: "red", fontSize: "2rem" }} className="loseWin">
          <div className="box">
            <p
              style={{
                fontSize: "1.5rem",
                padding: "0 20px ",
                textAlign: "center",
              }}
            >
              {" "}
              Você perdeu! a palavra era {palavra}
            </p>
            <a href={""}>Reiniciar</a>
          </div>
        </div>
      )}
      {letrasCorretas.length === letrasParaVitoria.length &&
        letrasParaVitoria.length !== 0 && (
          <div style={{ color: "green", fontSize: "2rem" }} className="loseWin">
            <div className="box">
              <p
                style={{
                  fontSize: "1.5rem",
                  padding: "0 20px ",
                  textAlign: "center",
                }}
              >
                Você ganhou!
              </p>
              <a href={""}>Reiniciar</a>
            </div>
          </div>
        )}
    </div>
  );
};

export default WinLoseScreen;
