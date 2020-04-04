import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import HamburgerMenu from 'react-hamburger-menu';

export class HeaderContainer extends Component {
   constructor(props) {
      super(props);

      this.state = {
         menu: <p></p>,
         open: false
      };
   }

   handleClick() {
      this.setState({
         open: !this.state.open
      });
   }

   componentDidUpdate() {
      console.log(this.state.open, 'state')
   }

   render() {
      return (
         <div style={{ height: 125 }} className="Headerghost">
            <div id="HeaderContainer">
               <Container>
                  <Row>
                     <Col xs={2}>
                        <div className="img-con">
                           <NavLink to="/">
                              <img src={require("../img/logo.png")} />
                           </NavLink>
                        </div>
                     </Col>
                     <Col xs={10} style={{position:'unset'}}>
                        <ul className="menuweb">
                           {this.props.data
                              .map((element, index) => {
                                 return (
                                    <NavLink key={index} to={element.url}>
                                       <div className="hover"></div>{element.name}
                                    </NavLink>
                                 );
                              })
                              .reverse()}
                        </ul>
                        <div className="menumobile">
                           <HamburgerMenu isOpen={this.state.open} menuClicked={this.handleClick.bind(this)} />
                        </div>
                        <div className="menumobilebody" style={this.state.open ? {left:0} : null} onClick={this.handleClick.bind(this)}>
                           {this.props.data
                              .map((element, index) => {
                                 return (
                                    <NavLink key={index} to={element.url}>
                                       {element.name}
                                    </NavLink>
                                 );
                              })}
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div>
         </div>
      );
   }
}

export default HeaderContainer;
