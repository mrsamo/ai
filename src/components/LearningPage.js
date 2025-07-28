import React from 'react';
import { Link } from 'react-router-dom';
import './LearningPage.css';

const LearningPage = () => {
  const courses = [
    {
      id: 1,
      title: "Создание красивых картинок для соцсетей",
      description: "Научитесь создавать яркие и привлекательные изображения для Instagram, ВКонтакте и других социальных сетей. Узнайте, как с помощью простых команд получать профессиональные фотографии продуктов, еды, путешествий. Никаких сложных программ — только ИИ и ваша фантазия!",
      level: "НАЧИНАЮЩИЙ",
      image: "https://placehold.co/400x250/f59e0b/white?text=КАРТИНКИ+ДЛЯ+СОЦСЕТЕЙ",
      buttonText: "Начать обучение →"
    },
    {
      id: 2,
      title: "Рисование с помощью ИИ — легко и просто",
      description: "Всегда мечтали рисовать, но не умеете? ИИ поможет! Изучите основы создания красивых рисунков и иллюстраций с помощью искусственного интеллекта. Создавайте открытки, аватарки, картинки для презентаций — всё это без художественных навыков.",
      level: "НАЧИНАЮЩИЙ",
      image: "https://placehold.co/400x250/dc2626/white?text=РИСОВАНИЕ+С+ИИ",
      buttonText: "Начать обучение →"
    },
    {
      id: 3,
      title: "Первые шаги в мире ИИ-изображений",
      description: "Самый простой способ начать работать с искусственным интеллектом! Узнайте, как правильно общаться с ИИ, чтобы получать именно те картинки, которые вы хотите. Подходит для всех — от школьников до пенсионеров.",
      level: "НОВИЧОК",
      image: "https://placehold.co/400x250/3b82f6/white?text=ПЕРВЫЕ+ШАГИ",
      buttonText: "Начать обучение →"
    },
    {
      id: 4,
      title: "Создаём персонажей для игр и историй",
      description: "Придумайте и создайте своих уникальных персонажей! Научитесь генерировать героев для игр, комиксов или просто для развлечения. Создавайте аватары для себя и друзей, придумывайте интересных персонажей для своих историй.",
      level: "НАЧИНАЮЩИЙ",
      image: "https://placehold.co/400x250/10b981/white?text=ПЕРСОНАЖИ",
      buttonText: "Начать обучение →"
    }
  ];

  return (
    <div className="learning-page">
      {/* Hero Section */}
      <div className="learning-hero">
        <div className="learning-hero__container">
          <div className="learning-hero__content">
            <Link to="/" className="learning-back">← Назад на главную</Link>
            <h1 className="learning-hero__title">
              Где каждый может освоить<br />
              <span className="highlight">искусственный интеллект</span>
            </h1>
            <button className="hero-cta-btn">Начать бесплатно</button>
          </div>
          <div className="learning-hero__image">
            <img src="https://placehold.co/500x600/667eea/white?text=ИИ+ОБУЧЕНИЕ" alt="AI Learning Hero" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="learning-content">
        <div className="container">
          <div className="content-header">
            <h2 className="section-title">
              Откройте удивительный мир искусственного интеллекта
            </h2>
            <p className="section-subtitle">
              Учитесь в своём темпе и создавайте то, что раньше казалось невозможным. Наши курсы подходят для всех — никаких специальных знаний не требуется!
            </p>
          </div>

          <div className="courses-grid">
            {courses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-image">
                  <img src={course.image} alt={course.title} />
                  <div className="course-level">{course.level}</div>
                  <div className="course-brand">Яндекс Практикум</div>
                </div>
                <div className="course-content">
                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  <button className="course-btn">{course.buttonText}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Yandex Practicum Features */}
      <div className="yandex-features">
        <div className="container">
          <h2 className="section-title">Почему выбирают наше обучение?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Простые объяснения</h3>
              <p>Всё рассказываем понятным языком, без сложных терминов</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🏫</div>
              <h3>Поддержка на каждом шаге</h3>
              <p>Наши преподаватели всегда готовы помочь и ответить на вопросы</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Практические навыки</h3>
              <p>Сразу применяйте знания в жизни — для работы, хобби, творчества</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Сертификат об окончании</h3>
              <p>Получите документ, подтверждающий ваши новые навыки</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Дружелюбное сообщество</h3>
              <p>Общайтесь с единомышленниками и делитесь своими успехами</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Учитесь когда удобно</h3>
              <p>Занимайтесь в любое время — утром, вечером или в выходные</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="learning-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Готовы начать своё путешествие в мир ИИ?</h2>
            <p>Присоединяйтесь к тысячам людей, которые уже открыли для себя удивительные возможности искусственного интеллекта</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">Попробовать бесплатно</button>
              <button className="cta-btn secondary">Узнать подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;