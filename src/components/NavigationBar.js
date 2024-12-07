// Import required Bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Define the NavigationBar component
const NavigationBar = () => {
  return (
    // Create a responsive navigation bar
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        {/* Brand/logo of the site */}
        <Navbar.Brand href="/">Game Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Navigation links */}
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create">Add Game</Nav.Link>
            <Nav.Link href="/read">Browse Games</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// Export the component for use in other parts of the app
export default NavigationBar;
