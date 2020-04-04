import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdCall, MdLocationOn, MdAccessTime } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";

class Footer extends Component {
   constructor(props) {
      super(props);

      this.state = {};
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
                     <p className="we"> 4578 Marmora Road, Glasgow D04 89GR</p>
                     <p className="we"> +975 99503855</p>
                     <p className="we">Amure Karaoke</p>
                     <div className="svg">
                     <MdLocationOn />
                     <MdCall />
                     <FaFacebookF onClick={this.clickHandler} />
                     </div>
                  </Col>
                  
                  <Col md={3} sm={12} className="branchs">
                     <h5>Branchs</h5>
                     <p>Amure karake</p>
                     <p>Amure karake</p>
                     <p>Amure karake</p>
                     <p>Amure karake</p>
                     <p>Amure karake</p>
                  </Col>
                  <Col md={3} sm={12} className="menu2">
                     <h5>Menu</h5>
                     <p>Home</p>
                     <p>Discount</p>
                     <p>Contact</p>
                     <p>News</p>
                     <p>Services</p>
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
                        © 2020 Style Factory. All rights reserved. Powered by
                        Design
                     </p>
                  </Col>

                  
                  
               </Row>
            </Container>
         </div>
      );
   }
}

export default Footer;
