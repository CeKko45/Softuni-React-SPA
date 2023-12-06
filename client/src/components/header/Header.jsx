import { useContext } from "react"
import { Link } from "react-router-dom"

import AuthContext from "../../contexts/authContext"
import Path from "../../paths";

export default function Header() {
    const {
        isAuthenticated,
        username,
    } = useContext(AuthContext);


    return (
        <header>
            <nav>

                <ul>
                    <li><Link className="home" to={Path.Home}>Home</Link></li>
                    <li><Link to={Path.CarList}>Catalog</Link></li>
                    {isAuthenticated && (
                        <div id="user">
                            <li><Link to={Path.CarCreate}>Create Car</Link></li>
                            <li><Link to={Path.Logout}>Logout</Link></li>
                            <span>| {username} |</span>
                        </div>
                    )}
                    {!isAuthenticated && (
                        <div id="guest">
                            <li><Link to={Path.Login}>Login</Link></li>
                            <li><Link to={Path.Register}>Register</Link></li>
                        </div>
                    )}

                </ul>

            </nav>
        </header>

    )
}