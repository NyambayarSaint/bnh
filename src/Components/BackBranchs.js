
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdCall, MdLocationOn, MdAccessTime } from "react-icons/md";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";

class BackBranchs extends Component {
   constructor(props) {
      super(props);

      this.state = {};
   }

   render() {
      return (
         <Container
            className="branchParent"
            style={{ marginBottom: "150px", marginTop: 100 }}
         >
            <Row>
               <Col md={9} sm={7} xs={7} className="news">
                  <h2>"АМУРЕ" КАРАОКЕ</h2>

                  <Row>
                     <Col md={9}>
                        <p>
                           remaining essentially unchanged. It was popularised
                           in the 1960s with the release of Letraset sheets
                           containing Lorem Ipsum passages, and more recently
                           with desktop publishing software like Aldus PageMaker
                           including versions of Lorem Ipsum
                           with desktop publishing software like Aldus PageMaker
                           including versions of Lorem Ipsum
                           with desktop publishing software like Aldus PageMaker
                           including versions of Lorem Ipsum
                        </p>
                     </Col>
                     <Col md={3}>
                        <img src={require("../img/nightclub.jpg")} />
                     </Col>
                     <Col md={12}>
                        <div className="line"></div>
                     </Col>
                  </Row>
                  <Row>
                     <Col md={8}>
                        <div>
                           <h4>Онцлог</h4>
                           <p>
                              remaining essentially unchanged. It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum
                           </p>
                        </div>
                        <div className="first">
                           <h4>Цагийн хуваарь</h4>
                           <ul>
                              <li>
                                 <FaCircle />
                                 ДАВАА: 10:00 - 24:00
                              </li>
                              <li>
                                 <FaCircle />
                                 МЯГМАР: 11:00 - 24:00
                              </li>
                              <li>
                                 <FaCircle />
                                 ЛХАГВА: 11:00 - 24:00
                              </li>
                              <li>
                                 <FaCircle />
                                 ПҮРЭВ: 11:00 - 00:00
                              </li>
                              <li>
                                 <FaCircle />
                                 БААСАН: 11:00 - 04:00
                              </li>
                              <li>
                                 <FaCircle />
                                 БЯМБА: 11:00 - 03:00
                              </li>
                              <li>
                                 <FaCircle />
                                 НЯМ: 11:00 - 03:00
                              </li>
                           </ul>
                        </div>
                     </Col>
                     <Col md={4}>
                        <div className="next">
                           <h4>Үйлчилгээ</h4>
                           <ul>
                              <li>
                                 <FiCheckSquare />
                                 Wifi
                              </li>
                              <li>
                                 <FiCheckSquare />
                                 VIP өрөө
                              </li>
                              <li>
                                 <FiCheckSquare />
                                 Ариун цэврийн өрөө
                              </li>
                              <li>
                                 <FiCheckSquare />
                                 Хувцасны өлгүүр
                              </li>
                              <li>
                                 <FiCheckSquare />
                                 vip roomvip room
                              </li>
                           </ul>
                        </div>
                        <div className="next">
                           <h4>Арга хэмжээ</h4>
                           <ul>
                              <li>
                                 <FiCheckSquare />
                                 Шинэ жилийн баяр
                              </li>
                              <li>
                                 <FiCheckSquare />
                                 Хамт олны ойн баяр
                              </li>
                              <li>
                                 <FiCheckSquare />
                                 Хурим, найр
                              </li>
                              <li>
                                 <FiCheckSquare />
                                 Төрсөн өдөр
                              </li>
                              <li>
                                 <FiCheckSquare />
                                 Ажил хэргийн уулзалт
                              </li>
                           </ul>
                        </div>
                     </Col>
                  </Row>
               </Col>

               <Col md={3} sm={5} xs={5} className="list">
                  <div className="title">
                     <h6>Бүх салбарууд</h6>
                  </div>

                  <div className="ul">
                     <div className="li">
                        <div className="img-con">
                           <img src={require("../img/logo1.png")} />
                        </div>
                        <p>"АМУРЕ" ЗОЧИД БУУДАЛ</p>
                     </div>

                     <div className="li">
                        <div className="img-con">
                           <img src={require("../img/logo1.png")} />
                        </div>
                        <p>"АМУРЕ" КАРАОКЕ</p>
                     </div>
                     <div className="li">
                        <div className="img-con">
                           <img src={require("../img/logo1.png")} />
                        </div>
                        <p>"АМУРЕ" ТАЙЧИХ УРЛАГИЙН КЛУБ</p>
                     </div>

                     <div className="li">
                        <div className="img-con">
                           <img src={require("../img/logo1.png")} />
                        </div>
                        <p>"БЭРС" ЗОЧИД БУУДАЛ</p>
                     </div>
                     <div className="li">
                        <div className="img-con">
                           <img src={require("../img/logo1.png")} />
                        </div>
                        <p>"S13" КАРАОКЕ</p>
                     </div>
                     <div className="li">
                        <div className="img-con">
                           <img src={require("../img/logo1.png")} />
                        </div>
                        <p>"S13" ТАЙЧИХ УРЛАГИЙН БАР</p>
                     </div>
                     <div className="li">
                        <div className="img-con">
                           <img src={require("../img/logo1.png")} />
                        </div>
                        <p>"Q" ЗОЧИД БУУДАЛ</p>
                     </div>
                     <div className="li">
                        <div className="img-con">
                           <img src={require("../img/logo1.png")} />
                        </div>
                        <p>
                           "SQ V.I.P" ЭМЭГТЭЙЧҮҮДЭД ЗОРИУЛСАН ДЭЭД ЗЭРЭГЛЭЛИЙН
                           СТРИПТИЗ БАР
                        </p>
                     </div>

                     <div className="li">
                        <div className="img-con">
                           <img src={require("../img/logo1.png")} />
                        </div>
                        <p>"SQUARE" ДЭЭД ЗЭРЭГЛЭЛИЙН ТАЙЧИХ УРЛАГИЙН КЛУБ</p>
                     </div>
                     <div className="li">
                        <div className="img-con">
                           <img src={require("../img/logo1.png")} />
                        </div>
                        <p>"Secret Garden" ЗОЧИД БУУДАЛ</p>
                     </div>
                  </div>
               </Col>
            </Row>

            {/* <Row style={{paddingBottom: 150, position: 'relative' }}>
               
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
            </Row> */}
         </Container>
      );
   }
}

export default BackBranchs;