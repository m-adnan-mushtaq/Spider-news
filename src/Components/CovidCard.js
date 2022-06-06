import icon from "../assets/icon-covid.png"
const CovidCard = props => {
    return (

        <div className="row g-2 justify-content-center px-4">
            <h2 className="text-primary text-center main-title">Pakistan Covid Stats</h2>
            <div className="col-md-3 col-sm-6">
                <div className="card p-2 bg-info text-light covid-card">
                    <div className="card-title d-flex justify-content-between">
                        <p><b>Total Confirmed Cases</b></p>
                        <img className="card-icon" src={icon} alt="Covid icon" />
                    </div>
                    <div className="card-body d-flex justify-content-center align-items-center">
                        <h2>{props.TotalConfirmed}</h2>
                    </div>
                    <div className="float-right">
                        <small className="text-right">Last Updated: {props.updatedTime}</small>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 ">
                <div className="col-md-9"></div>
                <div className="card p-2 bg-success text-light covid-card">
                    <div className="card-title d-flex justify-content-between">
                        <p><b>New Recoverd</b></p>
                        <img className="card-icon" src={icon} alt="Covid icon" />
                    </div>
                    <div className="card-body d-flex justify-content-center align-items-center">
                        <h2 className="">{props.NewRecovered}</h2>
                    </div>
                    <div className="float-right">
                        <small className="text-right">Last Updated: {props.updatedTime}</small>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="card p-2 bg-warning text-light covid-card">
                    <div className="card-title d-flex justify-content-between">
                        <p><b>New Deaths</b></p>
                        <img className="card-icon" src={icon} alt="Covid icon" />
                    </div>
                    <div className="card-body d-flex justify-content-center align-items-center">
                        <h2 className="">{props.NewDeaths}</h2>
                    </div>
                    <div className="float-right">
                        <small className="text-right">Last Updated: {props.updatedTime}</small>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="card p-2 bg-danger text-light covid-card">
                    <div className="card-title d-flex justify-content-between">
                        <p><b>Total Deaths</b></p>
                        <img className="card-icon" src={icon} alt="Covid icon" />
                    </div>
                    <div className="card-body d-flex justify-content-center align-items-center">
                        <h2 className="">{props.TotalDeaths}</h2>
                    </div>
                    <div className="float-right">
                        <small className="text-right">Last Updated: {props.updatedTime}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CovidCard
