// HOC responsible for showing spinner and fetching response
import React, { Component } from 'react'
import '../../css/spinner.css'
// function that recieves url of api 
const WithApi= (WrappedComponent, url)=>{
    return class ExtendeComponent extends Component{
        state={
            isLoading:true,
            status:null,
            data:[]
        }
        // fetch the data
        componentDidMount(){
            this.fetchData(url)
        }
        fetchData=async url=>{
            this.setState({isLoading:true})
            try {
                const response=await fetch(url)
                const data=await response.json()
                this.setState({
                    isLoading:false,
                    status:response.status,
                    data
                    
                })
                // this.props.updateProgress(100)
            } catch (error) {
                this.setState({
                    isLoading:false,
                    status:null,
                    data:null
                })
            }
        }
        clickFetchHandler=url=>{
            this.fetchData(url)
        }
        render(){
            // now check if loading is complete or not
            if (this.state.isLoading) {
                return <div className="loader"></div>
            }
            if (this.state.status !==200 || !this.state.data) {
                return <p className='text-danger my-3'>Sorry Somethig Went Wrong</p>
            }
            // update the ui
            return(
                <WrappedComponent {...this.props} data={this.state.data} clickFetchHandler={this.clickFetchHandler}/>
            )
        }
    }
}

export default WithApi