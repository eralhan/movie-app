import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { Component } from "react";
import axios from "axios";
import TrendingMovieCard from "../component/movies/TrendingMovieCard";
import { Link } from "react-router-dom";

class PopularMovies extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    await axios
      .get("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        },
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
            <h1>Popular Movies</h1>
          </Col>
        </Row>
        <Row>
          {this.state.movies.map((movie) => (
            <Col key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <TrendingMovieCard movie={movie} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default PopularMovies;
