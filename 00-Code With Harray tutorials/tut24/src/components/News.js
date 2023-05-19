import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country : 'in',
    apiKey : '05965c30cda940f4a391569e716b4bed',
    pageSize : 18,
    category : 'general',
    headline : ''
  }

  static propTypes = {
    country : PropTypes.string, //* pstr
    apiKey : PropTypes.string,
    pageSize : PropTypes.number, //* pnr
    category : PropTypes.string,
    headline : PropTypes.string,
  }

  constructor() {
    super()
    this.state = {
      articles: [],
      loading: true, 
      page: 1
    }
  }

  updateNews = async (pageNumber) => {
    this.setState({ loading: true, })
    const fetchData = async () => {
      try {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${pageNumber}&pageSize=${this.props.pageSize}`)
        const data = await res.json()
        this.setState({
          page : pageNumber,
          articles: data.articles,
          totalArticle: data.totalResults,
          loading : false
        })
      } catch (error) { console.log('custom error' + error) }
    }
    await fetchData();
    this.setState({ loading: false })
  }

  async componentDidMount() {
    this.updateNews(1);
  }

  incrementPage = async () => this.updateNews(this.state.page + 1);

  decrementPage = async () => this.updateNews(this.state.page - 1);

  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className='my-4 text-center'>🐵 NewsMonkey Top {this.props.headline} Headlines 🔥</h2>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading && this.state.articles.map((item, idx) => {
              return (
                <div className="col-md-4" key={idx}>
                  <NewsItem
                    imageUrl={item.urlToImage}
                    title={item.title ? item.title.substring(0, 100) : ''}
                    desc={item.description ? item.description.substring(0, 150) : ''}
                    newsUrl={item.url}
                    publishedAt={item.publishedAt}
                    author={item.author}
                    source={item.source.name}
                  />
                </div>
              )
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-dark"
              disabled={this.state.page <= 1}
              onClick={this.decrementPage}
            >
              ⏮ Prev
            </button>
            <button
              type="button"
              className="btn btn-dark"
              disabled={this.state.page >= Math.ceil(this.state.totalArticle / this.props.pageSize)}
              onClick={this.incrementPage}
            >
              Next ⏭
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default News
