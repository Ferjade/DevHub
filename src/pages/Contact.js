import React, { useState , useRef, useEffect} from 'react'
import '../assets/contact.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

let list = localStorage.getItem("contactDevHub") ?
JSON.parse(localStorage.getItem("contactDevHub")) :
[];

export default function Contact(){
    let companyNameRef = useRef("");
    let emailRef = useRef("");
    let subjectRef = useRef("");
    let messageRef = useRef("");
    let [id, setId] = useState(Date.now());
    let [contactList, setContactList] = useState(list);

    //Saving data inside table
    let handleSubmit = (event) => {
        event.preventDefault();
        //Get user input
        let info = {
            id: id,
            companyName: companyNameRef.current.value,
            email: emailRef.current.value,
            subjectRef: subjectRef.current.value,
            message: messageRef.current.value
        };
        //Returns only item that matches current ID
        let filter = contactList.filter((item) => {
            return item.id === info.id;
        }); 

        if(filter.length === 0){
            setContactList([...contactList, info]);
        } else {
            contactList.forEach((item, index) => {
                if(item.id === info.id){
                    contactList.splice(index,1,info);
                    setContactList(contactList);
                }
            })
        }
        setId(Date.now())
        companyNameRef.current.value = ""
        emailRef.current.value = ""
        subjectRef.current.value = ""
        messageRef.current.value = ""
    };
    useEffect(() => {
        localStorage.setItem("contactDevHub", JSON.stringify(contactList)) //chores - dependency
    },[contactList])
    
    return (
    <Form onSubmit={handleSubmit}>
        <Container>
        <Row>
            <Col></Col>
            <Col className='formLayout' xs={6}>
            <h2>Reach us here!</h2>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Company Name:</Form.Label>
                    <Form.Control tabIndex={1} id="companyName" type="text" name="companyName" 
                    ref={companyNameRef} placeholder="Enter company name" required/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control tabIndex={2} id="email" type="email" name="email" 
                    ref={emailRef} placeholder="Enter company email" required/>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Subject:</Form.Label>
              <Form.Control tabIndex={3} id="subject" type="text" name="subject" 
              ref={subjectRef} placeholder="Enter subject" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Message Inquiry:</Form.Label>
              <Form.Control tabIndex={4} id="message" as="textarea" rows={5} name="message" 
              ref={messageRef} placeholder="Enter message inquiry" required/>
            </Form.Group>

            <div className='d-grid gap-2'>
              <Button variant="primary" type="submit"> Submit </Button>
            </div>
            </Col>
            <Col></Col>
        </Row>
        </Container>  
    </Form>
    )
}
