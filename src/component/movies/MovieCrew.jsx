import { Row, Col } from "react-bootstrap";
import apiConfigs from "../../config/api";
import "./styles/movieCrew.css";

const MovieCrew = ({ crew }) => {
  return (
    <>
      <div className="crews-header my-4">
        <h2 className="text-white">Crew</h2>
      </div>
      <Row className="mt-2 g-2">
        {crew.map((crew) => (
          <Col key={crew.credit_id} xs={6} sm={3} md={2}>
            <div className="crewCard text-center">
              {crew.profile_path === null ? (
                <img
                  className="crewImage"
                  src={`${apiConfigs.defaultUserImage}`}
                  alt="Default User"
                />
              ) : (
                <img
                  className="crewImage"
                  src={`${apiConfigs.baseImgUrl}/${crew.profile_path}`}
                  alt={crew.name}
                />
              )}
              <div className="crewCard__body text-white">
                <h5>{crew.name}</h5>
                {crew?.known_for_department && (
                  <p>
                    <strong>Job</strong>: {crew?.known_for_department}
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

export default MovieCrew;
