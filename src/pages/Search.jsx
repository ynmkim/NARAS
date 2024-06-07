import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchResults } from '../api';
import style from './Search.module.css';
import SearchForm from '../components/SearchForm';
import CountryList from '../components/CountryList';

export default function Search() {
  const [countries, setCountries] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('q');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSearchResults(keyword);
      setCountries(data);
    };

    fetchData();
  }, [keyword]);

  return (
    <div className={style.container}>
      <SearchForm q={keyword} />

      <h2 className={style.title}>
        <b className={style.keyword}>{keyword}</b> 검색 결과
      </h2>

      <CountryList countries={countries} />
    </div>
  );
}
