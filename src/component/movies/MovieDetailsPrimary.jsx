import { Row, Col, Badge } from "react-bootstrap";
import apiConfigs from "../../config/api";
import "./styles/movieDetailsPrimary.css";
import dateFormat from "../../utils/dateFormatter";

const MovieDetailsPrimary = ({ movie }) => {
  return (
    <>
      <Row className="gy-3">
        <Col xs={12} sm={4}>
          {movie.poster_path === null ? (
            <img
              className="movie-poster"
              src={`${apiConfigs.defaultPoster}`}
              alt="Default Poster"
            />
          ) : (
            <img
              className="movie-poster"
              src={`${apiConfigs.baseImgUrl}/${movie.poster_path}`}
              alt={movie.title}
            />
          )}
        </Col>
        <Col xs={12} sm={8}>
          <h2>
            {movie?.title}
            <Badge bg="warning" className="mx-2">
              {movie?.vote_average?.toFixed(1)}
            </Badge>
          </h2>

          <h5>
            Release Date:{" "}
            {dateFormat(movie.release_date ?? movie.first_air_date)}
          </h5>

          <h5 style={{ marginBottom: "2px" }}>Genres</h5>
          <div className="movie-genres">
            {movie?.genres?.map((genre) => (
              <Badge bg="secondary" key={genre.id}>
                {genre.name}
              </Badge>
            ))}
          </div>

          {movie?.tagline && <h5 className="movie-tagline">{movie.tagline}</h5>}

          <h5>Overview</h5>
          <p className="body-text">{movie?.overview}</p>

          <h5>Production Companies</h5>
          <div className="movie-production-companies">
            {movie?.production_companies?.map((company) => (
              <div key={company.id}>
                {company.logo_path === null ? (
                  <img
                    src={`${apiConfigs.defaultCompanyLogo}`}
                    alt="Default Company"
                  />
                ) : (
                  <img
                    src={`${apiConfigs.baseImgUrl}/${company?.logo_path}`}
                    alt={company.name}
                  />
                )}
                {company.name}
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default MovieDetailsPrimary;
