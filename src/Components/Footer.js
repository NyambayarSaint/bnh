import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdCall, MdLocationOn, MdAccessTime } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import axios from 'axios';

class Footer extends Component {

   state = {
      contact: [],
      branchs: []
   }

   componentDidMount() {
      axios('http://66.181.166.84:1338/contact-info').then((Response) => {
         // console.log(Response, 'contact irlee')
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

                  <Col md={3} sm={12}>
                     <h5 className="we">Бидэнтэй холбогдох</h5>
                     <p className="we">{this.state.contact.Location}</p>
                     <p className="we">{this.state.contact.Phone}</p>
                     <p className="we">{this.state.contact.Timetable}</p>
                     <div className="svg">
                        <MdLocationOn />
                        <MdCall />
                        <FaFacebookF onClick={this.clickHandler} />
                     </div>
                  </Col>

                  <Col md={3} sm={12} className="branchs">
                     <h5>Branchs</h5>
                     {this.state.branchs.map((el, i) => {
                        return (
                           <p key={i}>{el.Title}</p>
                        )
                     })}
                  </Col>
                  <Col md={3} sm={12} className="menu2">
                     <h5>Menu</h5>
                     {this.props.data ? this.props.data.map((el, i) => {
                        return (
                           <NavLink key={i} to={el.url}>
                              <p>{el.name}</p>
                           </NavLink>
                        )
                     }) : null}

                  </Col>
                  <Col md={3} sm={12} style={{ textAlign: "center" }}>
                     <div className="Flogo">
                        <img src={require("../img/logo.png")} />
                     </div>

                     <p
                        style={{
                           width: "80%",
                           paddingBottom: "20px",
                           paddingTop: 60
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
