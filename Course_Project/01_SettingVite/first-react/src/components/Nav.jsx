import ReactLogo from "../assets/react.svg"

export default function Nav(){
    return (
        <div className = "nav-bar">
        <img src = {ReactLogo} alt="Logo" className="logo"></img>
        <p className="logo-text">React</p>
        </div>
    )
}