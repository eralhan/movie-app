import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import MovieDetails from "./pages/movies/MovieDetails";
import FullCast from "./pages/movies/FullCast";
import PopularMovies from "./pages/movies/PopularMovies";
import NowPlayingMovies from "./pages/movies/NowPlayingMovies";
import UpcomingMovies from "./pages/movies/UpcomingMovies";
import TopRatedMovies from "./pages/movies/TopRatedMovies";
import PopularPeople from "./pages/people/PopularPeople";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/popular" element={<PopularMovies />} />
        <Route path="/movie/now_playing" element={<NowPlayingMovies />} />
        <Route path="/movie/upcoming" element={<UpcomingMovies />} />
        <Route path="/movie/top_rated" element={<TopRatedMovies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movie/:id/fullcast" element={<FullCast />} />
        <Route path="/people/popular" element={<PopularPeople />} />
      </Routes>
    </>
  );
}

export default App;
