import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/index.js";
import SignIn from "./pages/signIn.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signIn" component={SignIn} exact />
      </Switch>
    </Router>
  );
}

export default App;
