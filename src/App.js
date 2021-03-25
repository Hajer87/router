
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-ui-kit/css/mdb.min.css';
import { Route, Switch } from "react-router";
import Home from "./Components/Home";

import DescriptionPage from './Components/DescriptionPage'


function App() {
  return(
    <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/movie/:Id' component={DescriptionPage}/>
      
  </Switch>
  );
}

export default App;
