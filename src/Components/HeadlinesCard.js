import WithApi from "./HOC/withApi"
import no_img from "../assets/no_image_available.svg"

function renderCards(articles) {
    const newsCards = []
    for (let i = 1; i < articles.length; i++) {
        newsCards.push(
            <div className="col-md-4" key={i}>
                <figure className="snip1216">
                    <div className="new-img-box">
                        <img className="news-img" src={articles[i]["image"]?articles[i]["image"]:no_img} alt={articles[i]["title"]} loading="lazy" />
                    </div>
                    <figcaption>
                        <div className="time-stamp"><span className="day">
                            {new Date(articles[i]["publishedAt"]).getDay()}
                        </span><span className="month">
                                {new Date(articles[i]["publishedAt"]).toLocaleString('en-US', { month: 'short' })}
                            </span></div>
                        <h5 >{articles[i]["title"].length > 45 ? articles[i]["title"].substring(0, 45) + '...' : articles[i]["title"]}</h5>
                        <p>{articles[i]["content"].length > 155 ? articles[i]["content"].substring(0, 155) + '...' : articles[i]["content"]}</p>
                    </figcaption>
                    <footer>
                        <a className="btn btn-outline-primary btn-block w-100 read-btn" href={articles[i]["url"]} target="_blank" rel="noreferrer">Read More</a>
                    </footer>
                </figure>
            </div>
        )
    }
    return newsCards
}
const HeadlinesCard = props => {
    return (
        <div className="row g-2  rm-mt bg-white">
            <div className="col-md-12">
                <div className="first-img-box">
                    <div className="img-box">
                        <img  src={props.data.articles[0]["image"]?props.data.articles[0]["image"]:no_img} alt={props.data.articles[0]["title"]} />
                    </div>
                    <div className="box-content">
                        <h4 className="article-title">
                            {props.data.articles[0]["title"].length>81?props.data.articles[0]["title"].substring(0,81)+'...':props.data.articles[0]["title"]}
                            </h4>
                        <div className="details-content">
                                <p>{props.data.articles[0]["content"]}</p>
                                <div className="w-25 mx-auto"> 
                                <a href={props.data.articles[0]["url"]} className="btn btn-outline-primary text-light" rel="noreferrer">Read More</a>
                                </div>
                                <div>
                                        <i className="fa fa-calendar" aria-hidden="true"></i> &nbsp;
                                        <small className="text-light">{new Date(props.data.articles[0]["publishedAt"]).toLocaleString()}</small>
                                    </div>
                        </div>
                        
                    </div>
                </div>

            </div>

            {renderCards(props.data.articles)}
        </div>

    )
}

const url=`https://gnews.io/api/v4/top-headlines?&token=${process.env.REACT_APP_GNEWS_API_KEY}&country=pk&nullable=none`
export default WithApi(HeadlinesCard,url)