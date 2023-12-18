import { Row, Col } from "react-bootstrap";

const MovieContainerHeader = ({ title }) => {
  return (
    <>
      <Row className="my-2">
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
    </>
  );
};

export default MovieContainerHeader;
