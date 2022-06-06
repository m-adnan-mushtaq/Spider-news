

import backup_img from "../assets/no_image_available.svg"
const NewsCol=props=>{
  let filteredArticles=props.data.data.filter(article=>article.image!==null)
  filteredArticles=filteredArticles.slice(0,10)
    return(
      <div>
        {filteredArticles.map((article,index)=>(
        <div className="row g-3 align-items-center my-1" key={index}>
            <div className="col-sm-4">
                <img src={(article["image"])?article["image"]:backup_img} alt={article["title"]} className="pic-thumbnail rounded" />
            </div>
            <div className="col-sm-8">
                <a href={article["url"]} className="link-info" target="_blank" rel="noreferrer">
                <h5 className="article-title" style={{"wordBreak":"break-all"}}>{article["title"]}</h5>

                </a>
            </div>

        </div>
        ))}

    </div>
    )
}

export default NewsCol