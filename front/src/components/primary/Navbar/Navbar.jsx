import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

    return (
        <div className="navbar">
            <div className="navbar_info-app">
                <img src="/vite.svg" alt="Pet care logo" />
                <h2>Pet care</h2>
                <div className="navbar_buttons-nav">
                    <Link to="/" className="navbar_button-nav">Home</Link>
                    <Link to="/appointments" className="navbar_button-nav">Appointments </Link>
                    <Link to={`/profile/:id`} className="navbar_button-nav">Profile</Link>
                    <Link to="/auth/signin" className="navbar_button-nav">Login</Link>
                    <Link to="/auth/signup" className="navbar_button-nav">Register</Link>

                </div>
            </div>
        </div>
    );
}
