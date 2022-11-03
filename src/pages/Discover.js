import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CardGroup from 'react-bootstrap/CardGroup';
import '../assets/discover.css'

export default function Discover(){
    return (
        <Container className='discContainer'>
        <Row>
            <Col xs={12}>
                <h1>DevHub Talent List</h1>
            </Col>
        </Row>
        {/* First Row Talent */}
        <Row>
            <CardGroup>
                <Card className='cardDesign'>
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
                        <ListGroup.Item>PHP 10,000 per project</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">GitHub</Card.Link>
                        <Card.Link href="#">LinkedIn</Card.Link>
                    </Card.Body>
                </Card>

                <Card className='cardDesign'>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/1181341/pexels-photo-1181341.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Card.Body>
                        <Card.Title>Kelly Morillo</Card.Title>
                        <Card.Text>
                        Graduated at Purdue University Global in BS Cloud Computing
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>MySQL, PHP, and SOAP</ListGroup.Item>
                        <ListGroup.Item>Prefers to work on-site</ListGroup.Item>
                        <ListGroup.Item>PHP 25,000 per project</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">GitHub</Card.Link>
                        <Card.Link href="#">LinkedIn</Card.Link>
                    </Card.Body>
                </Card>
            
                <Card className='cardDesign'>
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
                        <ListGroup.Item>PHP 15,000 per project</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">GitHub</Card.Link>
                        <Card.Link href="#">LinkedIn</Card.Link>
                    </Card.Body>
                </Card>
            
                <Card className='cardDesign'>
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
                        <ListGroup.Item>PHP 30,000 per project</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">GitHub</Card.Link>
                        <Card.Link href="#">LinkedIn</Card.Link>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Row>
        {/* First Row Talent END */}

        <br/>

        {/* Second Row Talent */}
        <Row>
            <CardGroup>
                <Card className='cardDesign'>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Card.Body>
                        <Card.Title>Kristie Christensen</Card.Title>
                        <Card.Text>
                        Finished Facebook Business for Online Course at Acudemy
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Facebook Business Expert</ListGroup.Item>
                        <ListGroup.Item>Can work remotely & on-site</ListGroup.Item>
                        <ListGroup.Item>PHP 9,000 per FB Page</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Facebook</Card.Link>
                        <Card.Link href="#">LinkedIn</Card.Link>
                    </Card.Body>
                </Card>
    
                <Card className='cardDesign'>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/1181259/pexels-photo-1181259.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Card.Body>
                        <Card.Title>Helene Coleman</Card.Title>
                        <Card.Text>
                        Graduated at UCLA in BS Computer Engineering
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>DevOps and Cloud Computing</ListGroup.Item>
                        <ListGroup.Item>Prefers to work remotely</ListGroup.Item>
                        <ListGroup.Item>PHP 30,000 per project</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">GitHub</Card.Link>
                        <Card.Link href="#">LinkedIn</Card.Link>
                    </Card.Body>
                </Card>
            
                <Card className='cardDesign'>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/5702315/pexels-photo-5702315.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Card.Body>
                        <Card.Title>Mitchell Hahn</Card.Title>
                        <Card.Text>
                        Finished DBMS Online Course at Great Learning
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>DBMS related topics</ListGroup.Item>
                        <ListGroup.Item>Prefers to work on-site</ListGroup.Item>
                        <ListGroup.Item>PHP 25,000 per project</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">GitHub</Card.Link>
                        <Card.Link href="#">LinkedIn</Card.Link>
                    </Card.Body>
                </Card>
            
                <Card className='cardDesign'>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/10223587/pexels-photo-10223587.jpeg?auto=compress&cs=tinysrgb&w=600" />
                    <Card.Body>
                        <Card.Title>Eddie Rivera</Card.Title>
                        <Card.Text>
                        Graduated at Cornell University in BS Computer Science
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Vue.js and Angular</ListGroup.Item>
                        <ListGroup.Item>Can work remotely & on-site</ListGroup.Item>
                        <ListGroup.Item>PHP 40,000 per project</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">GitHub</Card.Link>
                        <Card.Link href="#">LinkedIn</Card.Link>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Row>
        {/* Second Row Talent END */}
        </Container>
    );
}