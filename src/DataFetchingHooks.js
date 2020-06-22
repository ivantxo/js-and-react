import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function DataFetchingHooks() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await Axios(
        'https://hn.algolia.com/api/v1/search?query=redux'
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <ul>
      {data.hits.map(item => (
        <li key={ item.objectID }>
          <a href={ item.url }>{ item.title }</a>
        </li>
      ))}
    </ul>
  );
}

export default DataFetchingHooks;
