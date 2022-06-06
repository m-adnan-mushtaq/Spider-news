import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import backup_img from "../assets/no_image_available.svg"
import WithApi from './HOC/withApi';
const CarouselNews=props=>{
    return(
        
          <Splide  
        options={{
            type:'loop',
            autoplay:true,
            interval:3000,
            pauseOnHover:true,
            gap:'.5em',
            perPage:4,
            slideBy:1,
            perMove:1,
            speed:1000,
            pagination:false,
            breakpoints:{
                768:{
                    perPage:2
                },
                540:{
                    perPage:1
                }
            }
        }}
        
        >
            {props.data.results.map(article=>(
            <SplideSlide key={article.id}>
            <div className="img_box">
            <img className="zoom" src={(article.media.length)?article.media[0]["media-metadata"][1]["url"]:backup_img} alt="news  "/>
            <div className="content slide-right">
                <a href={article.url} target="_blank" rel='noreferrer' style={{"textDecoration":"none"}}>
                <h5 className='link-info'>
                    {article.title.length>50?article.title.substring(0,50)+'...':article.title}
                    </h5>
                </a>
            </div>
            </div>
            </SplideSlide>

            ))}
            
    </Splide>
    )
}
const url=`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`
export default WithApi(CarouselNews,url)
