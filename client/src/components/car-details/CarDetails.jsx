import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as carService from "../../services/carService";
import * as commentService from "../../services/commentService";
import AuthContext from "../../contexts/authContext";
import reducer from "./commentReducer";
import useForm from "../../hooks/useForm";
import { pathToUrl } from "../../utils/pathUtils";
import Path from "../../paths";


export default function CarDetails() {
    const navigate = useNavigate();
    const { username, userId, isAuthenticated } = useContext(AuthContext);
    const [car, setCar] = useState({});
    const [comments, dispatch] = useReducer(reducer, []);
    const { carId } = useParams();


    useEffect(() => {
        carService.getOne(carId)
            .then(setCar);

        commentService.getAll(carId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                });
            });
    }, [carId]);

    const addCommentHandler = async (values) => {
        const newComment = await commentService.create(
            carId,
            values.comment
        );

        newComment.owner = { username };

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
    }

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${car.make} ${car.model}`);

        if (hasConfirmed) {
            await carService.remove(carId);

            navigate(Path.CarList);
        }
    }

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: '',
    });

    return (
        <section id="detailsPage">
            <div id="detailsInfo">
                <h1>{car.make} {car.model}</h1>
                <div className="info"><img src={car.image} /></div>

                <div className="info">
                    <h2>Year of Production: {car.production}</h2>
                    <h2>Mileage: {car.mileage}</h2>
                    <h2>Description: {car.description}</h2>
                </div>

                {userId === car._ownerId && (

                    <div className="buttons">

                        <Link to={pathToUrl(Path.CarEdit, { carId })}>
                            <button className="edit-btn">Edit</button>
                        </Link>
                        <button className="delete-btn" onClick={deleteButtonClickHandler}>Delete</button>

                    </div>
                )}

                {isAuthenticated && (

                    <article className="create-comment">
                        <h2>Add new comment:</h2>
                        <form className="form" onSubmit={onSubmit}>
                            <textarea
                                name="comment"
                                value={values.comment}
                                onChange={onChange}
                                placeholder="Comment......"
                            ></textarea>
                            <input className="btn submit" type="submit" value="Add Comment" />
                        </form>
                    </article>

                )}


                < div className="details-comments">
                    <h1>Comments:</h1>
                    <ul>
                        {comments.map(({ _id, text, owner: { username } }) => (
                            <li key={_id} className="comment">
                                <p>{username}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>




            </div>
        </section >
    )
}
