import React from 'react';
import './App.css';

import Breadcrumbs from './Components/BreadCrumbs/Breadcrumbs'
import Dropdowns from './Components/Dropdown/Dropdown'
import Paginations from './Components/Pagination/Pagination'
import Tables from './Components/Table/Table'
// import Header from './Components/Header/Header'
import Tabs from './Components/Tab/Tab'

import {Container  } from 'reactstrap'

const App =() =>  {
  
    return (
      <div className="App">
        {/* <Header /> */}
        <Breadcrumbs item='Users'/>

        <Dropdowns />
        

        
        
        <Container fluid>
        <Tabs />
        </Container>

        <br/>
        <br/>
<Container fluid >
        <Tables />
        </Container>

        <Paginations />
      </div>
    );
  }


export default App;
