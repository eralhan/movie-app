import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { Component } from "react";
import axios from "axios";
import TrendingMovieCard from "./TrendingMovieCard";

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
        <Row style={{ flexWrap: "nowrap", overflowX: "scroll" }}>
          {this.state.movies.map((movie) => (
            <Col key={movie.id}>
              <TrendingMovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default TrendingMovies;
