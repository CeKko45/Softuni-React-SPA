import { useEffect, useState } from "react";

import * as carService from "../../services/carService";
import CarListItem from "./car-list-item/CarListItem";

export default function CarList() {
    const [cars, setCars] = useState([]);

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
                </div>
            )}
        </section>
    );
}