import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to={"/"}>Movie App</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavDropdown
                id="movies-nav-dropdown"
                title="Movies"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#">
                  <Link to={"/movie/popular"}>Popular</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#">Now Playing</NavDropdown.Item>
                <NavDropdown.Item href="#">Upcoming</NavDropdown.Item>
                <NavDropdown.Item href="#">Top Rated</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                id="tv-series-nav-dropdown"
                title="TV Series"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#">Popular</NavDropdown.Item>
                <NavDropdown.Item href="#">Airing Today</NavDropdown.Item>
                <NavDropdown.Item href="#">On The Air</NavDropdown.Item>
                <NavDropdown.Item href="#">Top Rated</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                id="people-nav-dropdown"
                title="People"
                menuVariant="dark"
              >
                <NavDropdown.Item href="#">Popular people</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
