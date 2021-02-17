import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//? COMPONENTS
import Pages from './components/Services/Pages/Pages';
import Messages from './components/AlertMessages/Messages';
import Cosmetic from './components/Services/Cosmetic/Cosmetic';
import COVID from './components/COVID/Message';
import { Navigation } from './components';
import { Home, About, Contact } from './pages';

//import Header from './components/Header/Header';
//import Footer from './components/Footer/Footer';
//? STYLES

import './scss/style.scss';

function App() {
  return (
    <>
      <Messages
        variant='WHO I AM'
        children=' 

        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.






 '
      />

      <Router>
        <Navigation />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/pages' component={Pages} />
          <Route path='/cosmetic' component={Cosmetic} />
          <Route path='/covid' component={COVID} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
