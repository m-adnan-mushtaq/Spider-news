
import WithApi from "./HOC/withApi"
import backup_img from "../assets/no_image_available.svg"

const Stories=props=>{
    return(
        <div className="story-sidebar">
            {props.data.results.map((story,index)=>(
                <div className="row g-1 align-items-center" key={index}>
                <div className="col-sm-6">
                    <img src={(story.multimedia)?story.multimedia[1]["url"]:backup_img} alt={story["title"]} className="img-fluid rounded" loading="lazy"/>
                </div>
                <div className="col-sm-6">
                    <a href={story["short_url"]} className="link-info" target="_blank" rel="noreferrer">
                    <h5 className="article-title">
                        {(story["title"].length>45)?story["title"].substring(0, 51)+'...':story["title"]}

                    </h5>
                    </a>
                </div>
                <div className="col-sm-12">
                    <p className="text-muted">
                    <i className="fa fa-calendar" aria-hidden="true"></i> &nbsp;
                    <small className="text-muted">{new Date(story["published_date"]).toLocaleString()}</small>

                    </p>
                </div>
            </div>
            ))}
        </div>
    )
}
const url=`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
export default WithApi(Stories,url)