import { useEffect, useState } from "react"

import * as carService from "../../services/carService"
import LatestCar from "./latest-car/LatestCar";


export default function Home() {

    const [latestCars, setLatestCars] = useState([]);

    useEffect(() => {
        carService.getLatest()
            .then(result => setLatestCars(result));
    })

    return (
        <section id="homePage" className="background-img">
            <div className="introduction">
                <h1>The Site where you can find your favourite classic american cars.</h1>
                <p>Here you can find high horsepower and a lot of torque. Fords, Dodges, Chevrolets even brands that no longer exist like Oldsmobile, Buick and Pontiac. I'm sure you'll find your match.</p>
                <div className="latest-cars">

                    {latestCars.slice(0, 2).map(car => <LatestCar key={car._id} {...car} />)}

                    {!latestCars.length && <h2>No cars yet</h2>}
                </div>
            </div>
        </section>
    )
}