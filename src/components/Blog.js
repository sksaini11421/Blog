import React, {useState,useEffect} from 'react'
import {
    Link
  } from "react-router-dom";
import moment from 'moment'

const Blog = (props) => {
    const [minutes, setMin] = useState(0);
    const [str, setStr] =useState("");
    const [any, setAny] = useState("");
    const getWords = () =>{
        setMin(Math.ceil(props && props.data.content && props.data.content.split(' ').length/12))
        setStr(props.data.content);
        setAny(props.data.author)
    }   
    useEffect(() => {
        getWords()
    }, [])
    const setAuthor = () =>{
        if(any == null){
            return setAny('N/A')
        }
        else{
            return any
        }   
    }
    return (
        <div className="col-12 col-sm-6 pt-3">
            <div className="card1 p-3 text-white">
                <figure className="right_side__img">
                    <img src={props.data.urlToImage}
                        className="img img-fluid w-100" alt="artwork" />
                </figure>
                <h3 className="text-uppercase  category para_content">{props.data.source.name}</h3>
                <div className="">
                    <h3 className="pt-2 title_title">{props.data.title}</h3>
                    <p className="pt-3 para_content">{str && str.replace(str.substr(str.lastIndexOf("["),str.length),"")}
                        <Link to="/blogmore">Readmore</Link>    
                    </p>
                </div> 
                <div className="author_details d-flex align-items-center mt-3">
                    <img src="https://render.fineartamerica.com/images/rendered/default/poster/10/8/break/images/artworkimages/medium/2/female-manager-using-laptop-and-speaking-on-smartphone-in-train-cavan-images.jpg" className="rounded-circle img-logo mb-0" alt="author_image" />
                    <div className="author_name_block">
                        <h3 className="text-uppercase author_name">
                            {setAuthor()}
                        </h3>
                        <h5 className="para_content">
                            {moment(props.data.publishedAt).format('DD/MM/YYYY')}
                            <span className="separator"> &#8226; </span>
                            {minutes} min read
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blog