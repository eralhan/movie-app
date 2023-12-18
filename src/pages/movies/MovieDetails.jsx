import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfigs from "../../config/api";
import { Container, Button, Alert } from "react-bootstrap";
import MovieDetailsPrimary from "../../component/movies/MovieDetailsPrimary";
import MovieCasts from "../../component/movies/MovieCasts";

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
      .catch(() => {
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
      .catch(() => {
        setLoading(false);
        setError("An error occurred while fetching the data. Try Later.");
      });
  }, [params.id]);

  return (
    <>
      <Container className="my-3">
        {isLoading && <p>Loading...</p>}

        {error && (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        )}

        {!isLoading && !error && (
          <>
            <MovieDetailsPrimary movie={data} />
            <div style={{ display: "flex", justifyContent: "end" }}>
              <Link to={`/movie/${params.id}/fullcast`}>
                <Button>See Full Cast</Button>
              </Link>
            </div>
            <MovieCasts casts={credits.slice(0, 10)} />
          </>
        )}
      </Container>
    </>
  );
};

export default MovieDetails;
