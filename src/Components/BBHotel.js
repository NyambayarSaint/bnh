import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdCall, MdLocationOn, MdAccessTime } from "react-icons/md";
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

class BBHotel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

   render() {
      return (

         <Container className="BBHotel" style={{marginBottom:"150px", marginTop:100}}>
               <Col>
                  <h1>Branchs</h1>
               </Col>

            <Row style={{paddingBottom: 150, position: 'relative' }}>
               
               <Col md={12} style={{ position: 'relative' }}>
                  <div>
                         <img src={require('../img/m1.jpg')} />
                  </div>
                  <div className="texts">
                  <div className="pad">
                        <h2>Amure Karaoke</h2>
                   </div>
                  <p>
                     Eastwood Center is a 46-story glass and steel, 858,000
                     square foot commercial office building for Eastwood, Ltd.
                     The building was built within and above the
                  </p>

                  <Row className="Toptit">
                     <Col>
                         <p className="tit"><MdCall /><p>+976 99801524</p></p>
                     </Col>
                     <Col>
                         <p className="tit"><MdLocationOn /><p>СХД төв талбай</p></p>
                     </Col>
                     <Col>
                         <p className="tit"><MdAccessTime /><p>08:00 - 23:00</p></p>
                     </Col>
                  </Row>
                  </div>
               </Col>
            </Row>
            <Row style={{paddingBottom: 150, position: 'relative' }}>
               
               <Col md={12} style={{ position: 'relative' }}>
                  <div>
                         <img src={require('../img/11.jpg')} />
                  </div>
                  <div className="texts">
                  <div className="pad">
                        <h2>Amure Karaoke</h2>
                   </div>
                  <p>
                     Eastwood Center is a 46-story glass and steel, 858,000
                     square foot commercial office building for Eastwood, Ltd.
                     The building was built within and above the
                  </p>

                  <Row className="Toptit">
                     <Col>
                         <p className="tit"><MdCall /><p>+976 99801524</p></p>
                     </Col>
                     <Col>
                         <p className="tit"><MdLocationOn /><p>СХД төв талбай</p></p>
                     </Col>
                     <Col>
                         <p className="tit"><MdAccessTime /><p>08:00 - 23:00</p></p>
                     </Col>
                  </Row>
                  </div>
               </Col>
            </Row>
            <Row style={{paddingBottom: 150, position: 'relative' }}>
               
               <Col md={12} style={{ position: 'relative' }}>
                  <div>
                         <img src={require('../img/22.jpg')} />
                  </div>
                  <div className="texts">
                  <div className="pad">
                        <h2>Amure Karaoke</h2>
                   </div>
                  <p>
                     Eastwood Center is a 46-story glass and steel, 858,000
                     square foot commercial office building for Eastwood, Ltd.
                     The building was built within and above the 
                  </p>

                  <Row className="Toptit">
                     <Col>
                         <p className="tit"><MdCall /><p>+976 99801524</p></p>
                     </Col>
                     <Col>
                         <p className="tit"><MdLocationOn /><p>СХД төв талбай</p></p>
                     </Col>
                     <Col>
                         <p className="tit"><MdAccessTime /><p>08:00 - 23:00</p></p>
                     </Col>
                  </Row>
                  </div>
               </Col>
            </Row>

            
         </Container>
      );
   }
}






export default BBHotel;
