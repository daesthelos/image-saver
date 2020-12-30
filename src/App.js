import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Upload from './components/Upload';
import Header from './components/Header';
import Home from './components/Home'



function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/upload" component={Upload} />
      </Switch>
    </>
  );
}

export default App;
