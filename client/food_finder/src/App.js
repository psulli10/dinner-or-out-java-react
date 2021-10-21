import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Splash from "./containers/Splash";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import InOut from "./containers/InOut";
import In from "./containers/In";
import Out from "./containers/Out";
import InMeal from "./containers/InMeal";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" render={() => <Splash />} />
          <Route path="/sign-up" render={() => <SignUp />} />
          <Route path="/sign-in" render={() => <SignIn />} />
          <Route path="/in-out" render={() => <InOut />} />
          <Route exact path="/in" render={() => <In />} />
          <Route path="/out" render={() => <Out />} />
          <Route path="/in/:meal" render={() => <InMeal />} />
          <Route component={ErrorPage}/>
        </Switch>
      </>
    </Router>
  );
}

export default App;
