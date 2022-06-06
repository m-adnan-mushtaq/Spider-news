import WithApi from "./HOC/withApi"
import NewsCol from "./NewsCol"
const HealthNews=WithApi(NewsCol,`http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_MEDIASTACK_API_KEY}&categories=health&languages=en`)
const EnterntainmentNews=WithApi(NewsCol,`http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_MEDIASTACK_API_KEY}&categories=entertainment&languages=en`)
const ScienceNews=WithApi(NewsCol,`http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_MEDIASTACK_API_KEY}&categories=science&languages=en`)
const NewsRow=props=>(
    <div className="row my-1 p-2 g-3 news-col">
        <div className="col-md-4">
        <h3 className="article-title text-muted">
            Health News
         </h3>
      <hr className='stylish-line' style={{"height":".3em"}} />
            <HealthNews />
        </div>
        <div className="col-md-4">
        <h3 className="article-title text-muted">
            Entertainment News
         </h3>
      <hr className='stylish-line' style={{"height":".3em"}} />

            <EnterntainmentNews />
        </div>
        <div className="col-md-4">
        <h3 className="article-title text-muted">
            Science News
         </h3>
      <hr className='stylish-line' style={{"height":".3em"}} />

            <ScienceNews  />
        </div>
      </div>
)
export default NewsRow  