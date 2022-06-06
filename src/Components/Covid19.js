import CovidStats from "./CovidStats"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import WithApi from "./HOC/withApi";

const Covid19 = props => {
    // destruct pakistan data
    const pakistanCases = props.data["Countries"].filter(elm => elm.Slug === "pakistan")
    const options = {
        type: 'loop',
        autoplay: true,
        direction: 'ttb',
        interval: 3000,
        pauseOnHover: true,
        gap: '.5em',
        perPage: 1,
        slideBy: 1,
        perMove: 1,
        speed: 1000,
        pagination: false,
        autoHeight: true,
        height: '32.5rem',
        padding: '1.2rem',
    }
    return (<div className="container my-2">
        <div className="row g-3">
            <div className="col-md-6">
                <CovidStats
                    totalConfirmed={props.data.Global.TotalConfirmed}
                    NewDeaths={props.data.Global.NewDeaths}
                    TotalDeaths={props.data.Global.TotalDeaths}
                    NewRecovered={props.data.Global.NewRecovered}
                    TotalRecovered={props.data.Global.TotalRecovered}

                />
            </div>
            <div className="col-md-6">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="text-primary main-title">World Stats:</h2>
                    <p className="text-primary">
                        <i className="fa fa-globe fa-5x hover-world" aria-hidden="true"></i>

                    </p>
                </div>
                <div className="stats">
                    <table className="table table-striped table-hover table-borderless">
                        <thead>
                            <tr>
                                <th>Total Confirmed:</th>
                                <th>Total Deaths:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.data.Global.TotalConfirmed}</td>
                                <td>{props.data.Global.TotalDeaths}</td>
                            </tr>
                            <tr>
                                <th>New Deaths:</th>
                                <th>Total Recovered:</th>
                            </tr>
                            <tr>
                                <td>{props.data.Global.NewDeaths}</td>
                                <td>{props.data.Global.TotalRecovered}</td>
                            </tr>
                        </tbody>
                        <caption className="text-left">
                            <small >Last Updated {new Date(props.data.Global.Date).toLocaleString()}</small>
                        </caption>
                    </table>

                </div>
            </div>
            <div className="col-md-6">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 className="text-success main-title">Pakistan Stats:</h2>
                    <img src="https://img.icons8.com/emoji/100/000000/pakistan-emoji.png" alt="pakistan flag" />
                </div>
                <div className="stats">
                    <table className="table table-striped table-hover table-borderless">
                        <thead>
                            <tr>
                                <th>Total Confirmed:</th>
                                <th>Total Deaths:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{pakistanCases[0].TotalConfirmed}</td>
                                <td>{pakistanCases[0].TotalDeaths}</td>
                            </tr>
                            <tr>
                                <th>New Deaths:</th>
                                <th>Total Recovered:</th>
                            </tr>
                            <tr>
                                <td>{pakistanCases[0].NewDeaths}</td>
                                <td>{pakistanCases[0].TotalRecovered}</td>
                            </tr>
                        </tbody>
                        <caption className="text-left">
                            <small >Last Updated {new Date(pakistanCases[0].Date).toLocaleString()}</small>
                        </caption>
                    </table>
                </div>
            </div>
            <div className="col-md-6">
                <CovidStats
                    totalConfirmed={pakistanCases[0].TotalConfirmed}
                    NewDeaths={pakistanCases[0].NewDeaths}
                    TotalDeaths={pakistanCases[0].TotalDeaths}
                    NewRecovered={pakistanCases[0].NewRecovered}
                    TotalRecovered={pakistanCases[0].TotalRecovered}

                />
            </div>
        </div>

        <h2 className="text-center main-title bg-title">
            <span className="bg-primary main-title text-light p-1 ">All Countries List</span>
        </h2>

        <Splide
            options={options}

        >
            {
                props.data.Countries.map(country => (
                    <SplideSlide key={country["ID"]}>
                        <h2 className="article-title text-info">{country.Country}</h2>
                        <table className="table text-center table-borderless table-responsive ">
                            <thead>
                                <tr>
                                    <th className="text-primary">Total Confirmed:</th>
                                    <th className="text-danger">Total Deaths:</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <p className="text-primary">
                                            <i className="fa fa-users fa-4x" aria-hidden="true"></i>
                                        </p>
                                        <p className="display-6">
                                            {country.TotalConfirmed}
                                        </p>
                                    </td>
                                    <td>
                                        <p className="text-danger">
                                            <i className="fa fa-medkit fa-4x" aria-hidden="true"></i>
                                        </p>
                                        <p className="display-6">
                                        {country.TotalDeaths}
                                            
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <th className="text-warning">New Deaths:</th>
                                    <th className="text-success">Total Recovered:</th>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-warning">
                                            <i className="fa fa-bed fa-4x" aria-hidden="true"></i>
                                        </p>
                                        <p className="display-6">
                                        {country.NewDeaths}

                                        </p>

                                    </td>
                                    <td>
                                        <p className="text-success">
                                            <i className="fa fa-check-circle fa-4x" aria-hidden="true"></i>
                                        </p>
                                        <p className="display-6">
                                        {country.TotalRecovered}

                                        </p>

                                    </td>
                                </tr>
                            </tbody>
                            <caption className="text-left">
                                <small >Last Updated {new Date(country.Date).toLocaleString()}</small>
                            </caption>
                        </table>
                    </SplideSlide>
                ))
            }

        </Splide>

    </div>)
}
const url = 'https://api.covid19api.com/summary#'
export default WithApi(Covid19, url)