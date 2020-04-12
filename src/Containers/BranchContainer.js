import React, { Component } from 'react';
import BackBranchs from '../Components/BackBranchs';
import BackServices from '../Components/BackServices';
import Slider from '../Components/Slider'
import axios from 'axios'
import { IoIosMan } from 'react-icons/io'
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa'
import { withRouter } from 'react-router-dom'
import Markdown from 'react-markdown'
import GoogleMapReact from 'google-map-react';
import SimpleMap from '../Components/ReactMap';

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
            this.setState({ data: Response.data[0] })
        });
    }

    render() {
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
                            <p><Markdown source={this.state.data.Description} /></p>
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
                                                <div className="richtext">{el.Description ? <Markdown source={el.Description} /> : null}</div>
                                                <div className="map-con">
                                                    {el.GoogleMap == "" ?
                                                        el.GoogleMap == "" ? <img src={`http://66.181.166.84:1338${el.LocationImage.url}`} /> : <div dangerouslySetInnerHTML={createMarkup(el.GoogleMap)} ></div>
                                                        :
                                                        <iframe width="100%" height="100%" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=47.9181171, 106.88331314996029&amp;q=%D0%90%D0%BC%D1%83%D1%80%20%D0%B7%D0%BE%D1%87%D0%B8%D0%B4%20%D0%B1%D1%83%D1%83%D0%B4%D0%B0%D0%BB+(Manaih)&amp;ie=UTF8&amp;t=&amp;z=17&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/draw-radius-circle-map/">Google Maps Radius</a></iframe>
                                                    }
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
                                            <div className="richtext">{el.Description ? <Markdown source={el.Description} /> : null}</div>
                                            <div className="map-con">
                                                {el.GoogleMap == "" ?
                                                    <img src={`http://66.181.166.84:1338${el.LocationImage.url}`} />
                                                    :
                                                    <div dangerouslySetInnerHTML={createMarkup(el.GoogleMap)} ></div>
                                                }
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

function createMarkup(string) { return { __html: `${string}` }; };