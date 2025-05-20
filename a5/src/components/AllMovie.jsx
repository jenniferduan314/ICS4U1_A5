import "./AllMovie.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

function AllMovies() {
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        async function getMovies() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${id}&page=${page}`
            );
            setMovies(response.data.results);
            // Set total pages to whichever is smaller: API's total pages or 20
            setTotalPages(Math.min(response.data.total_pages, 20));
        } getMovies();
    }, [id, page]);

    useEffect(() => {
        setPage(1);
    }, [id]);

    function PrevPage() {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    function NextPage() {
        if (page < totalPages) { 
            setPage(page + 1);
        }
    }

    function Details(id) {
        navigate(`/movies/details/${id}`);
    }

    return (
        <div className="movies-container">
            {movies.map((movie) => (
                <div key={movie.id} className="movie" onClick={() => Details(movie.id)}>
                    <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}></img>
                </div>
            ))}
            <div className="movies-pages">
                <label className="movies-numbers">Page: {page} / {totalPages}</label>
                <div>
                    <button className="movies-buttons" onClick={() => PrevPage()}>Previous Page</button>
                    <button className="movies-buttons" onClick={() => NextPage()}>Next Page</button>
                </div>
            </div>
        </div>
    )
}

export default AllMovies;