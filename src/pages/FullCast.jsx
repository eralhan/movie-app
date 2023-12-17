import { useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import axios from "axios";

const FullCast = () => {
  const [casts, setCast] = useState([]);
  const [crews, setCrew] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w500";

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}/credits`, {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
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
            <Row>
              <h2>Casts</h2>
            </Row>
            <Row>
              {casts.map((cast) => (
                <Col key={cast.credit_id}>
                  <div className="castCard">
                    <img
                      style={{
                        borderRadius: "50%",
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                      src={`${baseImgUrl}/${size}/${cast.profile_path}`}
                      alt={cast.name}
                    />
                    <div className="castCard__body">
                      <h5>{cast.name}</h5>
                      <p>{cast.character}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <Row>
              <h2>Crew</h2>
            </Row>
            <Row>
              {crews.map((crew) => (
                <Col key={crew.credit_id}>
                  <div className="crewCard">
                    <img
                      style={{
                        borderRadius: "50%",
                        width: "150px",
                        height: "150px",
                        objectFit: "cover",
                      }}
                      src={`${baseImgUrl}/${size}/${crew.profile_path}`}
                      alt={crew.name}
                    />
                    <div className="crewCard__body">
                      <h5>{crew.name}</h5>
                      <p>{crew.department}</p>
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

export default FullCast;
