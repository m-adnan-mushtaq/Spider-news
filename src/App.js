// import CovidStats from "./Pages/Components/CovidStats";
import React, {useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './css/index.css';

import CategoryNews from "./Components/CategoryNews";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import NoInternet from './Components/NoInternet';
import About from "./Pages/About";
import Home from "./Pages/Home";
import WithPaginationApi from './Components/HOC/withPaginationApi';
import Covid19 from './Components/Covid19';
import QueryResult from './Pages/QueryResult';
const Business=WithPaginationApi(CategoryNews,'business')
const Technology=WithPaginationApi(CategoryNews,'technology')
const Entertainment=WithPaginationApi(CategoryNews,'entertainment')
const Sports=WithPaginationApi(CategoryNews,'sports')
const Politics=WithPaginationApi(CategoryNews,'politics')


function App() {
   const [connection,setConnection]=useState(false)
   const [progress,setProgress]=useState(0)

   // function that updates the progress handler
   const updateProgressHandler=(value)=>{
      setProgress(value)
   }
   useEffect(()=>{
      if (window.navigator.onLine) {

         setConnection(true)
      }
   },[])
  return (
     <div>
       {!(connection)?<NoInternet/>:
      <BrowserRouter>
    <Navbar progress={progress} updateProgress={updateProgressHandler}/>
    <Routes>
      <Route path="/" element={ 
      <Home   updateProgress={updateProgressHandler}/>
      }>
      </Route>
      <Route path="business" element={
         <Business category="Business" updateProgress={updateProgressHandler}/>
      }>
      </Route>
      <Route path="technology" element={
         <Technology category="Technology" updateProgress={updateProgressHandler}/>
      }>
      </Route>
      <Route path="entertainment" element={
         <Entertainment category="Entertainment" updateProgress={updateProgressHandler}/>
      }>
      </Route>
      <Route path="sports" element={
         <Sports category="Sports" updateProgress={updateProgressHandler}/>
      }>
      </Route>
      <Route path="politics" element={
         <Politics category="Politics" updateProgress={updateProgressHandler}/>
      }>
      </Route>
      <Route path="covid19" element={
         <Covid19  updateProgress={updateProgressHandler}/>
      }>
      </Route>
      <Route path="about" element={<About/>} >
      </Route>
      <Route path="/search" element={
      <QueryResult
      updateProgress={updateProgressHandler}
      />
      } >
      </Route>
    </Routes>
   
    <Footer/>
      </BrowserRouter>
   }
    </div>
  );
}

export default App;
