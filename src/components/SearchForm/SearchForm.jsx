import { useEffect, useState } from 'react';
import style from './SearchForm.module.css';
import { useNavigate } from 'react-router-dom';

export default function SearchForm({ q }) {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setKeyword(q);
  }, [q]);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (keyword !== '') {
      navigate(`/search?q=${keyword}`);
    }
  };

  return (
    <form className={style['search-form']} onSubmit={handleSubmit}>
      <input
        value={keyword || ''}
        onChange={handleKeywordChange}
        placeholder="검색어를 입력하세요"
        className={style['search-input']}
      />
      <button
        type="submit"
        className={style['search-button']}
        aria-label="검색"
      ></button>
    </form>
  );
}
