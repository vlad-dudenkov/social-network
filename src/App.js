import { Route, Switch } from "react-router-dom";
import { HeaderContainer } from "./components/header/HeaderContainer";
import { LoginContainer } from "./components/login/LoginContainer";
import { ProfilePagesContainer } from "./components/profilePages/ProfilePagesContainer";
import "./style/App.scss"

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <div className="App-content">
        <Switch>
          <Route exact path="/" component={ProfilePagesContainer}/>
          <Route path="/Login" component={LoginContainer}/>
        </Switch>
        
      </div>
    </div>
  );
}

export default App;
