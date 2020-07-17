import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from './Search'; // Import a component from another file
import Footer from './Footer';
import './main.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </Router>
);

const Home = ({ match }) => (
  <div>
    <Search />
    <Footer />
  </div>
);

export default App;
