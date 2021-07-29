import React, { useState } from 'react'

const Contact = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email, password
        }
        alert(JSON.stringify(data))
    }
    return (
        <form class="row g-3" onSubmit={handleSubmit}>
            <div className="col">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmail}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
                <div className="col">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onChange={handlePassword}/>
            </div>
                {/* <div className="col form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={handleCheck}/>
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                
            </div> */}
            <button type="submit" className="btn btn-primary col">Submit</button>
        </form>
    )
}

export default Contact
