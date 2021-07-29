import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const NavBar = (props) => {
  const [query , setQuery] = useState('');
  // const [searchitem, setSearchitem]= useState("")
  const handleChange = (event) =>{
    setQuery(event.target.value)
  }
   //console.log(query)
  const handleSubmit = (e) =>{
    e.preventDefault()
    setQuery(query)
    props.search(query)
  }
  const handleClear = (event) =>{
    event.preventDefault()
    setQuery("")
    props.search('')
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light text-white">
        <div className="container-fluid">
          <NavLink to="/" className="nav-link">SKS</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link active" aria-current="page" href="#">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/news" className="nav-link" href="#">News</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink to="/services" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Services
                  </NavLink>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Web Apps</a></li>
                    <li><a className="dropdown-item" href="#">Mobile Apps</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Digital Marketing</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link" href="#" tabindex="-1" >Contact Us</NavLink>
                </li>
              </ul>
              {/* <form className="d-flex" onSubmit={handleSubmit}>
                <input className="form-control me-2" type="text" placeholder="Search" size="40" aria-label="Search" onChange={handleChange}/>
                <button className="btn btn-outline-success" type="reset" onClick={handleClear}>Clear</button>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form> */}
              <div className="buttonIn" >
                  <form className="d-flex" onSubmit={handleSubmit}>
                    <input  className="form-control me-2" type="text" id="enter" placeholder="Search News Here"  value={query} onChange={handleChange} autoComplete="off"/>
                    {/* <button className="btn2" type="submit">+</button> */}
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    <button className="btn1" onClick={handleClear}>x</button>
                  </form>
              </div>
            </div>
        </div>
      </nav>
        <header className="main_header">
              <div className=" container-fluid  text-white rounded bg-dark py-5">
                  <h1 className="main_heading text-center">SKS TECHNOSOFT</h1>
                  <p className="main_heading__para text-center">Welcome to TECH WORLD!!</p>
              </div>
              {/* main images */}
              
          {/* header ends here */}

          {/* Two sided DIv start */}
        </header>
  </div>
    )
}

export default NavBar
