import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import OrderPage from "./components/siparisformu/OrderPage";
import Home from "./components/homepage/Home";
import Success from "./components/Success";
import Footer from "./components/homepage/Footer";

function App() {
  return (
    <>
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
      <Footer />
    </>
  );
}

export default App;
