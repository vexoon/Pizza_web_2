import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import OrderPage from "./components/siparisformu/OrderPage";
import Home from "./components/Home";
import Success from "./components/Success";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Switch>
        
        <Route path="/order"><OrderPage /></Route>
        
      </Switch>
      
    </Router>
  );
}

export default App;
