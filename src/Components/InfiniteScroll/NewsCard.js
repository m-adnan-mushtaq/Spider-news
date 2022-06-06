import no_img from "../../assets/no_image_available.svg"
const NewsCard = ({ title, description, url, image, publishedAt }) => {
    return (
        <div className="col-md-4">
            <figure className="snip1216">
                <div className="new-img-box">
                    <img className="news-img" style={{"aspectRatio":"10/9"}} src={image ? image : no_img} alt={title} onError={(event)=>{
                        event.currentTarget.onerror=null
                        event.target.src=no_img
                    }} />
                </div>
                <figcaption>
                    <div className="time-stamp"><span className="day">
                        {new Date(publishedAt).getDay()}
                    </span><span className="month">
                            {new Date(publishedAt).toLocaleString('en-US', { month: 'short' })}
                        </span></div>
                    <h5 >{title.length > 45 ? title.substring(0, 45) + '...' : title}</h5>
                    <p
                    style={{
                        "minHeight":"5.5rem",
                        "height":"5.5rem",
                        "maxHeight":"5.5rem"
                    }}
                    
                    >{description.length > 155 ? description.substring(0, 155) + '...' : description}</p>
                </figcaption>
                <footer>
                    <a className="btn btn-outline-primary btn-block w-100 read-btn" href={url} target="_blank" rel="noreferrer">Read More</a>
                </footer>
            </figure>
        </div>
    )
}

export default NewsCard