import { useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w500";
  const releaseDate = new Date(
    data.release_date ?? data.first_air_date
  ).toLocaleDateString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}`, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
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
  }, []);

  return (
    <>
      <Container style={{ marginTop: "12px" }}>
        {isLoading && <p>Loading...</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {!isLoading && !error && (
          <Row>
            <Col sm={4}>
              <Image
                style={{ width: "100%" }}
                src={`${baseImgUrl}/${size}/${data.poster_path}`}
                alt={data.title}
              />
            </Col>
            <Col sm={8}>
              <h2>{data?.title}</h2>
              <h5>Release Date: {releaseDate}</h5>
              <h5>Genres:</h5>
              <ul>
                {data?.genres.map((genre) => (
                  <li>{genre.name}</li>
                ))}
              </ul>
              <h5>Overview</h5>
              <p>{data.overview}</p>
              <h5>Production Companies</h5>
              <ul>
                {data?.production_companies.map((company) => (
                  <li key={company.id}>{company.name}</li>
                ))}
              </ul>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default MovieDetails;
