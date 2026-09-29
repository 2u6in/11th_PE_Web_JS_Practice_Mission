import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <a href="#movies" className="logo">
          <img src="/icons/movie.svg" alt="" />
          <span>UMCine</span>
        </a>

        <nav className="nav">
          <Link to="/">영화</Link>
          <Link to="/search">검색</Link>
          <a href="#">내 정보</a>
        </nav>
      </div>

      <div className="header-right">
        <button type="button" className="search-button" aria-label="검색">
          <img src="/icons/search.svg" alt="" />
        </button>
        <button type="button" className="mypage-button">
          로그인
        </button>
      </div>
    </header>
  );
}