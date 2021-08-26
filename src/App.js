import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'
import Product from './Components/Product';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/:id" children={<Product />} />
      </Switch>
      <div class="container">
        <div style={{position: "absolute", bottom:"0px"}}>
          <p>The current time is {currentTime}.</p>
        </div>
      </div>
    </Router>
  );
}

export default App;
