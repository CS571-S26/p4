import { NavLink, Outlet } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap'
import '../App.css'

export default function Layout() {
  return (
    <div>
      <Navbar expand="md" className="border-bottom shadow-sm">
        <Container>
          <Navbar.Brand>Card Collector&apos;s Collective</Navbar.Brand>
          <Navbar.Toggle aria-controls="site-nav" />
          <Navbar.Collapse id="site-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/favorites">
                Favorites
              </Nav.Link>
              <Nav.Link as={NavLink} to="/rcg">
                RCG
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/add">
                Suggest a game
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cards">
                Fun Cards
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}
