import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import OrderPage from "./components/siparisformu/OrderPage";
import Home from "./components/homepage/Home";
import Success from "./components/Success";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/order">
          <OrderPage />
        </Route>

        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
