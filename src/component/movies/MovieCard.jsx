import apiConfigs from "../../config/api";
import dateFormat from "../../utils/dateFormatter";
import "./styles/movieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="movieCard">
        <div className="movieCard__image">
          <img
            src={`${apiConfigs.baseImgUrl}/${movie.poster_path}`}
            alt={movie.name ?? movie.title}
          />
        </div>
        <div className="movieCard__content">
          <h2 className="movieCard__title">{movie.name ?? movie.title}</h2>
          <p className="movieCard__subtitle">
            {dateFormat(movie.release_date ?? movie.first_air_date)}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
