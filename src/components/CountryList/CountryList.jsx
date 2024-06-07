import CountryItem from '../CountryItem/CountryItem';
import style from './CountryList.module.css';

export default function CountryList({ countries = [] }) {
  return (
    <ul className={style['country-list']}>
      {countries.map((country) => (
        <CountryItem key={country.code} {...country} />
      ))}
    </ul>
  );
}
