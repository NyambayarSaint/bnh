import React, { Component } from 'react';
import BackBranchs from '../Components/BackBranchs';
import BackServices from '../Components/BackServices';
import Slider from '../Components/Slider'
import axios from 'axios'
import { IoIosMan } from 'react-icons/io'
import {FaQuoteRight, FaQuoteLeft} from 'react-icons/fa'

export default class Service extends Component {

    state = {
        sliders: []
    }

    componentWillMount() {
        axios.get('http://66.181.166.84:1338/home-sliders').then((Response) => {
            this.setState({ sliders: Response.data })
        });
    }

  render() {
    return (
        <div id="BranchContainer">
        <div className="background empty" style={{ backgroundImage: `url(https://www.ahstatic.com/photos/1765_ho_00_p_1024x768.jpg)` }}>
            <div className="effect" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                <div>
                    <h2 style={{opacity:0}}>Зочид буудал</h2>
                </div>
            </div>
        </div>
        <div className="background" style={{ backgroundImage: `` }}>
            <div className="effect container" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
                <div>
                    <h2>Зочид буудал</h2>
                    <p><FaQuoteLeft/> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). <FaQuoteRight/></p>
                </div>
            </div>
        </div>
        <div className="line"></div>
        <div className="branch container-fluid">
            <div className="row white">
                <div className="col-md-6" style={{ padding: 0 }}>
                    <Slider sliders={this.state.sliders} />
                </div>
                <div className="col-md-6 back" style={{ padding: 0, backgroundImage:`url(https://www.kuapay.com/wp-content/uploads/2019/03/baglioni-hotel-london.jpg)` }}>
                    <div className="overflow">
                        <div className="content justify-content-center align-items-center d-flex flex-column">
                            <h2>Амур зочид буудал</h2>
                            <div className="feature-con">
                                <div className="feature">
                                    <div><IoIosMan /></div>
                                    <p>200 хүний хүчин чадалтай</p>
                                </div>
                                <div className="feature">
                                    <div><IoIosMan /></div>
                                    <p>200 хүний хүчин чадалтай</p>
                                </div>
                                <div className="feature">
                                    <div><IoIosMan /></div>
                                    <p>200 хүний хүчин чадалтай</p>
                                </div>
                                <div className="feature">
                                    <div><IoIosMan /></div>
                                    <p>200 хүний хүчин чадалтай</p>
                                </div>
                                <div className="feature">
                                    <div><IoIosMan /></div>
                                    <p>200 хүний хүчин чадалтай</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row white">
                <div className="line"></div>
                <div className="col-md-6 back" style={{ padding: 0, backgroundImage:`url(https://www.kuapay.com/wp-content/uploads/2019/03/baglioni-hotel-london.jpg)` }}>
                    <div className="overflow">
                        <div className="content justify-content-center align-items-center d-flex flex-column">
                            <h2>Амур зочид буудал</h2>
                            <div className="feature-con">
                                <div className="feature">
                                    <div><IoIosMan /></div>
                                    <p>200 хүний хүчин чадалтай</p>
                                </div>
                                <div className="feature">
                                    <div><IoIosMan /></div>
                                    <p>200 хүний хүчин чадалтай</p>
                                </div>
                                <div className="feature">
                                    <div><IoIosMan /></div>
                                    <p>200 хүний хүчин чадалтай</p>
                                </div>
                                <div className="feature">
                                    <div><IoIosMan /></div>
                                    <p>200 хүний хүчин чадалтай</p>
                                </div>
                                <div className="feature">
                                    <div><IoIosMan /></div>
                                    <p>200 хүний хүчин чадалтай</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6" style={{ padding: 0 }}>
                    <Slider sliders={this.state.sliders} />
                </div>
                <div className="line"></div>
            </div>
        </div>
        {/* <BackServices/> */}
        {/* <BackBranchs/> */}
    </div>
    );
  }
}
