import "./Header.css";
import logo from "../../assets/imagem/logo.svg"


function Header() {
  return (
    <header className="headerContainer">
        <a href="#" className="logo">
            <img src={logo} alt="logo.svg"/>
            <p>Instituto Federal do Paraná </p>
        </a>

        <ul className="navMenu" >
            <li>
                <a className="item" href="#inicio">Inicio</a>
            </li>
            <li>
                <a className="item" href="#evento">Evento</a>
            </li>
            <li>
                <a className="item" href="#palestrantes">Palestrantes</a>
            </li>
            <li>
                <a className="item" href="#oficinas">Oficinas</a>
            </li>
            <li>
                <a className="item" href="#cronograma">Cronograma</a>
            </li>
            <li>
                <a className="item" href="#incricao">Inscrição</a>
            </li>
        </ul>
    </header>
  )
}

export default Header;