import { BrowserRouter as Router, Route } from "react-router-dom";
import Splash from "./containers/Splash";
import SignUp from "./containers/SignUp";

function App() {
  return (
    <Router>
      <>
        <Route exact path="/" render={() => <Splash />} />
        <Route exact path="/sign-up" render={() => <SignUp />} />
      </>
    </Router>
  );
}

export default App;
