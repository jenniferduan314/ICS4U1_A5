import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeView from "../src/views/HomeView";
import RegisterView from "../src/views/RegisterView";
import LoginView from "../src/views/LoginView";
import MoviesView from "../src/views/MoviesView";
import GenreView from "./views/GenreView";
import DetailView from "./views/DetailView";
import ErrorView from "./views/ErrorView";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<RegisterView />} />
          <Route path="/movies" element={<MoviesView />}>
          <Route path="genre/:id" element={<GenreView />} />
          <Route path="details/:id" element={<DetailView />} />
          </Route>
        <Route path="*" element={<ErrorView />} />
      </Routes>
    </BrowserRouter>
  )



}

export default App