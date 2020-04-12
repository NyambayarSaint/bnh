import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

class Services extends Component {

    state = {
        services: []
    }

    componentWillMount() {
        axios.get('http://66.181.166.84:1338/services').then((res) => {
            this.setState({ services: res.data });
        })
    }

    render() {
        return (
            <Container className="Services" style={{ marginTop: '150px', marginBottom: '100px' }}>
                <Row className="title">
                    <Col>
                        <h2>Үйлчилгээ</h2>
                    </Col>
                </Row>
                <Row>
                    {this.state.services.map((el, i) => {
                        return (
                            <Col key={i} md={4} sm={12} xs={12} style={{ paddingBottom: 30 }}>
                                <div className="rel">
                                    <NavLink to={`/branchs?Slug=${el.Slug}`}>
                                        <img src={`http://66.181.166.84:1338${el.Background.url}`} />
                                        <div className="abs">
                                            <h4>{el.Name}</h4>
                                        </div>
                                    </NavLink>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default Services
