import React, { useState, useEffect, Fragment } from 'react';
import Axios from 'axios';

function DataFetchingHooks() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux'
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await Axios(url);

        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return (
    <Fragment>
      <input 
        type="text"
        value={ query }
        onChange={ event => setQuery(event.target.value) }
      />&nbsp;&nbsp;
      <button 
        type="button" 
        onClick={() => 
          setUrl(
            `https://hn.algolia.com/api/v1/search?query=${query}`
          )
        }>
        Search
      </button>

      {isError ? (
        <div><br />Something went postal...</div>
      ) : (isLoading ? (
        <div><br />Loading...</div>
      ) : (
        <ul>
          {data.hits.map(item => (
            <li key={ item.objectID }>
              <a href={ item.url }>{ item.title }</a>
            </li>
          ))}
        </ul>
      ))}
    </Fragment>
  );
}

export default DataFetchingHooks;
