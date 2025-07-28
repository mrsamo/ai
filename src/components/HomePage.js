import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Page.css';
import './HomePage.css';

const HomePage = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [promptText, setPromptText] = useState('');
  const [isListening, setIsListening] = useState(false);

  // 24 example prompts - memoized to prevent re-creation on every render
  const examplePrompts = useMemo(() => [
    {
      id: 1,
      image: 'https://placehold.co/300x200/FF6B6B/FFFFFF?text=AI+Art',
      text: 'Создай реалистичный портрет девушки в стиле ренессанс с современными элементами',
      author: 'ArtMaster',
      height: 'tall'
    },
    {
      id: 2,
      image: 'https://placehold.co/300x150/4ECDC4/FFFFFF?text=Code',
      text: 'Напиши функцию на Python для анализа данных из CSV файла',
      author: 'CodeGuru',
      height: 'medium'
    },
    {
      id: 3,
      image: 'https://placehold.co/300x180/45B7D1/FFFFFF?text=Design',
      text: 'Создай минималистичный дизайн логотипа для IT-стартапа',
      author: 'DesignPro',
      height: 'medium'
    },
    {
      id: 4,
      image: 'https://placehold.co/300x220/96CEB4/FFFFFF?text=Story',
      text: 'Напиши короткий рассказ о путешествии во времени в жанре научной фантастики',
      author: 'StoryTeller',
      height: 'tall'
    },
    {
      id: 5,
      image: 'https://placehold.co/300x140/FFEAA7/333333?text=Recipe',
      text: 'Предложи рецепт здорового завтрака на основе овсянки',
      author: 'ChefBot',
      height: 'short'
    },
    {
      id: 6,
      image: 'https://placehold.co/300x190/DDA0DD/FFFFFF?text=Music',
      text: 'Создай текст песни в стиле инди-рок про городскую жизнь',
      author: 'MusicMaker',
      height: 'medium'
    },
    {
      id: 7,
      image: 'https://placehold.co/300x160/98D8C8/FFFFFF?text=Business',
      text: 'Составь бизнес-план для онлайн-магазина экологичных товаров',
      author: 'BizExpert',
      height: 'medium'
    },
    {
      id: 8,
      image: 'https://placehold.co/300x210/F7DC6F/333333?text=Education',
      text: 'Объясни квантовую физику простыми словами для школьника',
      author: 'EduMaster',
      height: 'tall'
    },
    {
      id: 9,
      image: 'https://placehold.co/300x130/BB8FCE/FFFFFF?text=Fitness',
      text: 'Создай программу тренировок для начинающих на дому',
      author: 'FitCoach',
      height: 'short'
    },
    {
      id: 10,
      image: 'https://placehold.co/300x170/85C1E9/FFFFFF?text=Travel',
      text: 'Составь маршрут путешествия по Японии на 10 дней',
      author: 'TravelGuru',
      height: 'medium'
    },
    {
      id: 11,
      image: 'https://placehold.co/300x200/F8C471/333333?text=Marketing',
      text: 'Разработай стратегию продвижения в социальных сетях для кафе',
      author: 'MarketPro',
      height: 'tall'
    },
    {
      id: 12,
      image: 'https://placehold.co/300x145/82E0AA/FFFFFF?text=Tech',
      text: 'Объясни принципы работы блокчейна и криптовалют',
      author: 'TechExplainer',
      height: 'short'
    },
    {
      id: 13,
      image: 'https://placehold.co/300x185/E8DAEF/333333?text=Psychology',
      text: 'Дай советы по управлению стрессом и тревожностью',
      author: 'MindHelper',
      height: 'medium'
    },
    {
      id: 14,
      image: 'https://placehold.co/300x155/AED6F1/333333?text=Language',
      text: 'Создай план изучения английского языка за 6 месяцев',
      author: 'LangTeacher',
      height: 'medium'
    },
    {
      id: 15,
      image: 'https://placehold.co/300x225/F9E79F/333333?text=DIY',
      text: 'Инструкция по созданию мебели из поддонов своими руками',
      author: 'DIYMaster',
      height: 'tall'
    },
    {
      id: 16,
      image: 'https://placehold.co/300x135/D5A6BD/FFFFFF?text=Fashion',
      text: 'Создай капсульный гардероб для офисного работника',
      author: 'StyleGuru',
      height: 'short'
    },
    {
      id: 17,
      image: 'https://placehold.co/300x175/A9DFBF/333333?text=Garden',
      text: 'План создания огорода на балконе для новичков',
      author: 'GreenThumb',
      height: 'medium'
    },
    {
      id: 18,
      image: 'https://placehold.co/300x195/F4D03F/333333?text=Finance',
      text: 'Стратегия накопления денег и инвестирования для молодых',
      author: 'MoneyWise',
      height: 'medium'
    },
    {
      id: 19,
      image: 'https://placehold.co/300x165/C39BD3/FFFFFF?text=Health',
      text: 'Советы по поддержанию здорового образа жизни в офисе',
      author: 'HealthCoach',
      height: 'medium'
    },
    {
      id: 20,
      image: 'https://placehold.co/300x215/7FB3D3/FFFFFF?text=Photography',
      text: 'Техники фотографии портретов при естественном освещении',
      author: 'PhotoPro',
      height: 'tall'
    },
    {
      id: 21,
      image: 'https://placehold.co/300x140/F7DC6F/333333?text=Cooking',
      text: 'Рецепты быстрых ужинов для занятых людей',
      author: 'QuickChef',
      height: 'short'
    },
    {
      id: 22,
      image: 'https://placehold.co/300x180/85C1E9/FFFFFF?text=Productivity',
      text: 'Методы повышения продуктивности и тайм-менеджмента',
      author: 'ProductivityHack',
      height: 'medium'
    },
    {
      id: 23,
      image: 'https://placehold.co/300x200/F1948A/FFFFFF?text=Relationships',
      text: 'Советы по улучшению коммуникации в отношениях',
      author: 'RelationshipCoach',
      height: 'tall'
    },
    {
      id: 24,
      image: 'https://placehold.co/300x150/58D68D/FFFFFF?text=Creativity',
      text: 'Упражнения для развития креативного мышления',
      author: 'CreativeMind',
      height: 'medium'
    }
  ], []);

  // Shuffle array function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Load initial prompts
  useEffect(() => {
    const initialPrompts = shuffleArray(examplePrompts).slice(0, 12);
    setPrompts(initialPrompts);
  }, [examplePrompts]);

  // Load more prompts function
  const loadMorePrompts = useCallback(async () => {
    if (loading) return;
    
    setLoading(true);
    
    // Mock API call with 300ms delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const shuffledPrompts = shuffleArray(examplePrompts);
    const newPrompts = shuffledPrompts.slice(0, 12).map((prompt, index) => ({
      ...prompt,
      id: Date.now() + index // Ensure unique IDs
    }));
    
    setPrompts(prev => [...prev, ...newPrompts]);
    setLoading(false);
  }, [loading, examplePrompts]);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.offsetHeight;
      
      // Загружаем новые карточки за 600px до конца страницы
      if (scrollTop + windowHeight >= documentHeight - 600 && !loading) {
        loadMorePrompts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMorePrompts, loading]);

  // Mock voice input
  const handleVoiceInput = () => {
    setIsListening(!isListening);
    // Mock functionality - in real app would use Web Speech API
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        setPromptText('Создай изображение кота в космосе');
      }, 2000);
    }
  };

  return (
    <div className="homepage">
      {/* Main title */}
      <h1 className="main-title">Искуственный интеллект ответит на&nbsp;любой твой вопрос.<br/>
Главное&nbsp;&mdash; правильно спросить. Мы&nbsp;научим как.</h1>
      
      {/* Examples section */}
      <div className="examples-section">
        <div className="example-item bad-example">
          <div className="example-icon">❌</div>
          <div className="example-content">
            <div className="example-prompt">"Помоги с огурцами"</div>
            <div className="example-arrow">→</div>
            <div className="example-result">расплывчатый ответ</div>
          </div>
        </div>
        
        <div className="example-item good-example">
          <div className="example-icon">✅</div>
          <div className="example-content">
            <div className="example-prompt">"Диагностируй болезнь огурцов по описанию: желтые листья снизу, полив ежедневный, грунт суглинок"</div>
            <div className="example-arrow">→</div>
            <div className="example-result">точное решение</div>
          </div>
        </div>
        
        <div className="examples-footer">
          <strong>Мы показываем, в чем разница!</strong>
        </div>
      </div>
      
      {/* Top three blocks */}
      <div className="top-blocks">
        <div className="top-block">
          <img src="https://placehold.co/120x80/4ECDC4/FFFFFF?text=📚" alt="Обучение" />
          <span>Вопросы</span>
        </div>
        <Link to="/community" className="top-block">
          <img src="https://placehold.co/120x80/FF6B6B/FFFFFF?text=🎉" alt="События" />
          <span>Комьюнити</span>
        </Link>
        <div className="top-block">
          <img src="https://placehold.co/120x80/45B7D1/FFFFFF?text=⭐" alt="Лучшее" />
          <span>Обучение</span>
        </div>
      </div>

      {/* Prompt input area */}
      <div className="prompt-input-section">
        <h2>Введите свой вопрос, если знаете, что хотите</h2>
        <div className="prompt-input-container">
          <input
            type="text"
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            placeholder="Опишите, что вы хотите создать..."
            className="prompt-input"
          />
          <button 
            className={`voice-button ${isListening ? 'listening' : ''}`}
            onClick={handleVoiceInput}
          >
            🎤
          </button>
        </div>
        {isListening && <div className="listening-indicator">Слушаю...</div>}
      </div>

      {/* Prompts feed */}
      <div className="prompts-section">
        <h2>Подборка для вас</h2>
        <div className="prompts-grid">
          {prompts.map((prompt) => (
            <Link
              key={prompt.id}
              to={`/prompt/${prompt.id}`}
              className={`prompt-card ${prompt.height}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="prompt-image-wrapper">
                <img src={prompt.image} alt="Prompt" className="prompt-image" />
              </div>
              <div className="prompt-content">
                <p className="prompt-text">{prompt.text}</p>
                <span className="prompt-author">@{prompt.author}</span>
              </div>
            </Link>
          ))}
        </div>
        
        {loading && (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Загружаем еще промпты...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;