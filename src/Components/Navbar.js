import logo from "../assets/spider_news_icon.svg"
import  "../css/index.css"
import { createRef} from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default function Navbar(props) {
    const menuElm=createRef()
    const queryInput=createRef()
    const navigate=useNavigate()
    const queryHandler=(event)=>{
        event.preventDefault()
        // if input is blank then
        if (queryInput.current.value==='' || queryInput.current.value<=2) return
        navigate(`/search?q=${queryInput.current.value}`)
        
    }   
    const showNavHandler=()=>{
        menuElm.current.classList.toggle('show-nav')
    }

    return (
        <header id='home'>
            <LoadingBar
                color="#008cba"
                height={3}
                progress={props.progress}
                onLoaderFinished={() => props.updateProgress(0)}
                
            />
            <div className="top-bar">

                <NavLink className="logo" to='/'>
                    
                    <img src={logo} alt="Spider News"/>
                </NavLink>
                <div className="search-box">
                        <form action="/search" method="get">
                            <button className="btn-search"  onClick={queryHandler}><i className="fa fa-search"></i></button>
                            <input type="text" ref={queryInput} name="q" id="q" className="input-search" placeholder="search topic..."/>
                        </form>
                </div>
                <div className="hamburger" onClick={showNavHandler}>

                </div>
            </div>
            <ul className="menu" ref={menuElm}>
                <li><NavLink  to="/">Latest</NavLink></li>
                <li><NavLink to="/business">Business</NavLink></li>
                <li><NavLink to="/technology">Technology</NavLink></li>
                <li><NavLink to="/entertainment">Enterntainment</NavLink></li>
                <li><NavLink to="/sports">Sports</NavLink></li>
                <li><NavLink to="/politics">Politics</NavLink></li>
                <li><NavLink to="/covid19">Covid 19</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </header>
    )
}





