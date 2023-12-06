import { useNavigate } from "react-router-dom";

import * as carService from "../../services/carService";

export default function CarCreate() {
    const navigate = useNavigate();

    const createCarSubmitHandler = async (e) => {
        e.preventDefault();

        const carData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await carService.create(carData);

            navigate('/cars');
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
                    placeholder="Make..."
                />

                <label htmlFor="model">Model:</label>
                <input
                    type="text"
                    id="model"
                    name="model"
                    placeholder="Model..."
                />

                <label htmlFor="production">Year of Production:</label>
                <input
                    type="number"
                    id="production"
                    name="production"
                    placeholder="Year of Production..."
                />

                <label htmlFor="mileage">Mileage:</label>
                <input
                    type="number"
                    id="mileage"
                    name="mileage"
                    placeholder="Mileage..."
                />

                <label htmlFor="image">Image:</label>
                <input
                    type="text"
                    id="image"
                    name="image"
                    placeholder="Image..."
                />

                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="Description..."
                />

                <input type="submit" className="create" value="Create Offer" />
            </form>
        </section>
    );
}