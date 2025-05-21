
import globe_image from "../images/globe.png";

export default function Header(){
    return(
        <>
            <header>
                <img src = {globe_image} alt = "globe-image" className = "globeImage"></img>
                <p>My travel journal</p>
            </header>
        </>
    )
}
