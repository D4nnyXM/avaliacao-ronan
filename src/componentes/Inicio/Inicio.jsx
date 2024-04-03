import imagem from "../../assets/imagem/imagem.svg"
import "./Inicio.css";

function Inicio() {
  return (
    <div id="inicio" className="inicioContainer">
      <div className="inicioText">
        <h1>Semana de Fisica e Tecnologia</h1>
        <p>Inscreva-se para participar</p>
        <button className="inscreva">INSCREVA-SE</button>
      </div>
      <div className="inicioImagem">
        <img src={imagem} alt="Imagem" />
      </div>
    </div>
  )
}

export default Inicio;