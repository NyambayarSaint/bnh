import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { MdCall, MdLocationOn, MdAccessTime } from "react-icons/md";



class BBKaraoke extends Component {
    render() {
        return (
            <Container className="BBHotel" style={{marginBottom:"150px", marginTop:130}}>

            <Row style={{paddingBottom: 30 }}>
               <Col md={6}>
                   <div className="pad">
                        <h2>Eastwood Center</h2>
                   </div>
                  <p>
                     Eastwood Center is a 46-story glass and steel, 858,000
                     square foot commercial office building for Eastwood, Ltd.
                     The building was built within and above the original
                     six-story Eastwood office building. The 1928 landmark
                     façade was restored and integrated with the tower. The
                     structural frame, standing 598 feet tall, is enclosed with
                     a panelized glass curtain wall system 
                  </p>
                  
                  <p className="tit"><MdCall />Холбоо барих:<p>+976 99801524</p></p>
                  <p className="tit"><MdLocationOn />Байршил:<p>СХД төв талбай</p></p>
                  <p className="tit"><MdAccessTime />Цагийн хуваарь:<p>08:00 - 23:00</p></p>
               </Col>
               <Col md={6}>
                    <img src={require('../img/branch.jpg')} />
               </Col>
            </Row>

            <Row style={{paddingBottom: 30 }}>

                <Col md={6}>
                    <img src={require('../img/branch.jpg')} />
               </Col>

               <Col md={6}>
                   <div className="pad">
                        <h2>Eastwood Center</h2>
                   </div>
                  <p>
                     Eastwood Center is a 46-story glass and steel, 858,000
                     square foot commercial office building for Eastwood, Ltd.
                     The building was built within and above the original
                     six-story Eastwood office building. The 1928 landmark
                     façade was restored and integrated with the tower. The
                     structural frame, standing 598 feet tall, is enclosed with
                     a panelized glass curtain wall system 
                  </p>
                  
                  <p className="tit"><MdCall />Холбоо барих:<p>+976 99801524</p></p>
                  <p className="tit"><MdLocationOn />Байршил:<p>СХД төв талбай</p></p>
                  <p className="tit"><MdAccessTime />Цагийн хуваарь:<p>08:00 - 23:00</p></p>
               </Col>
               
            </Row>
         </Container>
        )
    }
}

export default BBKaraoke
