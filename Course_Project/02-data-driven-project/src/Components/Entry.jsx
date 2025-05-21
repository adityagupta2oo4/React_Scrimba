/**
 * Challenge: pass props to the Entry component to display
 * its data. See the `data.md` file for each prop name and its
 * value.
 * 
 * Then on the Entry component, receive and display the values
 * for those props. In the end, the page should look the same
 * as it does now, but without all the hard-coded data in the
 * component
 */

/*
img: (will be an object with the following properties/values)
{
    src: "https://scrimba.com/links/travel-journal-japan-image-url",
    alt: "Mount Fuji"
}

title:
Mount Fuji

country:
Japan

googleMapsLink:
https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu

dates:
12 Jan, 2021 - 24 Jan, 2021

text:
Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists. */

import marker from "../images/marker.png";

export default function Entry(props){
    const {img,title,country,gMapLink,dates,text} = props;
    return(
        <>
        <div className="Card">
            <img src={img.src} alt = {img.alt} className="dest-image"></img>
            <div className = "card-detail">
                <div className="Top">
                    <img src = {marker} alt = "marker" className= "Marker-image"></img>
                    <p>{country}</p>
                    <a href = {gMapLink}>
                        View on Google Maps
                    </a>
                </div>

                <h1>{title}</h1>

                <p className="date">{dates}</p>
            
                <p className="dest-detail">
                    {text}
                </p>
            </div>

        </div>
        
        </>
    )
}