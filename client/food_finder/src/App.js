import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Splash from "./containers/Splash";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import InOut from "./containers/InOut";
import In from "./containers/In";
import Out from "./containers/Out";
import InMeal from "./containers/InMeal";
import OutRestaurant from "./containers/OutRestaurant";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Router>
      <>
        <NavBar/>
        <Switch>
          <Route exact path="/" render={() => <Splash />} />
          <Route path="/sign-up" render={() => <SignUp />} />
          <Route path="/sign-in" render={() => <SignIn />} />
          <Route path="/in-out" render={() => <InOut />} />
          <Route exact path="/in" render={() => <In />} />
          <Route exact path="/out" render={() => <Out />} />
          <Route path="/in/:meal" render={() => <InMeal />} />
          <Route path="/out/:restaurant" render={() => <OutRestaurant />} />
          <Route component={ErrorPage}/>
        </Switch>
      </>
    </Router>
  );
}

export default App;
