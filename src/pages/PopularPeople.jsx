import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const baseImgUrl = "https://image.tmdb.org/t/p";
const size = "w500";

class PopularPeople extends Component {
  state = {
    people: [],
  };

  async componentDidMount() {
    await axios
      .get(
        "https://api.themoviedb.org/3/person/popular?language=en-US&page=1",
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        }
      )
      .then((response) => {
        this.setState({ people: response.data.results });
      });
  }

  render() {
    return (
      <Container className="my-4">
        <Row>
          <Col>
            <h1>Popular People</h1>
          </Col>
        </Row>
        <Row className="g-4">
          {this.state.people.map((person) => (
            <Col key={person.id} sm={3} xs={6} className="">
              <div
                style={{ border: "1px solid #d0d5dd", borderRadius: "12px" }}
              >
                <img
                  style={{ width: "100%", borderRadius: "12px" }}
                  src={`${baseImgUrl}/${size}/${person.profile_path}`}
                  alt={person.name}
                />
                <div style={{ padding: "8px" }}>
                  <h5 className="text-center">{person.name}</h5>
                  <h6>Known For:</h6>
                  <ul>
                    {person?.known_for?.map((known) => (
                      <Link to={`/movie/${known.id}`}>
                        <li key={known.id}>{known.title ?? known.name}</li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default PopularPeople;
