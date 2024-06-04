import React from 'react';
import { Link } from 'react-router-dom';
import { Row,Col,Card ,Navbar,Nav} from 'react-bootstrap';
import consultas from '../assets/imgs/consultas.png';
import especialistas from '../assets/imgs/especialistas.png';
import exames from '../assets/imgs/exames.png';


function LandingPage() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Consultório Médico</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/register">Cadastre-se</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                        <Nav.Link as={Link} to="/appointments">Agendamentos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className='container mt-5'>
                <h1>Bem-vindo ao Consultório Médico</h1>
                <p>Nosso consultório oferece os melhores serviços médicos para garantir sua saúde e bem-estar. 
                    Agende sua consulta online e tenha acesso ao nosso atendimento especializado.
                </p>
            </div>
            <div className="home">
            <Row className="mt-4">
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={consultas} />
                        <Card.Body>
                            <Card.Title>Consultas Gerais</Card.Title>
                            <Card.Text>
                                Oferecemos consultas gerais com médicos altamente qualificados para cuidar da sua saúde.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={exames} />
                        <Card.Body>
                            <Card.Title>Exames de Rotina</Card.Title>
                            <Card.Text>
                                Realize seus exames de rotina conosco e tenha resultados rápidos e precisos.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={especialistas} />
                        <Card.Body>
                            <Card.Title>Especialistas</Card.Title>
                            <Card.Text>
                                Contamos com uma equipe de especialistas em diversas áreas para atender às suas necessidades.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </div>

        
        </div>
    );
}

export default LandingPage;
