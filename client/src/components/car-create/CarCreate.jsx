import { useNavigate } from "react-router-dom";

import * as carService from "../../services/carService";
import Path from "../../paths";

export default function CarCreate() {
    const navigate = useNavigate();

    const createCarSubmitHandler = async (e) => {
        e.preventDefault();

        const carData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await carService.create(carData);

            navigate(Path.CarList);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section id="createPage">
            <form id='createForm' onSubmit={createCarSubmitHandler}>
                <label htmlFor="make">Make:</label>
                <input
                    type="text"
                    id="make"
                    name="make"
                    placeholder="Make"
                    required
                />

                <label htmlFor="model">Model:</label>
                <input
                    type="text"
                    id="model"
                    name="model"
                    placeholder="Model..."
                    required
                />

                <label htmlFor="production">Year of Production:</label>
                <input
                    type="number"
                    id="production"
                    name="production"
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
                    placeholder="Mileage..."
                    required
                />

                <label htmlFor="image">Image:</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    placeholder="Image Address..."
                    required
                />

                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Description..."
                    required
                />

                <input type="submit" className="create" value="Create Offer" />
            </form>
        </section>
    );
}