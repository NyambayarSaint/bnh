import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

 class OverVision extends Component {
    render() {
        return (
            <div className="par" style={{backgroundImage: "url(" + require('../img/city.jpg') + ")"}}>
                <div className="child">
            <Container className="overVision" style={{marginBottom: '100px'}}>
                <Row>
                    <Col md={6}>
                        <div style={{display: 'flex',justifyContent: 'center',flexDirection:'column',height:'100%'}}>
                            <h2>Our vision</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis in ipsum eu pretium. Sed auctor augue at vestibulum euismod Integer feugiat. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Vivamus mollis in ipsum eu pretium. Sed auctor augue at vestibulum euismod Integer feugiat.</p>
                        </div>
                        
                    </Col>
                    <Col md={6} id="im">
                        <img  src={require('../img/s3.jpg')} style={{width:'100%'}} />
                    </Col>
                </Row>
            </Container>
            </div>
            </div>
            
        )
    }
}

export default OverVision
