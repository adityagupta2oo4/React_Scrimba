import Header from "./Components/Header.jsx"
import Entry from "./Components/Entry.jsx"
import data from "../data.js"

export default function App() {

  const components = data.map((obj)=>{
    const {id,img,title,country,googleMapsLink,dates,text} = obj;
    return(
      <Entry
      key = {id} // is has to be key no implementation in Entry.jsx
      img = {img}
      title = {title}
      country = {country}
      gMapLink ={googleMapsLink}
      dates = {dates}
      text = {text}
      />
    )

  })

  return ( 
    
    <>
    <Header />
    {components}
    </>
  )
}

