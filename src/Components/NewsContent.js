import React, { Component } from 'react'
import {Col} from 'react-bootstrap';
import axios from 'axios'


class NewsContent extends Component {


    render() {
        return (
            <Col md={8}>
                <div className="image">
                <img className="this" src={require('../img/inf.jpg')}/>
                </div>
                <div>
                 <h4>It is a long established fact that a reader will be distracted</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. as opposed to using 'Content here as opposed to using 'Content here</p>
                    <p className="date">2019.05.12</p>
                </div>
            </Col>
        )
    }
}

export default NewsContent
