import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as carService from "../../services/carService";
import Path from "../../paths";

export default function CarEdit() {
    const navigate = useNavigate();
    const { carId } = useParams();
    const [car, setCar] = useState({
        make: '',
        model: '',
        production: '',
        mileage: '',
        image: '',
        description: '',
    });

    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                setCar(result);
            });
    }, [carId]);

    const editCarSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await carService.edit(carId, values);

            navigate(Path.CarList);
        } catch (err) {
            console.log(err);
        }
    }

    const onChange = (e) => {
        setCar(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="editPage">
            <form id='editForm' onSubmit={editCarSubmitHandler}>
                <label htmlFor="make">Make:</label>
                <input
                    type="text"
                    id="make"
                    name="make"
                    value={car.make}
                    onChange={onChange}
                    placeholder="Make..."
                    required
                />

                <label htmlFor="model">Model:</label>
                <input
                    type="text"
                    id="model"
                    name="model"
                    value={car.model}
                    onChange={onChange}
                    placeholder="Model..."
                    required
                />

                <label htmlFor="production">Year of Production:</label>
                <input
                    type="number"
                    id="production"
                    name="production"
                    value={car.production}
                    onChange={onChange}
                    placeholder="Year of Production..."
                    min={1960}
                    max={1975}
                    required
                />

                <label htmlFor="mileage">Mileage:</label>
                <input
                    type="number"
                    id="mileage"
                    name="mileage"
                    value={car.mileage}
                    onChange={onChange}
                    placeholder="Mileage..."
                    required
                />

                <label htmlFor="image">Image:</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    value={car.image}
                    onChange={onChange}
                    placeholder="Image..."
                    required
                />

                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={car.description}
                    onChange={onChange}
                    placeholder="Description..."
                    required
                />
                <input type="submit" className="edit" value="Edit Offer" />
            </form>
        </section>
    );
}
