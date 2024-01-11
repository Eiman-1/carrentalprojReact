import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter as Router,Route,Routes as Switch } from "react-router-dom";
import Home from './Components/Home';
import cars from './Components/cars';

function App() {
  return (<Router>    <div className="App">
  <Navbar></Navbar>
  </div>      <Switch>
              <Route exact path='/' element={<Home/>}/>
              <Route exact path='/' element={<cars/>}/>

            </Switch>
           </Router>

  );
}


export default App;
