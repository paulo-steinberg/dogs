import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import "../src/styles/app.css";
import { UserStorage } from "./Contexts/UserContext";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
