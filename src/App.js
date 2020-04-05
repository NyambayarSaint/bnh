import React from "react";
import "./Style/style.css";
import HeaderContainer from "./Containers/HeaderContainer";
import { BrowserRouter, Route } from "react-router-dom";
import HomeContainer from "./Containers/HomeContainer";
import FormContainer from "./Containers/FormContainer";
import { CSSTransition } from "react-transition-group";
import BackDiscount from './Components/BackDiscount'
import BackContact from "./Components/BackContact";
import axios from 'axios';
import BackNewsContainer from "./Containers/BackNewsContainer";
import AboutContainer from './Containers/AboutContainer'
import Footer from "./Components/Footer";
import BBHotel from './Components/BBHotel'
import BBKaraoke from './Components/BBKaraoke'
import BBClub from './Components/BBClub'
import BackBranchs from './Components/BackBranchs'
import BackServices from './Components/BackServices'
import BranchContainer from './Containers/BranchContainer';
import ServicesContainer from './Containers/ServicesContainer';

const menu = [
   {
     url: "/form",
     name: "Get Hired!",
     Component: FormContainer
  },
   {
     url: "/services",
     name: "Services",
     Component: ServicesContainer
  },
    {
      url: '/discount',
      name: 'Discount',
      Component: BackDiscount
    },
    {
      url: '/contact',
      name: 'Contact',
      Component: BackContact
    },
    {
      url: '/news-posts',
      name: 'News',
      Component: BackNewsContainer
    }, 
 
  {
   url: '/about',
   name: 'About',
   Component: AboutContainer
 },
 {
   url: "/",
   name: "Home",
   Component: HomeContainer
    },
 ];

const data = [
  {
    url: "/form",
    name: "Get Hired!",
    Component: FormContainer
 },
  {
    url: "/services",
    name: "Services",
    Component: ServicesContainer
 },
 {
   url: '/branchs',
   name: 'Branch',
   Component: BranchContainer
 },
   {
     url: '/discount',
     name: 'Discount',
     Component: BackDiscount
   },
   {
     url: '/contact',
     name: 'Contact',
     Component: BackContact
   },
   {
     url: '/news-posts',
     name: 'News',
     Component: BackNewsContainer
   }, 

 {
  url: '/about',
  name: 'About',
  Component: AboutContainer
},
{
  url: "/",
  name: "Home",
  Component: HomeContainer
   },
];

axios.get('http://localhost:1337/articles').then((response)=> {
    console.log(response,'heey');
})

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <HeaderContainer data={menu} />
            <div style={{position: 'relative'}}>
               {data.map(({ url, Component }) => {
                  return (
                     <Route key={url} exact path={url}>
                        {({ match }) => (
                           <CSSTransition
                              in={match != null}
                              timeout={300}
                              classNames="page"
                              unmountOnExit
                           >
                                 <Component />
                           </CSSTransition>
                        )}
                     </Route>
                  );
               })}
            </div>
         </div>
          <Footer data={menu} />
      </BrowserRouter>
   );
}

export default App;
