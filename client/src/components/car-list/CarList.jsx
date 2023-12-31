import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import * as carService from "../../services/carService";
import AuthContext from "../../contexts/authContext";
import Path from "../../paths";
import CarListItem from "./car-list-item/CarListItem";

export default function CarList() {
    const [cars, setCars] = useState([]);
    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        carService.getAll()
            .then(result => setCars(result))
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section id="viewCatalog" className="background-img">

            {cars.map(car => (
                <CarListItem key={car._id} {...car} />
            ))}

            {cars.length === 0 && (

                <div className="guest">
                    There are no found cars...
                    <div>
                        <img src="./images/no-added-cars.jpg" alt="img" />
                    </div>
                </div>
            )}

            {isAuthenticated && (
                <Link to={Path.CarCreate}>
                    <h2 className="create-button">Create Car</h2>
                </Link>
            )}
        </section>
    );
}