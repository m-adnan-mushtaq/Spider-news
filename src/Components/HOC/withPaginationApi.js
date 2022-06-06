// HOC responsible for showing spinner and fetching response
import React, { Component } from 'react'
import '../../css/spinner.css'
// function that recieves type of api 
const WithPaginationApi = (WrappedComponent, type) => {
    return class ExtendeComponent extends Component {
        constructor(props) {
            super(props)
            this.state = {
                isLoading: true,
                status: null,
                currentPage: 1,
                data: []
            }
            this.updateProgress=props.updateProgress
        }

        // fetch the data
        componentDidMount() {
            this.fetchData(type,0)
        }
        fetchData = async (type,pageUpdation) => {
            this.updateProgress(15)
            this.setState({ isLoading: true })
            try {
                // check if page is not greater than our limits or page is lesser than 1
                const url = `https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_NEWS_DATA_API_KEY}&category=${type}&language=en&page=${this.state.currentPage+pageUpdation}`
                const response = await fetch(url)
                this.updateProgress(30)
                const data = await response.json()
                this.updateProgress(70)
                // now check for page limit
                
                this.setState({
                    isLoading: false,
                    status: response.status,
                    data
                    
                })
                this.updateProgress(100)
            } catch (error) {
                this.setState({
                    isLoading: false,
                    status: null,
                    data: null
                })
            }
        }
        

        clickFetchHandler = (pageUpdation) => {
            // check for page limit
            this.setState((prevProps)=>{
               return{currentPage:prevProps.currentPage+pageUpdation}
            })
            this.fetchData(type,pageUpdation)
        }
        render() {
            // now check if loading is complete or not
            if (this.state.isLoading) {
                return <div className="loader"></div>
            }
            if (this.state.status !== 200 || !this.state.data) {
                return (<div className="alert alert-danger my-3" role="alert">
                    <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                    &nbsp;&nbsp;Sorry! Something Went Wrong, Try again!
                </div>)
            }
            // update the ui
            return (
                <WrappedComponent {...this.props} data={this.state.data}  clickFetchHandler={this.clickFetchHandler} currentPage={this.state.currentPage} />
            )
        }
    }
}

export default WithPaginationApi