import { useSearchParams } from "react-router-dom";
import ErrorBoundary from "../Components/ErrorBoundaries/ErrorBoundary";
import InfiniteScrollComp from "../Components/InfiniteScroll/InfiniteScrollComp";
const QueryResult = props => {

    let [searchParams] = useSearchParams()
    const query = searchParams.get('q')


    return (
        <div className="container my-2">
             <h2 className='my-4 bg-title left-title'>
              <span className="bg-primary text-light article-title p-1" style={{"textTransform":"capitalize"}}>
                Search Results for : {query}
                  </span>
            </h2>
            <ErrorBoundary>
                <InfiniteScrollComp
                    query={query}
                    updateProgress={props.updateProgress}
                    key={query}
                />  

            </ErrorBoundary>
        </div>
    )
}

export default QueryResult


// {/* <hr className='stylish-line' style={{ "height": ".3em" }} /> */}