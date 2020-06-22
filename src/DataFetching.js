import React, { Component } from 'react';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class DataFetching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
      isLoading: false,
    };
  }
  
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits, isLoading: false }));
  }

  render() {
    const { hits, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>
    }

    return (
      <ul>
        {hits.map(hit =>
          <li key={ hit.objectID }>
            <a href={ hit.url }>{ hit.title }</a>
          </li>
        )}
      </ul>
    );
  }
}

export default DataFetching;
