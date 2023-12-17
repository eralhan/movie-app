import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import MovieDetails from "./pages/MovieDetails";
import FullCast from "./pages/FullCast";
import PopularMovies from "./pages/PopularMovies";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/popular" element={<PopularMovies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movie/:id/fullcast" element={<FullCast />} />
      </Routes>
    </>
  );
}

export default App;
