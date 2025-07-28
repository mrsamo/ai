import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Page.css';
import './HomePage.css';

const HomePage = () => {
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [promptText, setPromptText] = useState('');
  const [isListening, setIsListening] = useState(false);

  // New prompts data - memoized to prevent re-creation on every render
  const examplePrompts = useMemo(() => [
    {
      id: 1,
      image: 'https://placehold.co/400x300/16a34a/white?text=ДИАГНОСТИКА+РАСТЕНИЙ',
      text: 'Диагностика болезней растений по фото',
      author: 'Садовод Иван',
      height: 'tall'
    },
    {
      id: 2,
      image: 'https://placehold.co/400x300/991b1b/white?text=ЖАЛОБЫ+И+ЗАЯВЛЕНИЯ',
      text: 'Составление жалоб и заявлений в #организация',
      author: 'Юрист Анна',
      height: 'medium'
    },
    {
      id: 3,
      image: 'https://placehold.co/400x300/0284c7/white?text=ДОМАШНИЕ+ЗАДАНИЯ',
      text: 'Помощник с домашними заданиями по #предмет',
      author: 'Учитель Мария',
      height: 'tall'
    },
    {
      id: 4,
      image: 'https://placehold.co/400x300/ea580c/white?text=РЕМОНТ+ТЕХНИКИ',
      text: 'Диагностика поломки #техника по симптомам',
      author: 'Мастер Сергей',
      height: 'medium'
    },
    {
      id: 5,
      image: 'https://placehold.co/400x300/047857/white?text=СЕМЕЙНЫЙ+БЮДЖЕТ',
      text: 'Планировщик семейного бюджета на #период',
      author: 'Финансист Алексей',
      height: 'short'
    },
    {
      id: 6,
      image: 'https://placehold.co/400x300/65a30d/white?text=ДАЧНЫЙ+КАЛЕНДАРЬ',
      text: 'Календарь дачных работ для #регион',
      author: 'Агроном Петр',
      height: 'tall'
    },
    {
      id: 7,
      image: 'https://placehold.co/400x300/dc2626/white?text=МЕДИЦИНСКИЕ+АНАЛИЗЫ',
      text: 'Расшифровка медицинских анализов простым языком',
      author: 'Доктор Елена',
      height: 'medium'
    },
    {
      id: 8,
      image: 'https://placehold.co/400x300/9333ea/white?text=ПОДБОР+ОДЕЖДЫ',
      text: 'Подбор #тип_одежды по фото фигуры и стилю',
      author: 'Стилист Анна',
      height: 'medium'
    },
    {
      id: 9,
      image: 'https://placehold.co/400x300/0284c7/white?text=ПЛАНИРОВЩИК+ПОЕЗДОК',
      text: 'Планировщик путешествия в #город на #дни',
      author: 'Путешественник Максим',
      height: 'short'
    },
    {
      id: 10,
      image: 'https://placehold.co/400x300/6d28d9/white?text=ВЫБОР+ТЕХНИКИ',
      text: 'Помощник по выбору #техника для дома',
      author: 'Консультант Игорь',
      height: 'medium'
    },
    {
      id: 11,
      image: 'https://placehold.co/400x300/ea580c/white?text=СОСТАВЛЕНИЕ+РЕЗЮМЕ',
      text: 'Составление резюме для #профессия',
      author: 'HR-эксперт Ольга',
      height: 'tall'
    },
    {
      id: 12,
      image: 'https://placehold.co/300x200/FF6B6B/FFFFFF?text=AI+Art',
      text: 'Создай реалистичный портрет девушки в стиле ренессанс с современными элементами',
      author: 'ArtMaster',
      height: 'short'
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
          <img src="https://placehold.co/120x80/4ECDC4/FFFFFF?text=📚" alt="Вопросы" />
          <span>Вопросы</span>
        </div>
        <Link to="/community" className="top-block">
          <img src="https://placehold.co/120x80/FF6B6B/FFFFFF?text=🎉" alt="Комьюнити" />
          <span>Комьюнити</span>
        </Link>
        <Link to="/learning" className="top-block">
          <img src="https://placehold.co/120x80/45B7D1/FFFFFF?text=⭐" alt="Обучение" />
          <span>Обучение</span>
        </Link>
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
                <Link
                  to={`/user/${prompt.author.replace(/\s+/g, '').toLowerCase()}`}
                  className="prompt-author"
                  onClick={(e) => e.stopPropagation()}
                >
                  @{prompt.author}
                </Link>
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