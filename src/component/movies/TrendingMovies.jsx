import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { Component } from "react";
import axios from "axios";
import TrendingMovieCard from "./TrendingMovieCard";
import { Link } from "react-router-dom";

class TrendingMovies extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    await axios
      .get("https://api.themoviedb.org/3/trending/all/day", {
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
      <Container style={{ overflow: "hidden" }}>
        <Row>
          <Col>
            <h1>Trending</h1>
          </Col>
        </Row>
        <Row style={{ flexWrap: "nowrap", overflowX: "scroll" }}>
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

export default TrendingMovies;