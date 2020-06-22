import React, { useState, useEffect, Fragment } from 'react';
import Axios from 'axios';

function DataFetchingHooks() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(
        `https://hn.algolia.com/api/v1/search?query=${search}`
      );
      setData(result.data);
    };
    fetchData();
  }, [search]);

  return (
    <Fragment>
      <input 
        type="text"
        value={ query }
        onChange={ event => setQuery(event.target.value) }
      />&nbsp;&nbsp;
      <button type="button" onClick={() => setSearch(query) }>
        Search
      </button>
      <ul>
        {data.hits.map(item => (
          <li key={ item.objectID }>
            <a href={ item.url }>{ item.title }</a>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default DataFetchingHooks;
