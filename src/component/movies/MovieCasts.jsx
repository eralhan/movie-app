import { Row, Col } from "react-bootstrap";
import "./styles/movieCasts.css";
import apiConfigs from "../../config/api";

const MovieCasts = ({ casts }) => {
  return (
    <>
      <div className="casts-header my-4">
        <h2>Casts</h2>
      </div>
      <Row className="mt-2 g-2">
        {casts.map((cast) => (
          <Col key={cast.id} xs={6} sm={3} md={2}>
            <div className="castCard text-center">
              {cast.profile_path === null ? (
                <img
                  className="castImage"
                  src={`${apiConfigs.defaultUserImage}`}
                  alt="Default User"
                />
              ) : (
                <img
                  className="castImage"
                  src={`${apiConfigs.baseImgUrl}/${cast.profile_path}`}
                  alt={cast.name}
                />
              )}
              <div className="castCard__body">
                <h5>{cast.name}</h5>
                {cast?.character && (
                  <p>
                    <strong>Character</strong>: {cast?.character}
                  </p>
                )}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MovieCasts;
