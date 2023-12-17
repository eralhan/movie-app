import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./component/Header";
import MovieDetails from "./pages/MovieDetails";
import FullCast from "./pages/FullCast";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movie/:id/fullcast" element={<FullCast />} />
      </Routes>
    </>
  );
}

export default App;
