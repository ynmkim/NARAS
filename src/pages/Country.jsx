import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCountry } from '../api';

export default function Country() {
  const params = useParams();

  const [contry, setCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountry(params.code);
      setCountry(data);
    };
    fetchData();
  }, [params.code]);

  return <div>Country : {params.code}</div>;
}
