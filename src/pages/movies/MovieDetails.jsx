import { useParams, Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import apiConfigs from "../../config/api";

const MovieDetails = () => {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [credits, setCredits] = useState([]);
  const params = useParams();
  const releaseDate = new Date(
    data.release_date ?? data.first_air_date
  ).toLocaleDateString("en-us", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

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
      <Container style={{ marginTop: "12px" }}>
        {isLoading && <p>Loading...</p>}

        {error && <p style={{ color: "red" }}>{error}</p>}

        {!isLoading && !error && (
          <>
            <Row>
              <Col sm={4}>
                <Image
                  style={{ width: "100%" }}
                  src={`${apiConfigs.baseImgUrl}/${data.poster_path}`}
                  alt={data.title}
                />
              </Col>
              <Col sm={8}>
                <h2>{data?.title}</h2>
                <h5>Release Date: {releaseDate}</h5>
                <h5 style={{ display: "flex", gap: "0.5rem" }}>
                  Genres:
                  {data?.genres?.map((genre) => (
                    <Badge bg="secondary" key={genre.id}>
                      {genre.name}
                    </Badge>
                  ))}
                </h5>

                <h5>Overview</h5>
                <p>{data.overview}</p>
                <h5>Production Companies</h5>
                <ul>
                  {data?.production_companies?.map((company) => (
                    <li key={company.id}>{company.name}</li>
                  ))}
                </ul>
              </Col>
            </Row>
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
