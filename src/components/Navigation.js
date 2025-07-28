import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__container">
        <Link to="/" className="navigation__logo">
          Каталог Промптов
        </Link>
        
        <div className="navigation__menu">
          <Link to="/" className="navigation__link">
            Главная
          </Link>
          
          <Link to="/categories" className="navigation__link">
            Категории
          </Link>
          
          <Link to="/tags" className="navigation__link">
            Теги
          </Link>
          
          <Link to="/prompt/1" className="navigation__link">
            Промпт 1
          </Link>
          
          <Link to="/prompt/2" className="navigation__link">
            Промпт 2
          </Link>
          
          <Link to="/prompt/3" className="navigation__link">
            Промпт 3
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;