import "./Account.css";
import Collage from "../assets/images/collage.jpeg";
import { useNavigate } from "react-router";
import { useState } from "react";

function Register() {
    const [firstN, setFirstN] = useState("");
    const [lastN, setLastN] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [rePass, setRePass] = useState("");
    const navigate = useNavigate();

    function create() {
        if (pass === rePass) {
            return alert("Account successfully created");
        } else {
            return alert("Passwords do not match");
        }
    }

    return (
        <div className="hero">
            <img src={Collage} alt="collage" id="hero-image"></img>
            <div className="shadow"></div>
            <div className="hero-frame">
                <div className="account-box">
                    <div className="account-title">Create Account</div>
                    <label className="account-text">First Name:</label>
                    <input className="account-input" type="text" value={firstN} onChange={(event) => { setFirstN(event.target.value) }} required></input>
                    <label className="account-text">Last Name:</label>
                    <input className="account-input" type="text" value={lastN} onChange={(event) => { setLastN(event.target.value) }} required></input>
                    <label className="account-text">Email:</label>
                    <input className="account-input" type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} required></input>
                    <label className="account-text">Password:</label>
                    <input className="account-input" type="password" value={pass} onChange={(event) => { setPass(event.target.value) }} required></input>
                    <label className="account-text">Re-enter Password:</label>
                    <input className="account-input" type="password" value={rePass} onChange={(event) => { setRePass(event.target.value) }} required></input>
                    <label>Already have an account? </label>
                    <label className="account-no" onClick={() => navigate("/login")}>Click here</label>
                    <button className="account-button" onClick={() => create()}>CREATE</button>
                </div>
            </div>
        </div>
    )
}

export default Register;