import style from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className={style.header}>
        <h1 className={style.logo}>NARAS 🌏</h1>
      </header>
      <main className={style.main}>{children}</main>
    </div>
  );
}
