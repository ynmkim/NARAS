import { useEffect, useState } from 'react';
import { getCountries } from '../api';
import SearchForm from '../components/SearchForm';
import CountryList from '../components/CountryList';
import style from './Home.module.css';

export default function Home() {
  const [countries, setCountries] = useState([]);

  const fetchData = async () => {
    const data = await getCountries();
    setCountries(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={style.container}>
      <SearchForm />
      <CountryList countries={countries} />
    </div>
  );
}
