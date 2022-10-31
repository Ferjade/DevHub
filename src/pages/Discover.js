import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../assets/discover.css'

export default function Discover(){
    return (
        <Container className='discContainer'>
        <Row>
            <Col xs={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Card.Body>
                        <Card.Title>Hitesh Choudhary</Card.Title>
                        <Card.Text>
                        Graduated at MIT with a degree in BS Computer Science
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Javascript and React JS</ListGroup.Item>
                        <ListGroup.Item>Can work remotely & on-site</ListGroup.Item>
                        <ListGroup.Item>PHP 10,000</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">GitHub</Card.Link>
                        <Card.Link href="#">LinkedIn</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/1181341/pexels-photo-1181341.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Card.Body>
                        <Card.Title>Christian Morillo</Card.Title>
                        <Card.Text>
                        Graduated at Purdue University Global in BS Cloud Computing
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>MySQL, PHP, and SOAP</ListGroup.Item>
                        <ListGroup.Item>Prefers to work on-site</ListGroup.Item>
                        <ListGroup.Item>PHP 25,000</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">GitHub</Card.Link>
                        <Card.Link href="#">LinkedIn</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/1181267/pexels-photo-1181267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Card.Body>
                        <Card.Title>Kara Jensen</Card.Title>
                        <Card.Text>
                        Graduted at Stanford University in BS Computer Engineering.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Python, Java, and C++</ListGroup.Item>
                        <ListGroup.Item>Prefers to only work remotely</ListGroup.Item>
                        <ListGroup.Item>PHP 15,000</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">GitHub</Card.Link>
                        <Card.Link href="#">LinkedIn</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col xs={3}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/6803522/pexels-photo-6803522.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Card.Body>
                        <Card.Title>Pavel Danilyuk</Card.Title>
                        <Card.Text>
                        Graduated at UC Berkley in <br/> BS Data Science
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Machine Learning and Statistics</ListGroup.Item>
                        <ListGroup.Item>Can work remotely & on-site</ListGroup.Item>
                        <ListGroup.Item>PHP 30,000</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">GitHub</Card.Link>
                        <Card.Link href="#">LinkedIn</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
    );
}