import React from 'react';
import { Link } from 'react-router-dom';
import './CommunityPage.css';

const CommunityPage = () => {
  // Mock data for streaks leaderboard
  const streaksData = [
    { name: "Grayce", streak: 484, verified: true, avatar: "https://placehold.co/32x32/6366f1/white?text=G" },
    { name: "AbraS", streak: 346, verified: false, avatar: "https://placehold.co/32x32/ef4444/white?text=A" },
    { name: "ElectriZL", streak: 322, verified: false, avatar: "https://placehold.co/32x32/10b981/white?text=E" },
    { name: "TheArtists", streak: 98, verified: false, avatar: "https://placehold.co/32x32/f59e0b/white?text=T" },
    { name: "Selfiehessons", streak: 77, verified: false, avatar: "https://placehold.co/32x32/8b5cf6/white?text=S" },
    { name: "Sadiq", streak: 68, verified: false, avatar: "https://placehold.co/32x32/ec4899/white?text=S" },
    { name: "zaphod22", streak: 59, verified: false, avatar: "https://placehold.co/32x32/3b82f6/white?text=Z" },
    { name: "cecil", streak: 57, verified: false, avatar: "https://placehold.co/32x32/84cc16/white?text=C" },
    { name: "Marcus", streak: 34, verified: true, avatar: "https://placehold.co/32x32/dc2626/white?text=M" },
    { name: "kumars", streak: 30, verified: false, avatar: "https://placehold.co/32x32/059669/white?text=K" },
    { name: "ATDreamer", streak: 19, verified: false, avatar: "https://placehold.co/32x32/7c3aed/white?text=A" },
    { name: "PY2K64", streak: 18, verified: true, avatar: "https://placehold.co/32x32/f97316/white?text=P" },
    { name: "Morga", streak: 13, verified: true, avatar: "https://placehold.co/32x32/0ea5e9/white?text=M" },
    { name: "PaulyT", streak: 13, verified: true, avatar: "https://placehold.co/32x32/a855f7/white?text=P" },
    { name: "Nedra4362", streak: 7, verified: false, avatar: "https://placehold.co/32x32/f472b6/white?text=N" }
  ];

  // Mock data for community feed
  const feedPosts = [
    {
      id: 1,
      author: "Grayce",
      verified: true,
      timeAgo: "about 4 hours ago",
      image: "https://placehold.co/400x600/1f2937/white?text=PORTRAIT",
      likes: 0,
      comments: 0,
      avatar: "https://placehold.co/32x32/6366f1/white?text=G"
    },
    {
      id: 2,
      author: "Northwood1",
      verified: true,
      timeAgo: "about 16 hours ago",
      image: "https://placehold.co/400x600/3b82f6/white?text=ARTWORK",
      likes: 2,
      comments: 1,
      avatar: "https://placehold.co/32x32/3b82f6/white?text=N"
    },
    {
      id: 3,
      author: "cecil",
      timeAgo: "2 minutes ago",
      content: "Excellent",
      likes: 0,
      comments: 0,
      avatar: "https://placehold.co/32x32/84cc16/white?text=C"
    },
    {
      id: 4,
      author: "Grayce",
      verified: true,
      timeAgo: "1 day ago",
      image: "https://placehold.co/400x400/059669/white?text=INTERIOR",
      likes: 0,
      comments: 0,
      avatar: "https://placehold.co/32x32/6366f1/white?text=G"
    }
  ];

  // Mock data for new members
  const newMembers = [
    { name: "charlesmcdaniel", avatar: "https://placehold.co/32x32/6366f1/white?text=C" },
    { name: "ShazAI", avatar: "https://placehold.co/32x32/ef4444/white?text=S" },
    { name: "DarkD", avatar: "https://placehold.co/32x32/10b981/white?text=D" },
    { name: "vaishlykrishan", avatar: "https://placehold.co/32x32/f59e0b/white?text=V" },
    { name: "Oojc_developer", avatar: "https://placehold.co/32x32/8b5cf6/white?text=O" },
    { name: "Sophirath", avatar: "https://placehold.co/32x32/ec4899/white?text=S" },
    { name: "Max_Hoover", avatar: "https://placehold.co/32x32/3b82f6/white?text=M" },
    { name: "Sparkanddom", avatar: "https://placehold.co/32x32/84cc16/white?text=S" },
    { name: "CHEU", avatar: "https://placehold.co/32x32/dc2626/white?text=C" },
    { name: "Glogis", avatar: "https://placehold.co/32x32/059669/white?text=G" },
    { name: "Seratestone", avatar: "https://placehold.co/32x32/7c3aed/white?text=S" },
    { name: "jungz", avatar: "https://placehold.co/32x32/f97316/white?text=J" },
    { name: "Damien1315", avatar: "https://placehold.co/32x32/0ea5e9/white?text=D" },
    { name: "AmSalman", avatar: "https://placehold.co/32x32/a855f7/white?text=A" }
  ];

  // Mock data for verified profiles
  const verifiedProfiles = [
    { name: "Grayce", verified: true, avatar: "https://placehold.co/32x32/6366f1/white?text=G" },
    { name: "Northwood1", verified: true, avatar: "https://placehold.co/32x32/3b82f6/white?text=N" },
    { name: "javierpuerta", verified: true, avatar: "https://placehold.co/32x32/10b981/white?text=J" },
    { name: "ramirezz", verified: true, avatar: "https://placehold.co/32x32/ef4444/white?text=R" }
  ];

  return (
    <div className="community-page">
      {/* Hero Section */}
      <div className="community-hero">
        <div className="community-hero__content">
          <Link to="/" className="community-back">← Назад на главную</Link>
          <h1 className="community-hero__title">Сообщество Промптеров</h1>
          <p className="community-hero__description">
            Добро пожаловать в дом для AI-промптеров, где профессионалы делятся своими секретами, демонстрируют работы, оттачивают навыки и создают потрясающие изображения.
          </p>
          <button className="community-hero__cta">Присоединиться бесплатно</button>
        </div>
        <div className="community-hero__avatars">
          {/* Grid of user avatars */}
          <div className="avatars-grid">
            {Array.from({ length: 50 }, (_, i) => (
              <div key={i} className="avatar-item">
                <img 
                  src={`https://placehold.co/48x48/${Math.floor(Math.random()*16777215).toString(16)}/white?text=${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`} 
                  alt="User avatar" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="community-content">
        {/* Left Sidebar - Streaks */}
        <div className="community-sidebar left">
          <div className="sidebar-section">
            <h3 className="sidebar-title">🔥 АКТИВНОСТЬ</h3>
            <div className="streaks-list">
              {streaksData.map((user, index) => (
                <div key={index} className="streak-item">
                  <div className="streak-user">
                    <img src={user.avatar} alt={user.name} className="streak-avatar" />
                    <Link to={`/user/${user.name.toLowerCase()}`} className="streak-name">
                      {user.name}
                      {user.verified && <span className="verified-badge">✓</span>}
                    </Link>
                  </div>
                  <span className="streak-count">{user.streak}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center - Community Feed */}
        <div className="community-feed">
          <h3 className="feed-title">📰 ЛЕНТА СООБЩЕСТВА</h3>
          <div className="feed-posts">
            {feedPosts.map((post) => (
              <div key={post.id} className="feed-post">
                <div className="post-header">
                  <img src={post.avatar} alt={post.author} className="post-avatar" />
                  <div className="post-info">
                    <Link to={`/user/${post.author.toLowerCase()}`} className="post-author">
                      {post.author}
                      {post.verified && <span className="verified-badge">✓</span>}
                    </Link>
                    <span className="post-time">{post.timeAgo}</span>
                  </div>
                </div>
                
                {post.title && (
                  <div className="post-title">
                    <h4>{post.title}</h4>
                    <p className="post-description">{post.description}</p>
                  </div>
                )}
                
                {post.image && (
                  <div className="post-image">
                    <img src={post.image} alt="Post content" />
                  </div>
                )}
                
                {post.content && (
                  <div className="post-content">
                    <p>{post.content}</p>
                  </div>
                )}
                
                <div className="post-actions">
                  <button className="post-action">
                    ♡ {post.likes}
                  </button>
                  <button className="post-action">
                    💬 {post.comments}
                  </button>
                </div>
                
                <div className="post-footer">
                  <span className="join-prompt">
                    💡 Присоединяйтесь к сообществу, чтобы комментировать. Уже промптер? <a href="#login">Войти</a>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar - New Members */}
        <div className="community-sidebar right">
          <div className="sidebar-section">
            <h3 className="sidebar-title">👋 НОВЫЕ УЧАСТНИКИ</h3>
            <div className="members-list">
              {newMembers.map((member, index) => (
                <div key={index} className="member-item">
                  <img src={member.avatar} alt={member.name} className="member-avatar" />
                  <Link to={`/user/${member.name.toLowerCase()}`} className="member-name">{member.name}</Link>
                </div>
              ))}
            </div>
            
            <div className="update-profile">
              <p>Хотите попасть сюда? Обновите профиль с именем пользователя и аватаром!</p>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">⭐ УЧАСТНИК ДНЯ</h3>
            <div className="member-of-day">
              <img src="https://placehold.co/48x48/f59e0b/white?text=З" alt="ЗолотойКролик" className="motd-avatar" />
              <Link to="/user/золотойкролик" className="motd-name">ЗолотойКролик</Link>
            </div>
          </div>

          <div className="sidebar-section">
            <div className="community-challenges">
              <h4>Челленджи сообщества</h4>
              <button className="challenges-btn">Участвовать</button>
            </div>
          </div>

          <div className="sidebar-section">
            <h3 className="sidebar-title">✅ ВЕРИФИЦИРОВАННЫЕ</h3>
            <div className="verified-list">
              {verifiedProfiles.map((profile, index) => (
                <div key={index} className="verified-item">
                  <img src={profile.avatar} alt={profile.name} className="verified-avatar" />
                  <Link to={`/user/${profile.name.toLowerCase()}`} className="verified-name">
                    {profile.name}
                    <span className="verified-badge">✓</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;