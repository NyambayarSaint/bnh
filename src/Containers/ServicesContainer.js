import React, { Component } from "react";
import BBHotel from "../Components/BBHotel";
import { Container, Row, Col } from "react-bootstrap";
import BBKaraoke from "../Components/BBKaraoke";
import BBClub from "../Components/BBClub";
import { Route, Switch } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import SmallHeader from './smallHeader';
import BackContact from '../Components/BackContact'




const datas = [

   {
      url: "/contact",
      name: "Contact",
      Component: BackContact
   },
   {
      url: "/hotel",
      name: "Hotel",
      Component: BBHotel
   },
   {
      url: "/Karaoke",
      name: "Karaoke",
      Component: BBKaraoke
   },
   {
      url: "/Club",
      name: "Club",
      Component: BBClub
   }
];

class ServicesContainer extends Component {
   render() {
      return (
         
          <div>
               <SmallHeader datas={datas}/>
               <div style={{ position: "relative" }}>
                  {datas.map(({ url, Component }) => {
                     return (
                        <Switch>
                           <Route key={url} exact path={url}>
                              {({ match }) => (
                                 <CSSTransition
                                    in={match != null}
                                    timeout={300}
                                    classNames="pages"
                                    unmountOnExit
                                 >
                                    <div className="pages">
                                       <Component />
                                    </div>
                                 </CSSTransition>
                              )}
                           </Route>
                        </Switch>
                     );
                  })}
               </div>
               <BBHotel />
            </div>
      );
   }
}

export default ServicesContainer;
