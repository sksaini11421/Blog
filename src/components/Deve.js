import React from 'react'
import '../App.css'

const Deve = (props) => {
    return (
        <div className="card p-3 mb-4 shadow">
            <h1>About US</h1>
            <img src={process.env.PUBLIC_URL + 'images/img2.jpg'} className="rounded-circle my_pic" alt="my_pic" />
            <p className="mb-0">{props.title}</p>
        </div>
    )
}
export default Deve
