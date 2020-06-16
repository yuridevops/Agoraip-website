import React from 'react';
import Header from './components/Header';
import './App.css'
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Info from './pages/Info';
import Plans from './pages/Plans';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route path="/agoraip-website" exact component={Home} />
            <Route path="/agoraip-website/sobre" component={Info} />
            <Route path="/agoraip-website/planos" component={Plans} />
            <Route path="/agoraip-website/planos" component={Plans} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
