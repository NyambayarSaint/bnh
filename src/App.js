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
import ServicesContainer from './Containers/ServicesContainer';
import BackBranchs from './Components/BackBranchs'
import BackServices from './Components/BackServices'


const data = [
  {
    url: "/form",
    name: "Get Hired!",
    Component: FormContainer
 },
  {
    url: "/service",
    name: "Services",
    Component: BackServices
 },
 {
   url: '/Branchs',
   name: 'Branch',
   Component: BackBranchs
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
     url: '/news',
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



const datas = [
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


// {
//   url: "/about",
//   Name: "About",
//   Component:
// },
// {
//   url: "/services",
//   Name: "Services"
// },
// {
//   url: "/discount",
//   Name: "Discount"
// },
// {
//   url: "/blog",
//   Name: "Blog"
// },
// {
//   url: "/contact",
//   Name: "Contact"
// },





axios.get('http://localhost:1337/articles').then((response)=> {
    console.log(response,'heey');
})

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <HeaderContainer data={data} />
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
                              <div className="page">
                                 <Component />
                              </div>
                           </CSSTransition>
                        )}
                     </Route>
                  );
               })}
            </div>
         </div>
          <Footer />
      </BrowserRouter>
   );
}

export default App;
