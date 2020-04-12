import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
   FaHandPointDown,
   FaHandPointLeft,
   FaHandPointRight
} from "react-icons/fa";
import axios from "axios";

class BackDiscount extends Component {
   state = {
      // title : '',
      // desc : '',
      // date: '',
      discount: []
   };
   isOdd(num) {
      return num % 2;
   }
   componentDidMount() {
      axios.get("http://66.181.166.84:1338/discounts").then((response) => {
         this.setState({
            // title : response.data.title,
            // desc : response.data.description,
            // date : response.data.date,

            discount: response.data
         });
      });
   }

   render() {
      return (
         
         <Container
            className="discount"
            style={{ marginBottom: "100px", marginTop: 50 }}
         >
            <Row className="Title">
               <Col>
                  <h1>Урамшуулал</h1>
               </Col>
            </Row>

            {this.state.discount.map((el, i) => {
               if (this.isOdd(i) == 0) {
                  return (
                     <div key={i}>
                        <Row id="Resp">
                           <Col 
                              md={6}
                              style={{
                                 backgroundColor: "rgba(10, 61, 98, 0.1)"
                              }}
                           >
                           <div className="arrow"></div>
                              <div
                                 style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    height: "100%",
                                    marginLeft: 30
                                 }}
                              >
                                 <h4>{el.Title}</h4>
                                 <p style={{ marginBottom: "10px" }}>
                                    {el.Description}
                                 </p>
                                 <p className="date">{el.date}</p>
                                 <div class="button_cont" align="center">
                                    <a class="butt" target="_blank" href={`${el.Link?el.Link:'javascript:;'}`}>Дэлгэрэнгүй</a>
                                    <div className="icons"></div>
                                 </div>
                              </div>
                           </Col>
                           <Col id="Pleft" md={6}>
                              <img
                                 src={`http://66.181.166.84:1338${el.Image.url}`}
                              />
                           </Col>
                        </Row>
                     </div>
                  );
               } else {
                  return (
                     <div key={i}>
                        <Row id="Resper">
                           
                           <Col id="Pleft" md={6} style={{paddingRight:0}}>
                              <div id="imge">
                              <img
                                 src={`http://66.181.166.84:1338${el.Image.url}`}
                              />
                              </div>
                              
                           </Col>
                           <Col id="texta"
                              md={6}
                              style={{
                                 backgroundColor: "rgba(10, 61, 98, 0.1)"
                              }}
                           >
                              <div className="arrow"></div>
                              <div 
                                 style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    height: "100%",
                                    marginLeft: 30
                                 }}
                              >
                                 <h4>{el.Title}</h4>
                                 <p style={{ marginBottom: "10px" }}>
                                    {el.Description}
                                 </p>
                                 <p className="date">{el.date}</p>
                                 <div class="button_cont" align="center">
                                    <a class="butt">Дэлгэрэнгүй</a>
                                    <div className="icons"></div>
                                 </div>
                              </div>
                           </Col>
                        </Row>
                     </div>
                  );
               }
            })}

            {/* <Row id="Resp">
                    <Col md={6} style={{backgroundColor:'rgba(0,0,0,0.06)'}}>
                        <div style={{display:'flex', justifyContent:'center', flexDirection:'column', height:'100%',}}>
                            <h4>58 Wurundjeri Way Dablin, 3000</h4>
                              <p style={{marginBottom: '10px'}}>Etiam ultricies gravida metus. Phasellus consectetur, metus sit amet facilisis varius, diam ex tincidunt eros, pulvinar fringilla massa justo eu justo. Suspendisse
                             hendrerit laoreet diam ac accumsan. Sed et ipsum elit. Vestibulum nunc ligula, scelerisque vel tristique et, semper ac lacus.</p>
                             <p className="date">2019.06.04 - 2020.05.12</p>
                             <div class="button_cont" align="center"><a class="butt" href="javascript">Захиалах</a></div>
                            
                         </div>
                    </Col>
                    <Col id="Pleft"  md={6} >
                            <img src={require('../img/33.jpg')} />
                    </Col>
                </Row>


                <Row id="Resp" className="pa" style={{paddingBottom:'80px'}}>
                    <Col id="Pright"  className="bot1" md={6} >
                            <img src={require('../img/44.jpg')} />
                    </Col>
                    <Col className="top1" md={6} style={{backgroundColor:'rgba(0,0,0,0.06)'}}>
                        <div style={{display:'flex', justifyContent:'center', flexDirection:'column', height:'100%',}}>
                            <h4>58 Wurundjeri Way Dablin, 3000</h4>
                              <p style={{marginBottom: '10px'}}>Etiam ultricies gravida metus. Phasellus consectetur, metus sit amet facilisis varius, diam ex tincidunt eros, pulvinar fringilla massa justo eu justo. Suspendisse
                             hendrerit laoreet diam ac accumsan. Sed et ipsum elit. Vestibulum nunc ligula, scelerisque vel tristique et, semper ac lacus.</p>
                             <p className="date">2019.06.04 - 2020.05.12</p>
                             <div class="button_cont" align="center"><a class="butt" href="javascript">Захиалах</a></div>
                            
                         </div>
                    </Col>
                </Row> */}
         </Container>
      );
   }
}

export default BackDiscount;
