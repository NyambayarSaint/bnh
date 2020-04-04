import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {NavLink } from 'react-router-dom'

class Services extends Component {
    render() {
        return (
            <Container className="Services" style={{marginTop: '150px', marginBottom: '100px'}}>
                <Row className="title">
                    <Col>
                    <h2>Our Services</h2>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} sm={12} xs={12} style={{paddingBottom:30}}>
                        <div className="rel">
                        <img src={require('../img/m1.jpg')} />
                        <div className="abs">
                             <h4>Hotel</h4>
                             <p>Тав тухтай орчин</p>
                        </div>
                        </div>
                    </Col>
                    <Col md={4} sm={12} xs={12} style={{paddingBottom:30}}>
                        <div className="rel">
                        <img src={require('../img/m2.jpg')} />
                        <div className="abs">
                             <h4>Karaoke</h4>
                             <p>Шинэлэг мэдрэмж</p>
                        </div>
                        </div>
                    </Col>
                    <Col md={4} sm={12} xs={12}>
                        <div className="rel">
                        <img src={require('../img/m3.jpg')} />
                        <div className="abs">
                             <h4>Club</h4>
                             <p>Найрсаг хамт олон</p>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Services
