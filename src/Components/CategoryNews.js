import '../css/bootstrap.min.css';
import "../css/categoryCard.css";
import no_img from "../assets/no_image_available.svg"
const CategoryNews = props => {
    return (
        <div className='container mt-2 bg-white pb-2'>
            <h1 className="text-primary my-4 bg-title ">
                <span className="main-title bg-primary text-light  p-1">
                    {props.category} News
                </span>
            </h1>
            <div className="row g-2" >
                {props.data.results.map((article, i) => (
                    <div className="col-md-6 " key={i}>
                        <div className="row h-100 mx-1 bg-white">
                            <div className="col-sm-6">
                                <div className="article-img-box">
                                <img src={article["image_url"]?article["image_url"]:no_img}  alt={article["title"]} />

                                </div>
                            </div>
                            <div className="col-sm-6 p-2 align-self-center">
                                <h5 className='article-title text-primary' >{article["title"].length > 45 ? article["title"].substring(0, 45) + '...' : article["title"]}</h5>
                                <p>{
                                    article["description"]?
                                    article["description"].length>100?article["description"].substring(0,100)+'...':article["description"]:
                                    article["content"]?
                                    article["content"].length>100?article["content"].substring(0,100)+'...':article["content"]:'no text provided...'
                                    }</p>
                                <div>
                                <a href={article["link"]} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline-primary">Read More</a>

                                </div>

                            </div>
                        </div>

                    </div>
                ))}

            </div>
           <div className="my-4 d-flex  justify-content-between">
                <button  className="btn btn-primary" onClick={()=>{
                 props.clickFetchHandler(-1)
                }}
                disabled={props.currentPage<=1}
                >
                    Prev &nbsp;
                <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                 </button>
                <button  className="btn btn-primary" onClick={()=>{
                 props.clickFetchHandler(+1)

                }}
                disabled={props.currentPage>=Math.ceil(props.data.totalResults/10)}
                >
                    Next &nbsp;
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    )

}
export default CategoryNews