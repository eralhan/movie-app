import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfigs from "../../config/api";
import MovieCasts from "../../component/movies/MovieCasts";
import MovieCrew from "../../component/movies/MovieCrew";

const FullCast = () => {
  const [casts, setCast] = useState([]);
  const [crews, setCrew] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`${apiConfigs.baseUrl}/movie/${params.id}/credits`, {
        headers: apiConfigs.headers,
      })
      .then((response) => {
        setCast(response.data.cast);
        setCrew(response.data.crew);
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
      <Container>
        {isLoading && <p>Loading...</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {!isLoading && !error && (
          <>
            <MovieCasts casts={casts} />
            <MovieCrew crew={crews} />
          </>
        )}
      </Container>
    </>
  );
};

export default FullCast;
