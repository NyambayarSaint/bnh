import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';

class About extends Component {

    state = {
        h1: '',
        desc: '',
        histories: []
    }

    componentWillMount() {
        axios.get('http://66.181.166.84:1338/about-history').then((response) => {
            console.log(response, 'response');
            this.setState({
                h1: response.data.Title,
                desc: response.data.Description
            })
        })

        axios.get('http://66.181.166.84:1338/about-timelines').then((response) => {
            console.log(response, 'response');
            this.setState({
                histories: response.data
            })
        })
    }

    render() {
        return (
            <Container fluid id="About-con">
                <Row>
                    <Col md={6}>
                        <div className="leftside">
                            <h1>{this.state.h1}</h1>

                            <div className="line"></div>

                            <p>{this.state.desc}</p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="rightside">

                            {this.state.histories.map((el, i) => {
                                return <div key={i}>
                                    <h5>{el.Title}</h5>
                                    <img src={`http://66.181.166.84:1338${el.Image.url}`} />
                                    <p>{el.Description}</p>
                                </div>
                            })}
                        </div>

                    </Col>
                </Row>
            </Container>

        );
    }
}

export default About;
