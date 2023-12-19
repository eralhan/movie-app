import { Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import apiConfigs from "../../config/api";

class PopularPeople extends Component {
  state = {
    people: [],
  };

  async componentDidMount() {
    await axios
      .get(`${apiConfigs.baseUrl}/person/popular?language=en-US&page=1`, {
        headers: apiConfigs.headers,
      })
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
                {person.profile_path === null ? (
                  <img
                    style={{ width: "100%", borderRadius: "12px" }}
                    src={`${apiConfigs.defaultUserImage}}`}
                    alt={person.name}
                  />
                ) : (
                  <img
                    style={{ width: "100%", borderRadius: "12px" }}
                    src={`${apiConfigs.baseImgUrl}/${person.profile_path}`}
                    alt={person.name}
                  />
                )}
                <div style={{ padding: "8px" }}>
                  <h5 className="text-center">{person.name}</h5>
                  <h6>Known For:</h6>
                  <ul>
                    {person?.known_for?.map((known) =>
                      known.media_type === "movie" ? (
                        <Link to={`/movie/${known.id}`}>
                          <li key={known.id}>{known.title ?? known.name}</li>
                        </Link>
                      ) : (
                        <li key={known.id}>{known.title ?? known.name}</li>
                      )
                    )}
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
