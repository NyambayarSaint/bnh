import React, { Component } from "react";
import { Col, Row } from 'react-bootstrap'
import axios from 'axios'

export class NewsOther extends Component {

   state = {
      news: []
   }

   componentWillMount() {
      axios.get('http://66.181.166.84:1338/news-posts').then((res) => {
         this.setState({ news: res.data })
      })
   }

   render() {
      console.log(this.state.news, 'fkewjjki')
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
               {this.state.news.map((el, i) => {
                  return <div key={i} >
                     <Row className="smNews">
                        <a href={`/news-posts?Slug=${el.Slug}`}>
                           <Col md={8} sm={8} xs={8} style={{ paddingRight: 0 }}>
                              <h4 className="p">
                                 {el.Title}
                              </h4>
                              <p className="date">{new Date(el.createdAt).toISOString()}</p>
                           </Col>
                           <Col md={4} sm={4} xs={4} className="dad">
                              <img src={`http://66.181.166.84:1338${el.Image.url}`} />
                           </Col>
                        </a>
                     </Row>
                  </div>
               })}
            </div>
         </Col>
      );
   }
}

export default NewsOther;
