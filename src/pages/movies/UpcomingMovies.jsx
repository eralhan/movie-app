import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import apiConfigs from "../../config/api";
import MovieCard from "../../component/movies/MovieCard";

class UpcomingMovies extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    await axios
      .get(`${apiConfigs.baseUrl}/movie/upcoming?language=en-US&page=1`, {
        headers: apiConfigs.headers,
      })
      .then((response) => {
        this.setState({ movies: response.data.results });
      });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Upcoming Movies</h1>
          </Col>
        </Row>
        <Row>
          {this.state.movies.map((movie) => (
            <Col key={movie.id} xs={6} sm={4} md={3} lg={2}>
              <Link to={`/movie/${movie.id}`}>
                <MovieCard movie={movie} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default UpcomingMovies;
