import style from './CountryItem.module.css';
import { Link } from 'react-router-dom';

export default function CountryItem({
  code,
  flagImg,
  commonName,
  flagEmoji,
  region,
  capital,
  population,
}) {
  return (
    <li className={style['country-item']}>
      <Link to={`/country/${code}`}>
        <div className={style['card-image']}>
          <img src={flagImg} alt={`${commonName}의 국기`} />
        </div>
        <div className={style['card-text']}>
          <h3 className={style['country-name']}>
            {flagEmoji}&nbsp;{commonName}
          </h3>
          <dl className={style['country-info']}>
            <div className={style['country-info-item']}>
              <dt>지역:</dt>
              <dd>{region}</dd>
            </div>
            <div className={style['country-info-item']}>
              <dt>수도:</dt>
              <dd>{capital}</dd>
            </div>
            <div className={style['country-info-item']}>
              <dt>인구:</dt>
              <dd>{population}</dd>
            </div>
          </dl>
        </div>
      </Link>
    </li>
  );
}
