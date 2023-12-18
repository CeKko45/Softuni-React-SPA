import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as engineService from "../../services/engineService"
import AuthContext from "../../contexts/authContext";
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";


export default function EngineDetails() {
    const navigate = useNavigate();
    const { userId } = useContext(AuthContext);
    const [engine, setEngine] = useState({});
    const { engineId } = useParams();


    useEffect(() => {
        engineService.getOne(engineId)
            .then(setEngine);
    }, [engineId]);



    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${engine.code} ${engine.type}${engine.cylinders}`);

        if (hasConfirmed) {
            await engineService.remove(engineId);

            navigate(Path.EngineList);
        }
    }

    return (
        <section id="detailsPage">
            <div id="detailsInfo">
                <h1>{engine.code} {engine.type}{engine.cylinders}</h1>
                <div className="engineInfo"><img src={engine.image} /></div>

                <div className="info">
                    <h2>Horsepower: {engine.horsepower}</h2>
                    <h2>Torque: {engine.torque}</h2>
                </div>


                {userId === engine._ownerId && (

                    <div className="buttons">

                        <Link to={pathToUrl(Path.EngineEdit, { engineId })}>
                            <button className="edit-btn">Edit</button>
                        </Link>
                        <button className="delete-btn" onClick={deleteButtonClickHandler}>Delete</button>

                    </div>
                )}

            </div>
        </section >
    )
}