import React, { Component } from 'react';
import BackBranchs from '../Components/BackBranchs';
import BackServices from '../Components/BackServices';
import Slider from '../Components/Slider'
import axios from 'axios'
import { IoIosMan } from 'react-icons/io'
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'

class Service extends Component {

    state = {
        sliders: [],
        data: {
            notYet: true
        }
    }

    isOdd(num) {
        return num % 2;
    }

    componentWillMount() {
        axios.get(`http://66.181.166.84:1338/services${this.props.location.search}`).then((Response) => {
            console.log(Response, 'hahaha')
            this.setState({ data: Response.data[0] })
        });
    }

    render() {
        console.log(this.props);
        if (this.state.data.notYet) {
            return <div></div>
        }
        return (
            <div id="BranchContainer">
                <div className="background empty" style={{ backgroundImage: `url(https://www.ahstatic.com/photos/1765_ho_00_p_1024x768.jpg)` }}>
                    <div className="effect" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                        <div>
                            <h2 style={{ opacity: 0 }}>&nbsp;</h2>
                        </div>
                    </div>
                </div>
                <div className="background" style={{ backgroundImage: `` }}>
                    <div className="effect container" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                        <div>
                            <h2>{this.state.data.Name}</h2>
                            <p><FaQuoteLeft /> {this.state.data.Description} <FaQuoteRight /></p>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="branch container-fluid">
                    {this.state.data.branchs.map((el, i) => {
                        if (this.isOdd(i) == 0) {
                            return (
                                <div className={`row ${el.BlackTheme ? 'white' : ''}`}>
                                    <div className="col-md-6" style={{ padding: 0 }}>
                                        <Slider sliderHeight={{ height: '60vh' }} sliders={el.Slide_Images} />
                                    </div>
                                    <div className="col-md-6 back" style={{ padding: 0, backgroundImage: `url(https://www.kuapay.com/wp-content/uploads/2019/03/baglioni-hotel-london.jpg)` }}>
                                        <div className="overflow">
                                            <div className="content justify-content-center align-items-center d-flex flex-column">
                                                <h2>{el.Name}</h2>
                                                <p>{el.Description ? el.Description : null}</p>
                                                <div className="feature-con">
                                                    {el.Features.map((feature, k) => {
                                                        return (
                                                            <div className="feature" key={k}>
                                                                <div><img src={`http://66.181.166.84:1338${feature.Icon_Image.url}`} /></div>
                                                                <p>{feature.Description}</p>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <div className={`row ${el.BlackTheme ? 'white' : ''}`}>
                                <div className="line"></div>
                                <div className="col-md-6 back" style={{ padding: 0, backgroundImage: `url(https://www.kuapay.com/wp-content/uploads/2019/03/baglioni-hotel-london.jpg)` }}>
                                    <div className="overflow">
                                        <div className="content justify-content-center align-items-center d-flex flex-column">
                                            <h2>{el.Name}</h2>
                                            <p>{el.Description ? el.Description : null}</p>
                                            <div className="feature-con">
                                                {el.Features.map((feature, k) => {
                                                    return (
                                                        <div className="feature" key={k}>
                                                            <div><img src={`http://66.181.166.84:1338${feature.Icon_Image.url}`} /></div>
                                                            <p>{feature.Description}</p>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6" style={{ padding: 0 }}>
                                    <Slider sliderHeight={{ height: '60vh' }} sliders={el.Slide_Images} />
                                </div>
                                <div className="line"></div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default withRouter(Service)
