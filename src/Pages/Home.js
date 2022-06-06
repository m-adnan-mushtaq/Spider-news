import React, { useEffect, useState } from 'react'
import '../css/bootstrap.min.css';
import "../css/spinner.css"
import CovidCard from "../Components/CovidCard";
import HeadlinesCard from '../Components/HeadlinesCard';
import CarouselNews from '../Components/CarouselNews';
import Weather from '../Components/Weather';
import Stories from '../Components/Stories';
import NewsRow from '../Components/NewsRow';
import ErrorBoundary from '../Components/ErrorBoundaries/ErrorBoundary';

function Home(props) {
  const [visible, setVisible] = useState(false)
  const [results, setResults] = useState({
    loading: true,
    data: {}
  })
  useEffect(() => {
    // show or hide the top button
    window.addEventListener('scroll', listentoScroll)
    props.updateProgress(15)
    
    // fetch the covid api
    async function fetchCovidData() {
      try {
        const response = await fetch('https://api.covid19api.com/summary#')
        props.updateProgress(40)
        const data = await response.json()
        props.updateProgress(70)
        return data
        
      } catch (error) {
        setResults({
          loading: false,
          data: null,
        })
      }
    }
    fetchCovidData().then(data => {
      const paksitanCases = data["Countries"].filter(elm => elm.Slug === "pakistan")
      // search for pakistan results
      setResults({
        loading: false,
        data,
        paksitanCases
      })
      props.updateProgress(100)
    })
    return (() => {
      window.removeEventListener('scroll', listentoScroll)
    })
  }, [])

  const listentoScroll = () => {
    let heightToHide = 1000
    if (document.body.scrollTop > heightToHide || document.documentElement.scrollTop > heightToHide)
      setVisible(true)
    else setVisible(false)

  }
  return (
    <div>
      {results.loading || !(results.data) ? <div className="loader"></div> :
        <div className="crawler-box py-1 bg-primary text-light m-0">
          <marquee behavior="" direction="">
            {results.data.Countries.map(country => (
              <small key={country["ID"]}>
                <b>Country: {country["Country"]}</b>
                &nbsp;New Confirmed Cases: {country["NewConfirmed"]}
                &nbsp;Total Confirmed Cases: {country["TotalConfirmed"]}
                &nbsp;New Deaths: {country["NewDeaths"]}
                &nbsp;Total Deaths: {country["TotalDeaths"]}
                &nbsp;New Recovered: {country["NewRecovered"]}
                &nbsp;Total Recovered: {country["TotalRecovered"]}&nbsp;&nbsp;
              </small>
            ))}
          </marquee>
        </div>
      }
      <div className="container mt-2 bg-white">
        {results.loading || !(results.paksitanCases) ? <div className="loader"></div> :
          <CovidCard
            updatedTime={new Date(results.paksitanCases[0]["Date"]).toLocaleString()}
            TotalConfirmed={results.paksitanCases[0]["TotalConfirmed"]}
            TotalDeaths={results.paksitanCases[0]["TotalDeaths"]}
            NewDeaths={results.paksitanCases[0]["NewDeaths"]}
            NewRecovered={results.paksitanCases[0]["NewRecovered"]}
          />
        }


        <div className="row g-3 mt-2 ">
          <div className="col-md-9">
            <h2 className='my-2 bg-title left-title'>
              <span className="bg-primary text-light main-title p-1">Top Headlines</span>
            </h2>
            <ErrorBoundary>
              <HeadlinesCard />

            </ErrorBoundary>
          </div>
          <div className="col-md-3">
            <h3 className='bg-title ' style={{ "transform": "translateY(14px)" }}>
              <span className="bg-primary text-light main-title  p-1 ">City Weather</span>

            </h3>
            <ErrorBoundary>
              <Weather />

            </ErrorBoundary>
            <h3 className='bg-title my-3 '>
              <span className="bg-primary text-light main-title  p-1  ">Top Stories</span>
            </h3>
            <ErrorBoundary>
              <Stories />

            </ErrorBoundary>
          </div>

          <h2 className="text-center bg-title">
            <span className="bg-primary main-title text-light p-1 ">Most Popular Articles</span>
          </h2>
          <CarouselNews />
          {/* <ErrorBoundary>

          </ErrorBoundary> */}
        </div>
        <ErrorBoundary>
          <NewsRow />

        </ErrorBoundary>
      </div>
      {visible &&
        <div className="top-button">
          <a href="#home">
            <button>
              <i className="fa fa-angle-up" aria-hidden="true"></i>
            </button>

          </a>
        </div>
      }

    </div>
  );
}
export default Home