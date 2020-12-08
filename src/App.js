/** @format */
import Home from './components/Home.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from './components/About';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx'


function App() {
  return (
    <>
    <Router>
       <Navbar />

<Route exact path={"/"} component={Home}/>
 <Route exact path={"/about"} component={About} />
 <Footer/>
 </Router>
 </>
  );
}

export default App;
