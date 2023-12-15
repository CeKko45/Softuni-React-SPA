import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as engineService from "../../services/engineService";
import AuthContext from "../../contexts/authContext";
import Path from "../../paths";
import EngineListItem from "./engine-list-item/EngineListItem";


export default function EngineList() {
    const [engines, setEngines] = useState([]);
    const { isAuthenticated } = useContext(AuthContext);


    useEffect(() => {
        engineService.getAll()
            .then(result => setEngines(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section id="viewCatalog" className="background-img">

            {engines.map(engine => (
                <EngineListItem key={engine._id} {...engine} />
            ))}

            {engines.length === 0 && (

                <div className="guest">
                    There are no engines yet...
                    <div>
                        <img src="./images/no-added-engines.jpg" alt="img" />
                    </div>
                </div>
            )}

            {isAuthenticated && (
                <Link to={Path.EngineCreate}>
                    <h2 className="create-button">Create Engine</h2>
                </Link>
            )}
        </section>
    );
}