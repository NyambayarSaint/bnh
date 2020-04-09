import React, { Component } from 'react';
import Service from '../Components/Service';
import Swiper from 'react-id-swiper';
import axios from 'axios';
import {withRouter, NavLink} from 'react-router-dom'
import Markdown from 'react-markdown'

class ServicesContainer extends Component {

    state = {
        sliders: []
    }

    componentWillMount() {
        axios.get('http://66.181.166.84:1338/services').then((res) => {
            this.setState({ sliders: res.data });
        })
    }

    render() {
        if (this.state.sliders.length) {
            return (
                <div id="Swiper">
                    <Swiper {...params}>
                        {this.state.sliders.map((el, i) => {
                            return (
                                <div key={i} className="ServiceCon" style={{ backgroundImage: `url(http://66.181.166.84:1338${el.Background.url})` }}>
                                    <NavLink to={`/branchs?Slug=${el.Slug}`}>
                                        <div className="effect">
                                            <div className="container">
                                                <div className="line"></div>
                                                <h2>{el.Name}</h2>
                                                <div className="content"><Markdown source={el.Description}/></div>
                                                <button>Дэлгэрэнгүй</button>
                                                <div className="line"></div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            )
                        })}
                    </Swiper>
                </div>
            );
        }
        return (
            <div id="Swiper">
                <div style={{ backgroundImage: `url(${require('../img/spinner.gif')})` }}>
                    <img style={this.props.sliderHeight || {}} src={`${require('../img/empty.png')}`} />
                </div>
            </div>
        )
    }
}

export default withRouter(ServicesContainer)

const params = {
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
}