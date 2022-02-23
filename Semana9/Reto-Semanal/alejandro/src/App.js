import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/MainContent/Main';
import Footer from './Components/Footer/Footer';
import SidenavLeft from './Components/SidenavLeft/SidenavLeft';
import SidenavRight from './Components/SidenavRight/SidenavRight';
import "./App.css"
export function App() {
  return (
    <div className='body'>
     <Header/>
      <div className='contentmain'>
       <SidenavLeft/>
       <Main/>
       <SidenavRight/>
     </div>
     <Footer/>
    </div>
  );
}

