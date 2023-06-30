import { Albums } from "./components/Albums";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Journey } from "./components/Journey";

export default function App() {
  
  return (
    <>
      <Router>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route path="/albums" component={Albums}/>
        <Route path="/journey" component={Journey}/>
      </Router>
      
      {/* <Home/> */}
    </>
  );
}
