import { BrowserRouter as Router, Route } from "react-router-dom";
import Splash from "./containers/Splash";
import SignUp from "./containers/SignUp";
import SignIn from "./containers/SignIn";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" render={() => <Splash />} />
        <Route exact path="/sign-up" render={() => <SignUp />} />
        <Route exact path="/sign-in" render={() => <SignIn />} />
      </>
    </Router>
  );
}

export default App;
