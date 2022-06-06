import "../css/weather.css"
import WithApi from "./HOC/withApi"
import React, {createRef} from 'react'
const Weather = props => {
    const searchVal=createRef()
    const clickHandler=()=>{
        const url=`https://api.openweathermap.org/data/2.5/weather?q=${searchVal.current.value.trim()}&appid=b53a7d2fd7363ee8abb09a73eefa28b9&units=metric`
        props.clickFetchHandler(url)
        searchVal.current.value=''
    }
    return (
    <div className="text-center  ">

        <div className='box text-muted' style={{"transform":"translateY(22px)"}}>
            
            <div className='wave -one'></div>
            <div className='wave -two'></div>
            <div className='wave -three'></div>
            <div className="weathercon">
                <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`} alt="weather status" className='fa fa-sun-o' style={{ 'color': '#d36326' }}></img>
                <p className="text-primary">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <b>&nbsp;{props.data.name}</b>
                </p>
                <small className="text-muted">
                    Sun Rise: {new Date(props.data.sys.sunrise).toLocaleTimeString()}
                    <br />
                    Sun Set: {new Date(props.data.sys.sunset).toLocaleTimeString()}
                </small>
                </div>
            <div className="info">
                <h2 className="location  text-primary">{props.data["weather"][0].description.toUpperCase()}</h2>
                <p className="date">{new Date().toLocaleString()}</p>
                
                <h1 className="temp">{props.data.main.temp} &deg;</h1>
                
                
            </div>
        </div>
        
        <div className="city-input-box my-2">
            <div className="input-group  my-2">
                <input type="text" className="form-control" placeholder="search your city..." ref={searchVal} />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button" onClick={clickHandler}>Search</button>
                    </div>
            </div>

        </div>
    </div>

)}

const url=`https://api.openweathermap.org/data/2.5/weather?q=faisalabad&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
export default WithApi(Weather,url)