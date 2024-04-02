import logo from '../resources/lol-logo.png'
import './Header.css';

function Header() {
    return  (
        <div>
            <header className="header">
                <img src={logo} alt="Logo" className="logo"/>
                <h1 className="title">LOLDA</h1>
            </header>
        </div>
    )
}

export default Header;