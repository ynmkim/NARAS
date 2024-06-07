import style from './Layout.module.css';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className={style.header}>
        <h1 className={style.logo}>
          <Link to={'/'}> NARAS 🌏</Link>
        </h1>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
}
