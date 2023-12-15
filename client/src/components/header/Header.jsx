import { useContext } from "react"
import { Link } from "react-router-dom"

import AuthContext from "../../contexts/authContext"
import Path from "../../paths";

export default function Header() {
    const {
        isAuthenticated,
    } = useContext(AuthContext);


    return (
        <header>
            <nav>

                <ul>
                    <li><Link to={Path.Home}>Home</Link></li>
                    <li><Link to={Path.CarList}>Cars</Link></li>
                    <li><Link to={Path.EngineList}>Engines</Link></li>
                    {isAuthenticated && (
                        <div>
                            <li><Link to={Path.CarCreate}>Create Car</Link></li>
                            <li><Link to={Path.EngineCreate}>Create Enigne</Link></li>
                            <li><Link to={Path.Logout}>Logout</Link></li>
                        </div>
                    )}
                    {!isAuthenticated && (
                        <div>
                            <li><Link to={Path.Login}>Login</Link></li>
                            <li><Link to={Path.Register}>Register</Link></li>
                        </div>
                    )}

                </ul>

            </nav>
        </header>

    )
}