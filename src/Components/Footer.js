import { Link } from "react-router-dom"

const Footer=props=>(
<div className="text-center text-lg-start bg-theme text-light p-2">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>

    <div className="d-flex">
      <a href="/" className="me-4 text-light btn">
        <i className="fa fa-facebook-f"></i>
      </a>
      <a href="/" className="me-4 text-light btn">
        <i className="fa fa-twitter"></i>
      </a>
      <a href="/" className="me-4 text-light btn">
        <i className="fa fa-google"></i>
      </a>
      <a href="/" className="me-4 text-light btn">
        <i className="fa fa-instagram"></i>
      </a>
      <a href="/" className="me-4 text-light btn">
        <i className="fa fa-linkedin"></i>
      </a>
      <a href="/" className="me-4 text-light btn">
        <i className="fa fa-github"></i>
      </a>
    </div>
  </section>

  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h3 className="text-uppercase  mb-4 fw-bold text-light">
            Spider News
          </h3>
          <p>
           Spider News is Api Based Project. Project is made using multiple API's inlcuding NewsApi.org , NewsData.io NewYorkTimes Api, Weather Api , Covid Api and few more..
          </p>
          <p>Project is one of my portfolio projects!</p>
        </div>

        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4 text-center catagores_links">
          <h6 className="text-uppercase fw-bold mb-2">
            Catagories
          </h6>
          <p>
            <Link to="/" className="text-light">Latest</Link>
          </p>
          <p>
            <Link to="/business" className="text-light">Business</Link>
          </p>
          <p>
            <Link to="/technology" className="text-light">Technology</Link>
          </p>
          <p>
            <Link to="/entertainment" className="text-light">Entertainment</Link>
          </p>
          <p>
            <Link to="/sports" className="text-light">Sports</Link>
          </p>
          <p>
            <Link to="/politics" className="text-light ">Politics</Link>
          </p>
          <p>
            <Link to="/covid19" className="text-light ">Covid 19</Link>
          </p>
          <p>
            <Link to="/about" className="text-light ">About</Link>
          </p>
        </div>
        <div className="col-md-4 col-lg-4  mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4 text-center">
            Contact
          </h6>
          <form action="mailto:malikkingoo68@gmail.com" >
            <div className="my-2">
              <label htmlFor="author">Your Name: </label>
              <input type="text" className="form-control" minLength={3}  required />
            </div>
            <div className="my-2">
              <label htmlFor="email">Your Email: </label>
              <input type="email" className="form-control" minLength={3} required/>
            </div>
            <div className="my-2">
              <label htmlFor="message">Leave a Message: </label>
              <textarea name="message" id="" cols="30" rows="2" className="form-control" required ></textarea>
            </div>
            <div className="btn-box text-center">
              <button className="btn send-btn text-light btn-lg btn-block w-100" type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  <div className="text-center p-4 mt-3" style={{"backgroundColor": "rgba(0, 0, 0, 0.05)"}}>
    © 2022 Copyright:
    <p className="text-light fw-bold" >Made with 💖 by Adnan Malik</p>
  </div>
</div>
)

export default Footer