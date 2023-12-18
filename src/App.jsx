import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import MovieDetails from "./pages/MovieDetails";
import FullCast from "./pages/FullCast";
import PopularMovies from "./pages/PopularMovies";
import NowPlayingMovies from "./pages/NowPlayingMovies";
import UpcomingMovies from "./pages/UpcomingMovies";
import TopRatedMovies from "./pages/TopRatedMovies";
import PopularPeople from "./pages/PopularPeople";
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
