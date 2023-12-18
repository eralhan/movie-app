import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfigs from "../../config/api";
import { Container, Row, Col, Button } from "react-bootstrap";
import MovieDetailsPrimary from "../../component/movies/MovieDetailsPrimary";

const MovieDetails = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [credits, setCredits] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`${apiConfigs.baseUrl}/movie/${params.id}`, {
        headers: apiConfigs.headers,
      })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setError("An error occurred while fetching the data. Try Later.");
      });
  }, [params.id]);

  useEffect(() => {
    axios
      .get(`${apiConfigs.baseUrl}/movie/${params.id}/credits`, {
        headers: apiConfigs.headers,
      })
      .then((response) => {
        setCredits(response.data.cast);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setError("An error occurred while fetching the data. Try Later.");
      });
  }, [params.id]);

  return (
    <>
      <Container className="my-3">
        {isLoading && <p>Loading...</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {!isLoading && !error && (
          <>
            <MovieDetailsPrimary movie={data} />
            <Row className="d-flex justify-content-between">
              <Col>
                <h2>Casts</h2>
              </Col>
              <Col>
                <Link to={`/movie/${params.id}/fullcast`}>
                  <Button>See Full Cast</Button>
                </Link>
              </Col>
            </Row>
            <Row className="mt-2">
              {credits.slice(0, 10).map((credit) => (
                <Col key={credit.id}>
                  <div className="castCard text-center">
                    <img
                      style={{
                        borderRadius: "50%",
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                      src={`${apiConfigs.baseImgUrl}/${credit.profile_path}`}
                      alt={credit.name}
                    />
                    <div className="castCard__body">
                      <h5>{credit.name}</h5>
                      <p>Character: {credit.character}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default MovieDetails;
