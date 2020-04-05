import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

class OverVision extends Component {
    state = {
        data: {
            Background:{
                url:''
            },
            Image: {
                url:''
            }
        }
    }

    componentWillMount() {
        axios.get('http://66.181.166.84:1338/home-our-vision').then((res) => {
            this.setState({ data: res.data });
        })
    }

    render() {
        return (
            <div className="par" style={{ backgroundImage: "url(" + 'http://66.181.166.84:1338' + this.state.data.Background.url + ")" }}>
                <div className="child">
                    <Container className="overVision" style={{ marginBottom: '100px' }}>
                        <Row>
                            <Col md={6}>
                                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', height: '100%' }}>
                                    <h2>{this.state.data.Title}</h2>
                                    <p>{this.state.data.Description}</p>
                                </div>

                            </Col>
                            <Col md={6} id="im">
                                <img src={`http://66.181.166.84:1338${this.state.data.Image.url}`} style={{ width: '100%' }} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        )
    }
}

export default OverVision
