import React, { Component } from "react";
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'

export class NewsOther extends Component {

   state = {
      LatestNews: []
   }
   






   componentDidMount() {
      axios.get('http://66.181.166.84:1337/company-news').then((Response) => {
         // console.log(Response, 'company news irlee hehe')
         this.setState({
            LatestNews: Response.data
         })
      })
   }
   HandleClick = (e) => {
      console.log('hahahahhaha')
      this.setState({
         // justCllick: e.target.dataset.index
      })

   }


   render() {
      console.log(this.props, 'fkewjjki')
      return (

            



         <Col md={4} >
            <Row>
               <Col>
                  <div>
                     <p className="Stitle">LATEST NEWS</p>
                     <div className="lines"></div>
                  </div>
               </Col>
            </Row>

            <div className="newsScroll">
               {this.state.LatestNews.map((el, i) => {
                  return <div key={i} >
                     <Row className="smNews">
                        <Col md={8} sm={8} xs={8} style={{ paddingRight: 0 }}>
                           <p className="p">
                              {el.title}{" "}
                           </p>
                           <p className="date">{el.date}</p>
                        </Col>
                        <Col md={4} sm={4} xs={4} className="dad">
                           <img src={`http://66.181.166.84:1337${el.image.url}`} />
                        </Col>
                     </Row>
                  </div>
               })}
            </div>
         </Col>
      );
   }
}

export default NewsOther;
