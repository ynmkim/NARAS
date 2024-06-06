import { useEffect, useState } from 'react';
import { getCountries } from '../api';

export default function Home() {
  const [contries, setCountries] = useState([]);

  const fetchData = async () => {
    const data = await getCountries();
    setCountries(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Home</div>;
}
