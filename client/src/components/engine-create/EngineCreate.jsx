import { useNavigate } from "react-router-dom";

import * as engineService from "../../services/engineService"
import Path from "../../paths";

export default function EngineCreate() {
    const navigate = useNavigate();

    const createEngineSubmitHandler = async (e) => {
        e.preventDefault();

        const engineData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await engineService.create(engineData);

            navigate(Path.EngineList);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section id="createPage">
            <form id='createForm' onSubmit={createEngineSubmitHandler}>
                <label htmlFor="make">Make:</label>
                <input
                    type="text"
                    id="make"
                    name="make"
                    placeholder="Make"
                    required
                />

                <label htmlFor="code">Engine Code:</label>
                <input
                    type="text"
                    id="code"
                    name="code"
                    placeholder="Engine Code..."
                    required
                />

                <label htmlFor="horsepower">Horsepower:</label>
                <input
                    type="number"
                    id="horsepower"
                    name="horsepower"
                    placeholder="Horsepower..."
                    min={1}
                    max={3500}
                    required
                />

                <label htmlFor="production">Torque:</label>
                <input
                    type="number"
                    id="torque"
                    name="torque"
                    placeholder="In Newton-metres..."
                    min={1}
                    max={4000}
                    required
                />

                <label htmlFor="type">Type:</label>
                <input
                    type="text"
                    id="type"
                    name="type"
                    placeholder="Type..."
                    maxLength={10}
                    required
                />

                <label htmlFor="cylinders">Cylinders Count:</label>
                <input
                    type="number"
                    id="cylinders"
                    name="cylinders"
                    placeholder="Cylinders..."
                    min={1}
                    max={20}
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

                <input type="submit" className="create" value="Create Offer" />
            </form>
        </section>
    );
}