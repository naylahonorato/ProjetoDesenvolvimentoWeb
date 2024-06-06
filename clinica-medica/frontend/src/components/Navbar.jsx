import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Link to="/" className="navbar-brand">AGENDA MEDIC</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Link to="/register" className="nav-link">Cadastro</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/login" className="nav-link">Login</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/appointments" className="nav-link">Consultas</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/admin" className="nav-link">Admin</Link>
                    </Nav.Item>
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;




// import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';

// const NavigationBar = () => {
//     return(
//         <Navbar bg="dark" variant="dark" expand="lg">
//     <LinkContainer to="/">
//       <Navbar.Brand>Consultório Médico</Navbar.Brand>
//     </LinkContainer>
//     <Navbar.Toggle aria-controls="basic-navbar-nav" />
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="ml-auto">
//         <LinkContainer to="/register">
//           <Nav.Link>Cadastro</Nav.Link>
//         </LinkContainer>
//         <LinkContainer to="/login">
//           <Nav.Link>Login</Nav.Link>
//         </LinkContainer>
//         <LinkContainer to="/admin">
//           <Nav.Link>Admin</Nav.Link>
//         </LinkContainer>
//         <LinkContainer to="/appointments">
//           <Nav.Link>Consultas</Nav.Link>
//         </LinkContainer>
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>
//     )
// }
  


// export default NavigationBar;
