import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";

export class BackServices extends Component {
    render() {
        return (
            
            <Container style={{marginTop: 80}} className="BackService">
                <Col>
                    <h1 style={{paddingBottom:80, textAlign:'center', fontFamily: 'Montserrat'}}>Our Services</h1>
                </Col>
                <Row style={{paddingBottom: 200}}>
                    <Col md={6}  sm={0} xs={0}>
                        <div className="para" style={{backgroundImage: "url(" + require('../img/city.jpg') + ")",}}></div>
                    </Col>

                    <Col md={6} sm={12} xs={12}>
                        <h1 style={{paddingBottom:30, textAlign:'center', fontFamily:'Montserrat'}}>Hotel Services</h1>

                        <Row style={{paddingBottom:15}}>
                            <div className="borders">
                                <Col md={4}  sm={4} xs={4}>
                                    <div className="this">
                                    <img src={require('../img/x1.jpg')} />
                                    </div>
                                </Col>
                                <Col md={8} sm={8} xs={8}>
                                    <div>
                                        <p style={{fontWeight:600}}>With desktop publishing</p>
                                        <p>It is a long established fact that a reader will be at its layout. The point of using Lorem Ipsum is that it has</p>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                        <Row style={{paddingBottom:15}}>
                            <div className="borders">
                                <Col md={4}  sm={4} xs={4}>
                                    <div className="this">
                                    <img src={require('../img/z3.jpg')} />
                                    </div>
                                </Col>
                                <Col md={8} sm={8} xs={8}>
                                    <div>
                                        <p style={{fontWeight:600}}>With desktop publishing</p>
                                        <p>It is a long established fact that a reader will be at its layout. The point of using Lorem Ipsum is that it has</p>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                        <Row style={{paddingBottom:15}}>
                            <div className="borders">
                                <Col md={4}  sm={4} xs={4}>
                                    <div className="this">
                                    <img src={require('../img/x2.jpg')} />
                                    </div>
                                </Col>
                                <Col md={8} sm={8} xs={8}>
                                    <div>
                                        <p style={{fontWeight:600}}>With desktop publishing</p>
                                        <p>It is a long established fact that a reader will be at its layout. The point of using Lorem Ipsum is that it has</p>
                                    </div>
                                </Col>
                            </div>
                        </Row>
                    </Col>
                </Row>



            </Container>
        )
    }
}

export default BackServices
