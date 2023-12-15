import { Link } from "react-router-dom";

export default function EngineListItem({
    _id,
    code,
    type,
    cylinders,
    image,
}) {
    return (
        <div className="added-engine">

            <div className="added-engine-in-catalog">
                <Link to={`/engines/${_id}`}>
                    <img src={image} className="picture-added-engine" />
                </Link>
                <h3>{code} {type}{cylinders}</h3>
            </div>

        </div >
    )
}