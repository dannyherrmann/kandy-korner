import { useEffect, useState } from "react"
import "./Locations.css"

export const Locations = () => {
    const [locations, setLocations] = useState([])


useEffect(
    () => {
        const fetchData = async() => {
            const response = await fetch('http://localhost:8088/locations')
            const locationArray = await response.json()
            setLocations(locationArray)
        }
        fetchData()
        },
        []
)

return (
    <>
    
    <h2>Locations</h2>
    <article className="locations">
        {
            locations.map((location) => {
                return (
                    <ul className="location" key={location.id}>
                        <u><b>Address</b></u><br></br><br></br>
                        {location.addressLine1}<br></br>
                        {location.city}<br></br>
                        {location.state}<br></br>
                        {location.zip}<br></br><br></br>
                        <u><b>Square Footage</b></u> = {location.squareFootage} sq. ft.
                    </ul>
                )
            })
        }
    </article>
    
    </>
)
}
