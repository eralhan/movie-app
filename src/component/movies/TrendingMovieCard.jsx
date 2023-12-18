import "./styles/trendingMovieCard.css";
import apiConfigs from "../../config/api";

const TrendingMovieCard = ({ movie }) => {
  const releaseDate = new Date(
    movie.release_date ?? movie.first_air_date
  ).toLocaleDateString("ru", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <>
      <div className="trendingMovieCard">
        <div className="trendingMovieCard__image">
          <img
            src={`${apiConfigs.baseImgUrl}/${apiConfigs.imgSize}/${movie.poster_path}`}
            alt={movie.name ?? movie.title}
          />
        </div>
        <div className="trendingMovieCard__body">
          <h2 className="trendingMovieCard__title">
            {movie.name ?? movie.title}
          </h2>
          <p className="trendingMovieCard__subtitle">{releaseDate}</p>
        </div>
      </div>
    </>
  );
};

export default TrendingMovieCard;
