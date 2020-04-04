import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap'

class OurTeam extends Component {
   render() {
      return (
         <div className="par" style={{backgroundImage: "url(" + require('../img/team.jpg') + ")"}}>
            <div className="child">
         <Container className="overVision" style={{ marginBottom: "100px"}}>
            <Row>
               <Col md={6}>
                  <img
                     src={require("../img/s1.jpg")}
                     style={{ width: "100%" }}
                  />
               </Col>
               <Col md={6}>
                  <div className="tex" style={{
                        display: "flex",  
                        justifyContent: "center",
                        flexDirection: "column",
                        height: "100%"}}>
                     <h2>Our Team</h2>
                     <p className="blank">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vivamus mollis in ipsum eu pretium. Sed auctor augue at
                        vestibulum euismod Integer feugiat. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Vivamus mollis in
                        ipsum eu pretium. Sed auctor augue at vestibulum euismod
                        Integer feugiat.</p>
                  </div>
               </Col>
            </Row>
         </Container>
         </div>
         </div>
      );
   }
}

export default OurTeam;
