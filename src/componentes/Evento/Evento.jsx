import check from "../../assets/imagem/check.svg"
import logo from "../../assets/imagem/logo.svg"
import parceiro from "../../assets/imagem/parceiro.svg"
import "./Evento.css";

function Evento() {
  return (
    <div className="eventoContainer">
      <header>
        <h1>Evento</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id quidem, debitis commodi tempora hic earum fugiat, recusandae vero quod perspiciatis placeat doloremque eaque nostrum accusamus? Ad quos id suscipit.
        </p>
      </header>

      <section>
        <div>
          <img src={logo} alt="Logo IF" />
        </div>

        <div>
          <ul>
            <li>
              <img src={check} alt="Icone do check box" />
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolores repellendus reprehenderit temporibus error.</span>
            </li>
            <li>
              <img src={check} alt="Icone do check box" />
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolores repellendus reprehenderit temporibus error.</span>
            </li>
            <li>
              <img src={check} alt="Icone do check box" />
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolores repellendus reprehenderit temporibus error.</span>
            </li>
            <li>
              <img src={check} alt="Icone do check box" />
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolores repellendus reprehenderit temporibus error.</span>
            </li>
          </ul>

          <button>
            Inscreva-se
          </button>
        </div>
      </section>

      <div>
        <header>
          <h2>
            Nossas Parcerias
          </h2>
        </header>

        <ul>
          <li>
            <img src={parceiro} alt="Logo do parceiro" />
          </li>
          <li>
            <img src={parceiro} alt="Logo do parceiro" />
          </li>
          <li>
            <img src={parceiro} alt="Logo do parceiro" />
          </li>
          <li>
            <img src={parceiro} alt="Logo do parceiro" />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Evento;