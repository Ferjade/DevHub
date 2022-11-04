import React, { useState , useRef, useEffect} from 'react'
import '../assets/contact.css'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import FaxIcon from '@mui/icons-material/Fax';

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
        <div className="container">
        <div className='card'>
            <div className='content'>
                <div className='title'>
                    <h2 className='header'>Reach us Here!</h2>
                    <div className='subText'>We would love to hear from you.</div>
                    <div className='botContent'>
                    <hr/>
                    <div className='tags'>
                        <span className='icon'><AccessTimeIcon/></span> <span className='iconText'>Agents are available 24/7</span>  
                    </div>
                    <div className='tags'>
                        <span className='icon'><MailOutlineIcon/></span> <span className='iconText'>Email: devhub@business.devhub.com</span> 
                    </div>
                    <div className='tags'>
                        <span className='icon'><PhoneIcon/></span> <span className='iconText'>Landline: (02) 415-7000 / (02) 415-7001</span> 
                    </div>
                    <div className='tags'>
                        <span className='icon'><PhoneAndroidIcon/></span> <span className='iconText'>Mobile: +639 77 3332156 </span> 
                    </div>
                    <div className='tags'>
                        <span className='icon'><FaxIcon/></span> <span className='iconText'>Fax: +63 45 3332156 / +63 75 3332156</span> 
                    </div>
                    </div>
                </div>
                <div className='formContainer'>
                <Form onSubmit={handleSubmit}>
                    <Container>
                    <h2>Contact Form</h2>
                    <Row>
                        <Col></Col>
                        <Col className='formLayout' xs={6}>

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
                </div>
            </div>
        </div>
    </div>
    )
}
