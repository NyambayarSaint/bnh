import React, { Component } from "react";
import { Container, Row, Col} from "react-bootstrap";
import axios from "axios";
import { NavLink } from 'react-router-dom'

class Branchs extends Component {
   state = {
      branchs: []
   };

   componentDidMount() {
      axios.get("http://66.181.166.84:1337/branches-homes").then((Response) => {
         this.setState({
            branchs: Response.data
         });
      });
   }

   render() {
      return (
         <Container
            className="branch"
            style={{ marginBottom: "150px", marginTop: 150 }}
         >
            <Row style={{ paddingBottom: 40, textAlign: "center" }}>
               <Col>
                  <h2>Branch</h2>
               </Col>
            </Row>
            <Row>
               {this.state.branchs.map(function(element, index) {
                  return (
                     <Col key={index} md={4} sm={6} xs={6}>
                        <div className="branch-child">
                           <div className="im">
                           <img src={`http://66.181.166.84:1337${element.image.url}`}/>
                           </div>
                           <NavLink to="/branchs">
                           <h5>{element.title}</h5>
                           <p>{element.description}</p>
                           </NavLink>
                        </div>
                     </Col>
                  );
               })}
            </Row>
         </Container>
      );
   }
}

export default Branchs;
