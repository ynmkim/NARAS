import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchResults } from '../api';

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('keyword');

  const [contries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSearchResults(query);
      setCountries(data);
    };

    fetchData();
  }, [query]);

  return (
    <div>
      Search
      <div>검색 결과 : {query}</div>
    </div>
  );
}
