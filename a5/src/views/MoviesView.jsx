import Header from "../components/Header.jsx";
import Genre from "../components/Genre.jsx";
import Footer from "../components/Footer.jsx";
import { Outlet } from "react-router-dom";
import "./MoviesView.css";


function Movies() {
    const gen = [
        {id: 28, genre: "Action"},
        {id: 12,genre: "Adventure"},
        {id: 16, genre: "Animation"},
        {id: 35, genre: "Comedy"},
        {id: 14, genre: "Fantasy"},
        {id: 27, genre: "Horror"},
        {id: 10402, genre: "Music"},
        {id: 9648, genre: "Mystery"},
        {id: 878, genre: "Sci-Fi"},
        {id: 53, genre: "Thriller"},
    ]

    return (
        <div>
            <Header />
            <div className="movie-section">
                <Genre genreList={gen} />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Movies;