import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Footer from "./components/Footer";

function NavBar() {
  return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Wakatipu film</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

function App() {
  return (
      <div>
        <NavBar />
          <div className="header">
              <h1> Wakatipu Film</h1>
          </div>
          <h2> Services</h2>
          <div className="services">
              <div className="service" id="scan-service">
                  <h3> Scan and Print</h3>
              </div>
              <div className="service" id="develop-service">
                <h3>Develop Film</h3>
                  <h6>coming soon</h6>
              </div>
          </div>
          <h2> Scan and Print </h2>
          <div className="info">
              Use our 20MP scanner to produce a quality scan of your film and then (optionally) print each
              photo on a 4" x 6" photo
          </div>
          <h2 > Pricing </h2>
          <div className="info">
            Get digital copies of your photos for $1
            Get the photos printed on gloss photo paper for an additional 50c each
          </div>
          <h2> Contact </h2>
          <div className="info">
              Frankton Road, 9300
              Text 021-xxxxxxx for enquiries
          </div>
          <Footer/>
      </div>
  );
}

export default App;

