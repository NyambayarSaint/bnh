import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap'
import NewsOther from "../Components/NewsOther";
import NewsContent from '../Components/NewsContent';

class BackNewsContainer extends Component {
   render() {
      console.log(this.props, "hey");
      return (
         <Container className="inf" style={{marginBottom:"180px", marginTop:80}}>
            <Row className="Title">
               <Col>
                  <h2>News</h2>
                  <div className="line"></div>
               </Col>
            </Row>
            <Row>
                <NewsContent />
               <NewsOther props={this.props} data={data}/>
            </Row>
         </Container>
      );
   }
}

const data = [
   {
      title: "Magna aliqua ut enim ad minim veniam quis nostru",
      text:
         "Ouch much until in ahead until much scallop obliquely expansive experimentally egant then wow extrinsically and ladybug cynic hawk between a guffawed as coaxingly strictly blubbered meant much pending overheard and eagle meanly jeez untiring jeez past well far realistic on mounted a by.",
      date: "2019.05.16",
      img: require("../img/inf.jpg")
   },
   {
      title: "Magna aliqua ut enim ad minim veniam quis nostru",
      text:
         "Ouch much until in ahead until much scallop obliquely expansive experimentally egant then wow extrinsically and ladybug cynic hawk between a guffawed as coaxingly strictly blubbered meant much pending overheard and eagle meanly jeez untiring jeez past well far realistic on mounted a by.",
      date: "2019.05.12",
      img: require("../img/inf.jpg")
   },
   {
      title: "Magna aliqua ut enim ad minim veniam quis nostru",
      text:
         "Ouch much until in ahead until much scallop obliquely expansive experimentally egant then wow extrinsically and ladybug cynic hawk between a guffawed as coaxingly strictly blubbered meant much pending overheard and eagle meanly jeez untiring jeez past well far realistic on mounted a by.",
      date: "2019.05.12",
      img: require("../img/inf.jpg")
   },
   {
      title: "Magna aliqua ut enim ad minim veniam quis nostru",
      text:
         "Ouch much until in ahead until much scallop obliquely expansive experimentally egant then wow extrinsically and ladybug cynic hawk between a guffawed as coaxingly strictly blubbered meant much pending overheard and eagle meanly jeez untiring jeez past well far realistic on mounted a by.",
      date: "2019.05.12",
      img: require("../img/inf.jpg")
   }
];

export default withRouter(BackNewsContainer);
