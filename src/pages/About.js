import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

export default function About() {
    return (
        <Container className='discContainer'>
        <h1>Meet the Team</h1>
        <CardGroup>
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top"
            src="https://leojomar01.github.io/MiniProject-2/static/media/m.fd93dc294ed349c282b6.png" />
            <Card.Body>
              <Card.Title>Ferjade Fortuito</Card.Title>
              <Card.Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, 
              delectus! Fuga veritatis fugiat laborum quam possimus ullam vero 
              quia unde repellat iste earum, molestiae quos accusamus ea delectus cumque incidunt.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Card.Link style={{textDecoration:"none"}} href="https://ferjade.github.io/Portfolio/">
              <small className="text-muted">E-Portfolio</small>
            </Card.Link>
            </Card.Footer>
          </Card>
          <Card style={{width: '18rem'}}>
            <Card.Img variant="top"
            src="https://leojomar01.github.io/MiniProject-2/static/media/f.d9661feb653daf3e0c6d.jpg" />
            <Card.Body>
              <Card.Title>Elaine Miculob</Card.Title>
              <Card.Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, 
              delectus! Fuga veritatis fugiat laborum quam possimus ullam vero 
              quia unde repellat iste earum, molestiae quos accusamus ea delectus cumque incidunt.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Card.Link style={{textDecoration:"none"}} href="#">
              <small className="text-muted">E-Portfolio</small>
            </Card.Link>
            </Card.Footer>
          </Card>
          <Card style={{width: '18rem'}}>
            <Card.Img variant="top"
            src="https://leojomar01.github.io/MiniProject-2/static/media/m.fd93dc294ed349c282b6.png" />
            <Card.Body>
              <Card.Title>Dave Pua</Card.Title>
              <Card.Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, 
              delectus! Fuga veritatis fugiat laborum quam possimus ullam vero 
              quia unde repellat iste earum, molestiae quos accusamus ea delectus cumque incidunt.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
            <Card.Link style={{textDecoration:"none"}} href="https://evade-22.github.io/portfolio-dave-pua/">
              <small className="text-muted">E-Portfolio</small>
            </Card.Link>
            </Card.Footer>
          </Card>
        </CardGroup>
        </Container>
      );
}

