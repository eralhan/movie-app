import { Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import apiConfigs from "./../../config/api";
import MovieCard from "./MovieCard";
import MovieContainerHeader from "./MovieContainerHeader";

class TrendingMovies extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    await axios
      .get(`${apiConfigs.baseUrl}/trending/all/day`, {
        headers: apiConfigs.headers,
      })
      .then((response) => {
        this.setState({ movies: response.data.results });
      });
  }

  render() {
    return (
      <Container className="my-2">
        <MovieContainerHeader title={"Trending Movies"} />
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

export default TrendingMovies;
