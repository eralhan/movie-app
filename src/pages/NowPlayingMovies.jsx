import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { Component } from "react";
import axios from "axios";
import TrendingMovieCard from "../component/movies/TrendingMovieCard";
import { Link } from "react-router-dom";
import apiConfigs from "../config/api";

class NowPlayingMovies extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    await axios
      .get(`${apiConfigs.baseUrl}/movie/now_playing?language=en-US&page=1`, {
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
            <h1>Now Playing Movies</h1>
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

export default NowPlayingMovies;
