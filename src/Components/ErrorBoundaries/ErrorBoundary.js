// error boundary for error handling in app not to crash app in minro app
import React ,{Component} from "react";
class ErrorBoundary extends Component{
    // component did catch 
    state={hasError:false,errorMsg:''}
    componentDidCatch=(error,info)=>{
        this.setState({hasError:true,errorMsg:error})
    }
    render(){
        // if there is error show error otherwise show it's children wrapped element
        if (this.state.hasError) {
            return (<div className="alert alert-danger" role="alert">
            <h4 className="alert-heading">Oops!</h4>
            <p>
            <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                Somethig Went Wrong</p>
            <hr/>
            <p className="mb-0">
                {this.state.errorMsg}
            </p>
          </div>)
        }
        return(
            <div>{this.props.children}</div>
        )
    }
}

export default ErrorBoundary;