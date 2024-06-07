import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCountry } from '../api';
import style from './Country.module.css';

export default function Country() {
  const params = useParams();

  const [country, setCountry] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountry(params.code);
      setCountry(data);
    };
    fetchData();
  }, [params.code]);

  console.log(country);

  if (!country) {
    return <div>로딩중 ...</div>;
  }

  const {
    capital,
    code,
    commonName,
    flagEmoji,
    flagImg,
    googleMapURL,
    officialName,
    population,
    region,
  } = country;

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h3 className={style['country-name']}>
          {flagEmoji}&nbsp;{commonName}
        </h3>
        <p>{officialName}</p>
      </div>

      <div className={style['image-wrapper']}>
        <img src={flagImg} alt={`${commonName}의 국기`} />
      </div>

      <dl className={style['country-info']}>
        <div className={style['country-info-item']}>
          <dt>코드:</dt>
          <dd>{code}</dd>
        </div>
        <div className={style['country-info-item']}>
          <dt>수도:</dt>
          <dd>{capital}</dd>
        </div>
        <div className={style['country-info-item']}>
          <dt>지역:</dt>
          <dd>{region}</dd>
        </div>
        <div className={style['country-info-item']}>
          <dt>인구:</dt>
          <dd>{population}</dd>
        </div>
        <div className={style['country-info-item']}>
          <dt>지도:</dt>
          <dd>
            <a href={googleMapURL} target="_blank">
              {googleMapURL}
            </a>
          </dd>
        </div>
      </dl>
    </div>
  );
}
