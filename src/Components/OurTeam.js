import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

class OurTeam extends Component {
   state = {
      data: {
          Background:{
              url:''
          },
          Image: {
              url:''
          }
      }
  }

  componentWillMount() {
   axios.get('http://66.181.166.84:1338/home-our-team').then((res) => {
       this.setState({ data: res.data });
   })
}
   render() {
      return (
         <div className="par" style={{backgroundImage: "url(" + `http://66.181.166.84:1338${this.state.data.Background.url}` + ")"}}>
            <div className="child">
         <Container className="overVision" style={{ marginBottom: "100px"}}>
            <Row>
               <Col md={6}>
                  <img
                     src={`http://66.181.166.84:1338${this.state.data.Image.url}`}
                     style={{ width: "100%" }}
                  />
               </Col>
               <Col md={6}>
                  <div className="tex" style={{
                        display: "flex",  
                        justifyContent: "center",
                        flexDirection: "column",
                        height: "100%"}}>
                     <h2>{this.state.data.Title}</h2>
                     <p className="blank">{this.state.data.Description}</p>
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
