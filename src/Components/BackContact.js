import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { MdCall, MdLocationOn, MdAccessTime, MdEmail } from "react-icons/md";
import { FaFacebook } from 'react-icons/fa'
import axios from 'axios'




class BackContact extends Component {

    state ={
        contact: []
    }

    componentDidMount() {
        axios('http://66.181.166.84:1338/contact-info').then((Response) => {
            this.setState({
                contact: Response.data
            })
        })
    }



    render() {
        return (
            <React.Fragment>
                <div style={{ width: '100%' }}><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d334.2416368929115!2d106.88321!3d47.918332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e46e156ffeafa23!2sAmure%20Hotel%20Ulaanbaatar!5e0!3m2!1sen!2sus!4v1585372015456!5m2!1sen!2susz=1" width="100%" height="400" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div><br />
                <Container className="contact" style={{marginBottom:"150px", marginTop:130}}>
                    <Row>
                        <Col>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} className="cont">
                            <h2>Бидэнтэй холбоо барих</h2>
                            <ul>
                                <li>
                                    <div className="icon">
                                        <MdCall />
                                    </div>
                                    <h5>Оффисийн дугааp</h5>
                                          <p>{this.state.contact.Phone}</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <MdLocationOn />
                                    </div>
                                    <h5>Цагийн хуваарь</h5>
                                    <p>{this.state.contact.Timetable}</p>
                                </li>
                                <li>
                                    <div className="icon">
                                        <MdAccessTime />
                                    </div>
                                    <h5>Байршил</h5>
                                    <p>{this.state.contact.Location}</p>
                                </li>
                            </ul>

                        </Col>
                        <Col md={1}></Col>
                        <Col md={5} className="rightside">
                            <h2>Санал хүсэлт</h2>
                            <p>Танд ямар нэгэн санал хүсэлт байвал доорх санал хүсэлтийн хайрцгаар илгээнэ үү.</p>
                            <Form className="box">
                                <div className="before user"><Form.Control type="text" placeholder="Нэр" className="el" /></div>
                                <div className="before email"><Form.Control type="email" placeholder="E-mail хаяг" className="el" /></div>
                                <div className="before desc"><Form.Control as="textarea" rows="3" placeholder="Санал хүсэлтээ энд бичнэ үү..." className="el" /></div>
                                <Button variant="info">Илгээх</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>

        )
    }
}

export default BackContact
