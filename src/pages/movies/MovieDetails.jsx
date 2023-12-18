import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfigs from "../../config/api";
import { Container } from "react-bootstrap";
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
            <MovieCasts casts={credits} movieId={params.id} />
          </>
        )}
      </Container>
    </>
  );
};

export default MovieDetails;
