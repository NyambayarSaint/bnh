import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdPhoneInTalk, MdLocationOn, MdAccessTime, MdPhoneForwarded } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { TiLocationArrow } from "react-icons/ti";
import { WiTime4 } from "react-icons/wi";
import { NavLink } from 'react-router-dom'
import axios from 'axios';

class Footer extends Component {

   state = {
      contact: [],
      branchs: []
   }

   componentDidMount() {
      axios('http://66.181.166.84:1338/contact-info').then((Response) => {
         this.setState({
            contact: Response.data
         })
      });
      axios.get("http://66.181.166.84:1338/home-branchs").then((Response) => {
         this.setState({
            branchs: Response.data
         });
      });
   }

   clickHandler = (e) => {
      document.location.href = "https://www.facebook.com/amurekaraoke/";
   };

   render() {
      return (
         <div className="footParent">
            <Container>
               <Row className="footer">

                  <Col md={3} sm={12} className="right" style={{ borderRight: "1px solid rgba(255,255,255,0.1)" }}>
                     <h5 className="we">Бидэнтэй холбогдох</h5>
                     <div className="line"></div>

                     <p className="we"><TiLocationArrow className="svgg" />{this.state.contact.Location}</p>
                     <p className="we"><MdPhoneForwarded className="svgg" />{this.state.contact.Phone}</p>
                     <p className="we"><WiTime4 className="svgg" />{this.state.contact.Timetable}</p>

                  </Col>


                  <Col md={3} sm={12} className="branchs">
                     <h5>Манай салбарууд</h5>
                     <div className="line"></div>
                     {this.state.branchs.map((el, i) => {
                        return (
                           <p key={i}>{el.Title}</p>
                        )
                     })}
                  </Col>


                  <Col md={3} sm={12} className="menu2" style={{ borderRight: "1px solid rgba(255,255,255,0.1)", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>
                     <h5>Menu</h5>
                     <div className="line"></div>
                     {this.props.data ? this.props.data.map((el, i) => {
                        return (
                           <NavLink key={i} to={el.url}>
                              <p><IoMdArrowDropright id="arrow" />{el.name}</p>
                           </NavLink>
                        )
                     }) : null}
                  </Col>

                  <Col md={3} sm={12} style={{ textAlign: "center" }}>
                     <div className="Flogo">
                        <img src={require("../img/logo2.png")} />
                     </div>

                     <p className="bnh-text"
                        style={{
                           width: "80%",
                           paddingBottom: "20px",
                           paddingTop: 60
                        }}
                     >
                        © 2020 BRAND NEW HOTELS.
                     </p>
                  </Col>

               </Row>
               <Row style={{ paddingBottom: 30 }}>
                  <div className="lines"></div>
                  <Col md={7}>
                     <div className="icons-conn" >
                        <MdLocationOn className="svg"/>
                        <MdPhoneInTalk className="svg" />
                        <FaFacebook className="svg" onClick={this.clickHandler} />
                     </div>
                  </Col>

                  <Col md={5}>
                     <p className="mobil-p"
                        style={{
                           width: "80%",
                           paddingBottom: "20px",
                           paddingTop: 25,
                           color: 'rgba(255, 255, 255, 0.4)'

                        }}
                     >
                        © 2020 YondoSoft Agency. All rights reserved.
                     </p>
                  </Col>

               </Row>
            </Container>
         </div>
      );
   }
}

export default Footer;
