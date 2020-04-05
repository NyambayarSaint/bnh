import React, { Component } from 'react'
import { Col } from 'react-bootstrap';
import axios from 'axios'
import { withRouter } from 'react-router-dom'


class NewsContent extends Component {

    state = {
        news: {
            notYet: true
        }
    }

    componentWillMount() {
        axios.get(`http://66.181.166.84:1338/news-posts${this.props.location.search}`).then((res) => {
            this.setState({ news: res.data[0] })
        })
    }

    render() {
        console.log(this.props, 'poroops')
        if (this.state.news.notYet) {
            return (
                <Col md={8}>
                    <div className="image">
                        <img className="this" src={require('../img/spinner.gif')} />
                    </div>
                    <div>
                        <h4>Loading...</h4>
                        <p>...</p>
                        <p className="date">...</p>
                    </div>
                </Col>
            )

        }
        return (
            <Col md={8}>
                <div className="image">
                    <img className="this" src={`http://66.181.166.84:1338${this.state.news.Image.url}`} />
                </div>
                <div>
                    <h4>{this.state.news.Title}</h4>
                    <p>{this.state.news.Content}</p>
                    <p className="date">{new Date(this.state.news.createdAt).toISOString()}</p>
                </div>
            </Col>
        )
    }
}

export default withRouter(NewsContent)
