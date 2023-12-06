import { Link } from "react-router-dom";

export default function CarListItem({
    _id,
    make,
    model,
    production,
    imageUrl,
    mileage
}) {
    return (
        <div className="added-cars">

            <div className="added-cars-in-catalog">
                <Link to={`/cars/${_id}`}>
                    <img src={imageUrl} className="picture-added-cars" />
                </Link>
                <h3>{make} {model} {production}</h3>
                <span>{mileage} Miles</span>
            </div>

        </div >
    )
}