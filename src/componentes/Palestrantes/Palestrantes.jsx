import imagem from "../../assets/imagem/imagem.svg"
import "./Palestrantes.css";

function Palestrantes() {
  return (
    <div id="palestrantes" className="palestrantesContainer">
      <header>
        <h1>Palestrantes</h1>
      </header>

      <section className="palestrantesCard">
        <div className="card">
          <img src={imagem} alt="Imagem" />
          <div>
            <header>Humans are much more smarter than Ai</header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quos natus temporibus hic.</p>
            <span>Lear more</span>
          </div>
        </div>

        <div className="card">
          <img src={imagem} alt="Imagem" />
          <div>
            <header>Humans are much more smarter than Ai</header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quos natus temporibus hic.</p>
            <span>Lear more</span>
          </div>
        </div>

        <div className="card">
          <img src={imagem} alt="Imagem" />
          <div>
            <header>Humans are much more smarter than Ai</header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quos natus temporibus hic.</p>
            <span>Lear more</span>
          </div>
        </div>
      </section>

      <button>
        Cronogroma
      </button>
    </div>
  )
}

export default Palestrantes;