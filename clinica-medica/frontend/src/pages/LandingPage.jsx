import React from 'react';
import '../pages/LandingPage.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import logo from '../assets/imgs/logo.png';
import consultas from '../assets/imgs/consultas.png';
import exames from '../assets/imgs/exames.png';
import especialistas from '../assets/imgs/especialistas.png';


const LandingPage = () => (
  <Container className="container mt-5">
    <Row className="my-4">
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title>Bem-vindo ao Consultório Médico</Card.Title>
            <Card.Text>
              Aqui você pode gerenciar suas consultas e acessar informações sobre nossos serviços.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    
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
                         <Card.Img variant="top" src={especialistas} />
                         <Card.Body>
                             <Card.Title>Especialistas</Card.Title>
                             <Card.Text>
                                 Contamos com uma equipe de especialistas em diversas áreas para atender às suas necessidades.
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
                 
    </Row>
  </Container>
);

export default LandingPage;


