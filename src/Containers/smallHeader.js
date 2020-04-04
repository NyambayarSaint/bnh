import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { MdKeyboardArrowRight,  MdAccessTime, MdEmail } from "react-icons/md";
import {  GoArrowSmallRight} from "react-icons/go";
import { NavLink } from "react-router-dom";
import BBHotel from '../Components/BBHotel'
import BBKaraoke from '../Components/BBKaraoke'
import BBClub from '../Components/BBClub'


export class BBsmallHeader extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name: ''
             
        }
    }

    render() {
        return (
            <React.Fragment>
            <div
               className="photo"
            //    style={{
            //       backgroundImage: "url(" + require("../img/s2.jpg") + ")",
            //       height: 320,
            //       backgroundSize: "cover",
            //       backgroundRepeat: "no-repeat",
            //       backgroundPosition: "center"
            //    }}
            >
               <Col md={12} sm={12} xs={12} style={{background:'black'}}>

                    <p className="box-text" style={{backgroundImage: "url(" + require("../img/textb7.jpg") + ")"}}>
                        Night Club
                    </p>

                   {/* <h1 style={{background:'white',position:'relative'}} >
                       <span style={{position:'relative',backgroundImage: "url(" + require("../img/s2.jpg") + ")", backgroundSize:'cover',float:'left'}}>Hotel</span>
                   </h1> */}
                   </Col>
            </div>
            
            <Container className="smallHeader">
                <Row className="child">
                    <Col>
                        <ul className="menuweb">
                           {this.props.datas.map((element, index) => {
                                 return (
                                    <h1><NavLink key={index} to={element.url}>
                                       <div className="secHover"></div>{element.name}
                                    </NavLink></h1>
                                 );
                              })
                              }
                        </ul>
                    </Col>
                </Row>
            </Container>
         </React.Fragment>
        )
    }
}



export default BBsmallHeader