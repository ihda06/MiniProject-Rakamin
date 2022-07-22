
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useLocation} from "react-router-dom"

function NavbarComponent() {
 const location = useLocation()
//  useEffect(()=>{
//   console.log(location)
//  },[])


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" active={location.pathname === "/" ? true:false}>Home</Nav.Link>
            <Nav.Link href="/random" active={location.pathname === "/random" ? true:false}>Random</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;