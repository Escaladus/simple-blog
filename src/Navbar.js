import { Link } from "react-router-dom";

export default function Navbar() {

    return(
        <div className={"navbar"}>
            <h1>The Dojo blog</h1>
            <Link to="/" className={"nav-link"}>Home</Link>
            <Link to="/create" className={"nav-link"}>New blog</Link>
        </div>
    );
}