import no_internet from "../assets/lost_internet.svg"
import logo from "../assets/spider_news_icon.svg"
const NoInternet = props => (
    <div className="row g-4 px-4  align-items-center " style={{"maxWidth":"100vw","minHeight":"100vh !important","overflow":"hidden"}}>
        <div className="col-md-6 text-center">
            <img src={logo} alt="Spider News" className="img-fluid mb-3 " />
            <div className="alert alert-primary shadow-lg rounded hover-box " style={{"borderRadius":"0.7em","boxShadow":"1px 2px 4px silver"}}>
                <h4 className="alert-heading text-center">Oops!</h4>
                <p className="">Look's like your Internet Connection is Off!</p>
                <hr/>
                    <p className="mb-0">Make sure Your Internet Conncetion is turned ON to view resources</p>
            </div>
        </div>
        <div className="col-md-6 ">
            <div className="img-box">
            <img src={no_internet} alt="no internet pic" style={{"display":"block","maxWidth":"85%"}} />

            </div>
        </div>
    </div>
)
export default NoInternet