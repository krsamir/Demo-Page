import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from "./Component/Account";
import Home from "./Home";
function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/account" component={Account} />
          <Route exact path="/" component={Home} />
          <Route
            path="*"
            component={() => {
              return "404 Not Found!!";
            }}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
