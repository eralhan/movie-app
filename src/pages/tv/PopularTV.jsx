import axios from "axios";
import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import apiConfigs from "../../config/api";
import Loader from "../../component/Loader";
import dateFormat from "../../utils/dateFormatter";
import TVCard from "../../component/tv_series/TVCard";

class PopularTV extends Component {
  state = {
    tvs: [],
    isLoading: true,
  };

  async componentDidMount() {
    await axios
      .get(`${apiConfigs.baseUrl}/tv/popular?language=en-US&page=1`, {
        headers: apiConfigs.headers,
      })
      .then((response) => {
        this.setState({ tvs: response.data.results });
        this.setState({ isLoading: false });
      });
  }

  render() {
    return (
      <>
        <Container>
          {this.state.isLoading && <Loader />}
          {!this.state.isLoading && (
            <>
              <Row className="my-2">
                <Col>
                  <h1>Popular Tv Shows</h1>
                </Col>
              </Row>
              <Row>
                {this.state.tvs.map((tv) => (
                  <Col key={tv.id} xs={12} sm={3}>
                    <TVCard tv={tv} />
                  </Col>
                ))}
              </Row>
            </>
          )}
        </Container>
      </>
    );
  }
}

export default PopularTV;
