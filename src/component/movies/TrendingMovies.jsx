import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import React, { Component, Suspense } from "react";
import axios from "axios";

const baseImgUrl = "https://image.tmdb.org/t/p";
const size = "w500";

class TrendingMovies extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    await axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=65c89110732cbc69062be8efc78acce7"
      )
      .then((response) => {
        this.setState({ movies: response.data.results });
      });
  }

  render() {
    return (
      <Container style={{ overflow: "hidden" }}>
        <Row>
          <Col>
            <h1>Trending</h1>
          </Col>
        </Row>
        <Suspense fallback={<Spinner animation="border" variant="dark" />}>
          <Row style={{ flexWrap: "nowrap", overflowX: "scroll" }}>
            {this.state.movies.map((movie) => (
              <Col key={movie.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`${baseImgUrl}/${size}/${movie.poster_path}`}
                  />
                  <Card.Body>
                    <Card.Title>{movie.title ?? movie.name}</Card.Title>
                    <Card.Text>
                      {movie.release_date ?? movie.first_air_date}
                    </Card.Text>
                    <Card.Text>{movie.vote_average}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Suspense>
      </Container>
    );
  }
}

export default TrendingMovies;
