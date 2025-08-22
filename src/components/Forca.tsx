import "./Forca.css";
type Props = {
  letrasErradas: string[];
};

const Forca = ({ letrasErradas }: Props) => {
  return (
    <div className={"forca"}>
      <div className={"corda"} />
      <div className={"superior"} />
      <div className={"bar"} />
      <div className={"base"} />
      {/* Homem */}
      <div className={"homem"}>
        {letrasErradas.length >= 1 && <div className={"cabeca"} />}
        {letrasErradas.length >= 2 && <div className={"corpo"} />}
        {letrasErradas.length >= 3 && <div className={"braco-esquerdo"} />}
        {letrasErradas.length >= 4 && <div className={"braco-direito"} />}
        {letrasErradas.length >= 5 && <div className={"perna-esquerda"} />}
        {letrasErradas.length >= 6 && <div className={"perna-direita"} />}
      </div>
    </div>
  );
};

export default Forca;
