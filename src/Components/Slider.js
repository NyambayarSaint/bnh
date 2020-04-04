import React, { Component } from 'react';
import Swiper from 'react-id-swiper'
import axios from 'axios'

class Slider extends Component {

    state ={
        sliders : []
    }

    componentWillMount() {
        axios.get('http://66.181.166.84:1337/slider-homes').then((Response) => {
            this.setState({sliders: Response.data})
        })
        console.log('before')
    }

    render() {
        console.log('render');
        return (
            <div id="Swiper">
                <Swiper {...params}>
                            {this.state.sliders.map(function(el,i){
                                return <div key={i}><img src={`http://66.181.166.84:1337${el.Image.url}`} /></div>
                            })}
                </Swiper>
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
        delay: 3000
    }
}

export default Slider
