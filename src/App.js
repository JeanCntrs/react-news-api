import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ListNews from './components/ListNews';
import Form from './components/Form';

class App extends Component {
  state = {
    news: []
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = async (country = 'ar', category = 'business') => {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=0be8624741a24c83aacfec3de6653319`;
    const response = await fetch(url);
    const news = await response.json();
    this.setState({
      news: news.articles
    });
  }

  render() {
    return (
      <Fragment>
        <Header title="Noticias Api" />
        <div className="container white contenedor-noticias">
          <Form getNews={this.getNews} />
          <ListNews news={this.state.news} />
        </div>
      </Fragment>
    );
  }
}

export default App;
