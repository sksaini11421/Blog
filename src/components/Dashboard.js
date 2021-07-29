import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Blog from './Blog'
import Deve from './Deve'
import Category from './Category'

export default function Dashboard(props) {
    const [users, setUsers]= useState([]);
    useEffect(() =>{
        const getAllUsers = async () =>{
            const response = await axios.get(`https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`);        
            setUsers(response.data.articles);
            // getWords(response.data.details);
            // console.log(response.data)
            //setUsers(response.data.articles)
        } 
        getAllUsers();
    },[])
    const anyo = (items, i) => {
       return <Blog key={i} data={items} />   
    }
    console.log( users)
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-8">
                    <div className="row gx-3">
                        {users.length > 0 && users
                        .filter(q => props.search !== '' ? q.title.toLowerCase().includes(props.search.toLowerCase()) : q)
                        .map(anyo)}
                    </div>
                </div>
                <aside className="col-12 col-sm-4 py-3 mb-5">
                    <Deve title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '} />
                    {/* <ContactUs title={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation '}
                    
                     /> */}
                     <Category data1={users} />
                </aside>
            </div>
        </div>
    )
}
