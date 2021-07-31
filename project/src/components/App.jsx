import { BrowserRouter, Route, Switch } from "react-router-dom";
import "../../public/style/main.scss";
import { AppRoute } from "../const";
import Main from "./Main";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;