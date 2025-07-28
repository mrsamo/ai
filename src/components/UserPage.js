import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './UserPage.css';

const UserPage = () => {
  const { username } = useParams();

  return (
    <div className="user-page">
      <div className="user-page__container">
        <Link to="/community" className="user-page__back">← Назад к сообществу</Link>
        
        <div className="user-profile">
          <div className="user-avatar">
            <img 
              src={`https://placehold.co/120x120/6366f1/white?text=${username.charAt(0).toUpperCase()}`} 
              alt={username} 
            />
          </div>
          
          <div className="user-info">
            <h1 className="user-name">{username}</h1>
            <p className="user-bio">Участник сообщества промптеров</p>
            
            <div className="user-stats">
              <div className="stat">
                <span className="stat-number">42</span>
                <span className="stat-label">Промптов</span>
              </div>
              <div className="stat">
                <span className="stat-number">128</span>
                <span className="stat-label">Лайков</span>
              </div>
              <div className="stat">
                <span className="stat-number">15</span>
                <span className="stat-label">Подписчиков</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="user-content">
          <h2>Промпты пользователя</h2>
          <p>Здесь будут отображаться промпты пользователя {username}</p>
        </div>
      </div>
    </div>
  );
};

export default UserPage;