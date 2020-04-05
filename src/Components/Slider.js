import React, { Component } from 'react';
import Swiper from 'react-id-swiper'

class Slider extends Component {

    render() {
        if (this.props.sliders.length) {
            return (
                <div id="Swiper">
                    <Swiper {...params} >
                        {this.props.sliders.map((el, i) => {
                            return <div key={i}><img style={this.props.sliderHeight || {}} src={`http://66.181.166.84:1338${el.url?el.url:el.Image.url}`} /></div>
                        })}
                    </Swiper>
                </div>
            )
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

const params = {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
}

export default Slider
