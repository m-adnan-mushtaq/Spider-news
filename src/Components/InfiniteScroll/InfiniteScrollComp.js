import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from './loader'
import NewsCard from './NewsCard'
export default class InfiniteScrollComp extends Component {
  state = {
    isLoading: true,
    isError: false,
    totalResults: 0,
    page: 1,
    articles: []
  }
  componentDidMount() {
    this.fetchMoreData()
  }
  fetchMoreData = () => {
    // increase the page
    this.props.updateProgress(15)
    let updatedPage = this.state.page
    updatedPage++
    this.setState({ page: updatedPage })
    const url = `https://newsapi.org/v2/top-headlines?q=${this.props.query}&pageSize=9&page=${this.state.page}&apiKey=${process.env.REACT_APP_NEWS_API}`
    // update the current page
    let updatedArticles = [...this.state.articles]
    fetch(url).then(res => {
      this.props.updateProgress(35)

      return res.json()
    }).then(data => {
      this.props.updateProgress(75)
      let { totalResults, articles } = data
      updatedArticles = [...updatedArticles, ...articles]
      // update the state
      this.setState({
        isLoading: false,
        articles: updatedArticles,
        totalResults
      })
      this.props.updateProgress(100)
    }).catch(e => {
      this.setState({
        isLoading: false,
        isError: true,
        articles: null
      })
    })
  }
  componentWillUnmount() {
    this.setState({
      isLoading: true,
      isError: false,
      totalResults: 0,
      page: 1,
      articles: []
    })
  }
  render() {
    let articles = null
    if (this.state.articles.length && !this.state.isError) {
      articles = (
        <div className="row g-2 align-items-center justify-content-center bg-white position-relative" style={{ "overflowX": "hidden !important" }}>
          {this.state.articles.map((article, i) => (
            <NewsCard
              key={i + 'fxx'}
              title={article.title}
              description={article.description}
              url={article.url}
              image={article.urlToImage}
              publishedAt={article.publishedAt}
            />
          ))}
        </div>)
    }

    if (this.state.isLoading) {
      articles = <Loader />
    }
    if (!this.state.isLoading && this.state.isError) {
      articles = (<div className="alert alert-danger" role="alert">
        <h4 className="alert-heading">Oops!</h4>
        <p>
          <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
          Somethig Went Wrong</p>
        <hr />
        <p className="mb-0">
          Failed to Fetch! Try again Later!
        </p>
      </div>)
    }
    if (!this.state.isError && !this.state.articles.length && !this.state.isLoading) {
      articles=<h5 className='text-danger'>
        No Articles Found matching "{this.props.query}", Try with another search keywords!</h5>
    }
    return (
      <div className='container' style={{ "overflowX": "hidden" }}>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          loader={<Loader />}
          next={this.fetchMoreData}
          hasMore={this.state.articles?.length !== parseInt(this.state.totalResults)}
          endMessage={
            this.state.articles.length && <p className='text-muted text-center my-2'>
              <b>Yay! You have read it all</b>
            </p>}
        >
          {articles}
        </InfiniteScroll>
      </div>
    )
  }
}
