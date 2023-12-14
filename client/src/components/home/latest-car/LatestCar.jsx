export default function LatestCar(car) {
    return (
        <div className="latest-cars-in-catalog">
            <img src={car.image} className="picture-latest-cars" />
        </div>
    )
}