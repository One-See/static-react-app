
import './Header.css'

import logo from '../../images/react_logo.png'

export default function Header() {
    return (
        <nav className="nav-section">
            <div className="logo-section">
                <img className="logo" src={logo} alt="logo"></img>
                <h1>Static React App</h1>
            </div>
            <div className="nav-list">
                React Course project-1
            </div>
        </nav>
    )
}