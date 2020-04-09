import React, { Component } from 'react'
import axios from 'axios';

import Slider from '../Components/Slider'
import Services from '../Components/Services'
import Branchs from '../Components/Branchs'
import OverVision from '../Components/OverVision'
import OurTeam from '../Components/OurTeam'
import News from '../Components/News'

class HomeContainer extends Component {

    state = {
        sliders: []
    }

    componentWillMount() {
        axios.get('http://66.181.166.84:1338/home-sliders').then((Response) => {
            this.setState({ sliders: Response.data })
        })
    }

    render() {
        return (
            <div id="HomeContainer">
                <Slider sliderHeight={{height: "calc(100vh - 10vw)"}} sliders={this.state.sliders} />
                <Services />
                <OverVision />
                <Branchs/>
                <OurTeam />
                <News />
            </div>
        )
    }
}

export default HomeContainer
