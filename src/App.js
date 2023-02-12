import './App.css';
import Swiper from 'swiper';
// import 'swiper/swiper-bundle.css';
import 'swiper/css';
import Home from './pages/home';
import Blog from './pages/blog';
import Blog_single from './pages/blog-single';

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './layout/header';


function App() {

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/blog_single">
            <Blog_single />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
