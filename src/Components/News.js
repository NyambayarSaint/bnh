import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import axios from 'axios'

class News extends Component {

    state = {
        news: []
    }

    componentWillMount() {
        axios.get('http://66.181.166.84:1338/news-posts').then((res) => {
            this.setState({ news: res.data })
        })
    }


    render() {
        return (
            <Container className="news" style={{ marginTop: 150, marginBottom: 70 }}>
                <Row style={{ paddingBottom: '40px' }}>
                    <Col md={7}>
                        <div >
                            <h2>Мэдээ мэдээлэл</h2>
                        </div>
                        <div className="haha">
                            {this.state.news.map((el, i) => {
                                return <Row key={i} className="parent">
                                    <Col md={4} sm={4} xs={4}>
                                        <div className="image">
                                            <img src={(`http://66.181.166.84:1338${el.Image.url}`)} />
                                        </div>
                                    </Col>
                                    <Col md={8} sm={8} xs={8}>
                                        <div style={{ padding: '5px 0px' }}>
                                            <NavLink to={`/news-posts?Slug=${el.Slug}`}>
                                                <h4  >{el.Title}</h4>
                                            </NavLink>
                                            <p>{el.Content}</p>
                                            <p className="date">{new Date(el.createdAt).toISOString()}</p>
                                        </div>
                                    </Col>

                                </Row>
                            })}
                        </div>
                    </Col>
                    <Col md={5}>
                        <div style={{ paddingBottom: '30px' }}>
                            <h2>Байршил</h2>
                            <div style={{ width: '100%' }}><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d334.2416368929115!2d106.88321!3d47.918332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9e46e156ffeafa23!2sAmure%20Hotel%20Ulaanbaatar!5e0!3m2!1sen!2sus!4v1585372015456!5m2!1sen!2susz=1" width="100%" height="400" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe></div><br />

                        </div>
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default News
