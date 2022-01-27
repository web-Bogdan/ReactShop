
import './styles/App.scss';
import Header from './conponents/Header'
import Shop from "./conponents/Shop";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch, Redirect} from "react-router";
import Cart from "./conponents/Cart";



function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route exact path={"/shop"} component={Shop}></Route>
                <Route path={"/cart"} component={Cart}></Route>
                <Redirect to={"shop"}></Redirect>

            </Switch>
        </BrowserRouter>

    </div>
  );
}

export default App;
