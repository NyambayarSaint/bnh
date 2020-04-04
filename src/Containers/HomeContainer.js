import React, { Component } from 'react'
import axios from 'axios';

import Slider from '../Components/Slider'
import Services from '../Components/Services'
import Branchs from '../Components/Branchs'
import OverVision from '../Components/OverVision'
import OurTeam from '../Components/OurTeam'
import News from '../Components/News'
import BBHotel from '../Components/BBHotel'
import BBKaraoke from '../Components/BBKaraoke'
import BBClub from '../Components/BBClub'

let data = []
axios.get('http://66.181.166.84:1337/slider-homes').then((Response) => {
    data = Response.data
})

class HomeContainer extends Component {

    componentWillMount(){
        axios.get('http://66.181.166.84:1337/slider-homes').then((Response) => {
            this.setState({ sliders: Response.data })
        })
    }
    render() {
        return (
            <div id="HomeContainer">
                <Slider sliders={data} />
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
