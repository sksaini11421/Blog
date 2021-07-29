import React,{useState} from 'react'
import NavBar from './components/NavBar'
import './App.css'
import Blogmore from './components/Blogmore'
import Dashboard from './components/Dashboard'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Category from './components/Category'
import Contact from './components/Contact'

const App = () => {
  const [query ,setAny] = useState();
  const setAbc = (a) =>{
    setAny(a)
  }
console.log(query)
  return (
    <Router>
      <NavBar search={setAbc}/>
      <Switch>
        <Route exact path="/" >
          <Dashboard search={query ?? ''}/>
        </Route>
        <Route path="/blogmore" component={Blogmore} />
        <Route path="/news" component={Blogmore} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>  
  )
}
export default App
