import { Navbar, Nav, Container } from 'react-bootstrap';
function MyNavbar() {
    return (
        <div className="app-navbar">
          <Navbar bg="grass" expand="lg" className="app-navbar__inner">
            <Container>
                <Navbar.Brand className='nav-logo'>ARAB SPORTY'S MAGAZINE</Navbar.Brand>
            </Container>
          </Navbar>
        </div>
    );
}

export default MyNavbar;