import { BrowserRouter as Router, Route } from "react-router-dom";
import Splash from "./containers/Splash";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";
import InOut from "./containers/InOut";
import In from "./containers/In";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" render={() => <Splash />} />
        <Route exact path="/sign-up" render={() => <SignUp />} />
        <Route exact path="/sign-in" render={() => <SignIn />} />
        <Route exact path="/in-out" render={() => <InOut />} />
        <Route exact path="/in" render={() => <In />} />
      </>
    </Router>
  );
}

export default App;
