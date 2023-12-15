import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as engineService from "../../services/engineService";
import Path from "../../paths";

export default function EngineEdit() {
    const navigate = useNavigate();
    const { engineId } = useParams();
    const [engine, setEngine] = useState({
        make: '',
        code: '',
        horsepower: '',
        torque: '',
        type: '',
        cylinders: '',
        image: '',
    });

    useEffect(() => {
        engineService.getOne(engineId)
            .then(result => {
                setEngine(result);
            });
    }, [engineId]);

    const editEngineSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await engineService.edit(engineId, values);

            navigate(Path.EngineList);
        } catch (err) {
            console.log(err);
        }
    }

    const onChange = (e) => {
        setEngine(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="editPage">
            <form id='editForm' onSubmit={editEngineSubmitHandler}>
                <label htmlFor="make">Make:</label>
                <input
                    type="text"
                    id="make"
                    name="make"
                    value={engine.make}
                    onChange={onChange}
                    placeholder="Make..."
                    required
                />

                <label htmlFor="code">Engine Code:</label>
                <input
                    type="text"
                    id="code"
                    name="code"
                    value={engine.code}
                    onChange={onChange}
                    placeholder="Engine Code..."
                    required
                />

                <label htmlFor="horsepower">Horsepower:</label>
                <input
                    type="number"
                    id="horsepower"
                    name="horsepower"
                    value={engine.horsepower}
                    onChange={onChange}
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
                    value={engine.torque}
                    onChange={onChange}
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
                    value={engine.type}
                    onChange={onChange}
                    placeholder="Type..."
                    maxLength={10}
                    required
                />

                <label htmlFor="cylinders">Cylinders Count:</label>
                <input
                    type="number"
                    id="cylinders"
                    name="cylinders"
                    value={engine.cylinders}
                    onChange={onChange}
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
                    value={engine.image}
                    onChange={onChange}
                    placeholder="Image Address..."
                    required
                />

                <input type="submit" className="edit" value="Edit Offer" />
            </form>
        </section>
    );
}
