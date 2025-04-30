import "./Header.css";
import MeowMovies from "../assets/images/weblogo.png";
import Search from "../assets/images/searching.png";
import { useNavigate } from "react-router";

function Header() {
    const navigate = useNavigate();

    return (
        <div className="header">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Staatliches&display=swap" rel="stylesheet">
            </link>
            
            <div>
                <img src={MeowMovies} alt="MeowMovies logo" width="150" id="logo" />
                <div className="header-text"  onClick={() => navigate(`/`)}>
                    <div className="webtitle">「MEOW MOVIES!」</div>
                </div>
            </div>
            <div className="header-frame">
                <input type="text" id="search-bar" height="40" placeholder="Search" />
                <button id="search-button">
                    <img src={Search} alt="search button" height="40" />
                </button>
            </div>
        </div>
    )
}

export default Header;