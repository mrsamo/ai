import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PromptPage.css';

const PromptPage = () => {
  const { id } = useParams();
  const [language, setLanguage] = useState('По умолчанию');
  const [tone, setTone] = useState('По умолчанию');
  const [style, setStyle] = useState('По умолчанию');
  const [newTag, setNewTag] = useState('');

  // Данные промптов из HomePage
  const prompts = {
    1: {
      title: "Что приготовить из продуктов в холодильнике",
      description: "Создает рецепты блюд на основе фотографии ваших продуктов",
      author: "Кулинарный Бот",
      authorHandle: "@CookingBot",
      avatar: "https://placehold.co/40x40/6366f1/white?text=КБ",
      image: "https://placehold.co/400x300/1f2937/white?text=КУЛИНАРНЫЙ+ПОМОЩНИК",
      uses: "371К",
      saved: "1.1К",
      rating: 4.5,
      creationDate: "14/04/2023",
      tags: ["кулинария", "рецепты"],
      content: `Сфотографируйте продукты в вашем холодильнике или на столе, и я предложу рецепт блюда.

Что я умею:
- Распознавать продукты на фото
- Предлагать рецепты с пошаговыми инструкциями
- Учитывать ваши предпочтения и ограничения
- Адаптировать сложность под ваши навыки

Для лучшего результата укажите:
- Количество порций
- Время приготовления
- Уровень сложности
- Особые требования (диета, аллергии)
- Доступная кухонная техника

Пример: "Что приготовить из курицы, картошки и лука на 4 человека за 30 минут, простое блюдо"`,
      reviews: [
        {
          name: "Марина Петровна",
          age: "54 года",
          location: "Самара",
          avatar: "https://placehold.co/40x40/8b5cf6/white?text=МП",
          rating: 5,
          comment: "Девочки, это просто находка! Вчера показала фото холодильника - выдал рецепт ленивых голубцов из того что было. Семья в восторге! Правда пришлось добавить \"без капусты\" в настройки, а то упорно её искал 😄",
          timeAgo: "2 дня назад",
          likes: 12
        },
        {
          name: "Олег",
          age: "42 года", 
          location: "Москва",
          avatar: "https://placehold.co/40x40/3b82f6/white?text=О",
          rating: 2,
          comment: "Фигня полная. Показал курицу, картошку и майонез - предложил какую-то запеканку с бешамелем. Откуда мне взять бешамель?? Обычную жареную картошку с курицей не может предложить?",
          timeAgo: "1 день назад",
          likes: 3
        },
        {
          name: "Светлана",
          age: "38 лет",
          location: "Екатеринбург", 
          avatar: "https://placehold.co/40x40/10b981/white?text=С",
          rating: 5,
          comment: "@Олег, так надо в настройках выбирать \"простые блюда\" или \"базовые навыки\". У меня муж тоже ворчал, пока я ему не настроила \"мужские рецепты\" - теперь сам готовит!",
          timeAgo: "1 день назад",
          likes: 8
        },
        {
          name: "Бабушка Галя",
          age: "67 лет",
          location: "Краснодар",
          avatar: "https://placehold.co/40x40/f59e0b/white?text=БГ",
          rating: 4,
          comment: "А можно чтобы он писал граммы ложками и стаканами? Весов у меня нет, да и не нужны они",
          timeAgo: "1 день назад", 
          likes: 15
        },
        {
          name: "Олег",
          age: "42 года",
          location: "Москва",
          avatar: "https://placehold.co/40x40/3b82f6/white?text=О",
          rating: 3,
          comment: "@Светлана спасибо, попробую. Но все равно, раньше в книге рецептов смотрел и нормально было",
          timeAgo: "1 день назад",
          likes: 1
        },
        {
          name: "Анна К.",
          age: "29 лет",
          location: "СПб",
          avatar: "https://placehold.co/40x40/ec4899/white?text=АК",
          rating: 5,
          comment: "Лайфхак: добавляйте в промпт \"у меня есть мультиварка\"! Рецепты становятся вообще элементарными, закинул и забыл 👍",
          timeAgo: "1 день назад",
          likes: 22
        },
        {
          name: "Марина Петровна",
          age: "54 года",
          location: "Самара",
          avatar: "https://placehold.co/40x40/8b5cf6/white?text=МП",
          rating: 5,
          comment: "@Бабушка Галя, поддерживаю! Я в конце дописываю \"напиши в ложках и стаканах\" и все отлично переводит",
          timeAgo: "1 день назад",
          likes: 9
        },
        {
          name: "Игорь Николаевич",
          age: "61 год",
          location: "Воронеж",
          avatar: "https://placehold.co/40x40/6366f1/white?text=ИН",
          rating: 4,
          comment: "Вчера внучка показала эту штуку. Сфотографировал остатки гречки, яйца и сосиски - получился рецепт \"гречаники\". Вкусно получилось, но жена смеялась что я с телефоном на кухне 😁",
          timeAgo: "1 день назад",
          likes: 18
        },
        {
          name: "Настя 2007",
          age: "16 лет",
          location: "Москва",
          avatar: "https://placehold.co/40x40/f97316/white?text=Н",
          rating: 4,
          comment: "Ребят, а кто-нибудь пробовал добавлять \"для похудения\" или \"ПП рецепт\"? Реально считает калории или просто убирает масло?))",
          timeAgo: "1 день назад",
          likes: 5
        },
        {
          name: "Светлана",
          age: "38 лет",
          location: "Екатеринбург",
          avatar: "https://placehold.co/40x40/10b981/white?text=С",
          rating: 5,
          comment: "@Настя 2007, работает! Я пишу \"до 400 ккал на порцию\" и реально подбирает. Проверяла потом в приложении - сходится ±50 ккал",
          timeAgo: "1 день назад",
          likes: 7
        },
        {
          name: "Михаил",
          age: "35 лет",
          location: "Новосибирск",
          avatar: "https://placehold.co/40x40/84cc16/white?text=М",
          rating: 4,
          comment: "Народ, обнаружил баг: если сфотать пустой холодильник, предлагает заказать продукты 🤣 Но если серьезно - добавьте в промпт \"есть базовые специи и масло\", а то иногда рецепты совсем пресные выдает",
          timeAgo: "1 день назад",
          likes: 11
        },
        {
          name: "Бабушка Галя",
          age: "67 лет",
          location: "Краснодар",
          avatar: "https://placehold.co/40x40/f59e0b/white?text=БГ",
          rating: 5,
          comment: "@Марина Петровна, спасибо милая! Попробовала - работает! Теперь бы еще чтобы голосом рецепт читал, а то очки искать пока готовлю...",
          timeAgo: "1 день назад",
          likes: 13
        },
        {
          name: "Владимир",
          age: "45 лет",
          location: "Казань",
          avatar: "https://placehold.co/40x40/dc2626/white?text=В",
          rating: 5,
          comment: "Пацаны, кто на диете - пишите \"белковое блюдо\". Реально работает, вчера из куриной грудки и творога такую запеканку выдал - качки обзавидуются 💪",
          timeAgo: "1 день назад",
          likes: 16
        },
        {
          name: "Ольга Викторовна",
          age: "52 года",
          location: "Омск",
          avatar: "https://placehold.co/40x40/7c3aed/white?text=ОВ",
          rating: 2,
          comment: "У меня не получается :( Фотографирую продукты, а он пишет \"не могу распознать\". Может плохая камера?",
          timeAgo: "1 день назад",
          likes: 2
        },
        {
          name: "Анна К.",
          age: "29 лет",
          location: "СПб",
          avatar: "https://placehold.co/40x40/ec4899/white?text=АК",
          rating: 5,
          comment: "@Ольга Викторовна, попробуйте продукты на стол выложить, на светлом фоне. И чтобы не кучей, а рядком. У меня тоже сначала не распознавал фото холодильника",
          timeAgo: "1 день назад",
          likes: 6
        },
        {
          name: "Дмитрий",
          age: "38 лет",
          location: "Тула",
          avatar: "https://placehold.co/40x40/059669/white?text=Д",
          rating: 5,
          comment: "Короче, методом тыка нашел идеальный промпт:\n\"Что приготовить из [продукты]. Блюдо на [количество] человек, готовить не более [время] минут, сложность для новичка, из кухонной техники есть [плита/мультиварка/духовка]\"\nСтавьте лайк, кому помогло!",
          timeAgo: "1 день назад",
          likes: 45
        },
        {
          name: "Марина Петровна",
          age: "54 года",
          location: "Самара",
          avatar: "https://placehold.co/40x40/8b5cf6/white?text=МП",
          rating: 5,
          comment: "@Дмитрий, золотой вы человек! Сохранила ваш комментарий. А я еще добавляю \"подойдет для заморозки\" - готовлю впрок на неделю",
          timeAgo: "1 день назад",
          likes: 8
        },
        {
          name: "Олег",
          age: "42 года",
          location: "Москва",
          avatar: "https://placehold.co/40x40/3b82f6/white?text=О",
          rating: 4,
          comment: "@Дмитрий попробовал твой промпт - уже лучше! Но все равно какие-то заморочки предлагает. Добавил \"максимально простое\" - вот теперь норм",
          timeAgo: "1 день назад",
          likes: 4
        },
        {
          name: "Teenage_mom",
          age: "24 года",
          location: "Ростов",
          avatar: "https://placehold.co/40x40/f472b6/white?text=TM",
          rating: 3,
          comment: "Девчонки хелп! Ребенок аллергик, как заставить эту штуку исключать молочку из всех рецептов?? Каждый раз писать устала",
          timeAgo: "1 день назад",
          likes: 3
        },
        {
          name: "Светлана",
          age: "38 лет",
          location: "Екатеринбург",
          avatar: "https://placehold.co/40x40/10b981/white?text=С",
          rating: 5,
          comment: "@Teenage_mom, создай шаблон промпта! Нажми три точки -> сохранить промпт -> и там пропиши все ограничения. Потом просто выбираешь из сохраненных",
          timeAgo: "1 день назад",
          likes: 12
        },
        {
          name: "Валерий Степанович",
          age: "63 года",
          location: "Уфа",
          avatar: "https://placehold.co/40x40/0ea5e9/white?text=ВС",
          rating: 4,
          comment: "Жена в больнице, пришлось самому готовить. Эта программа спасла! Правда первый блин комом - не понял что значит \"пассеровать\" лук. Теперь дописываю \"объясняй кулинарные термины простым языком\"",
          timeAgo: "1 день назад",
          likes: 19
        },
        {
          name: "Настя 2007",
          age: "16 лет",
          location: "Москва",
          avatar: "https://placehold.co/40x40/f97316/white?text=Н",
          rating: 5,
          comment: "@Валерий Степанович, оооо это сильно! Возьму на заметку для папы 😂",
          timeAgo: "1 день назад",
          likes: 7
        },
        {
          name: "Кулинар_про",
          age: "31 год",
          location: "Москва",
          avatar: "https://placehold.co/40x40/ef4444/white?text=КП",
          rating: 3,
          comment: "Как профессиональный повар скажу - для любителей пойдет. Но иногда такую дичь советует... Вчера предложил добавить мед в пасту карбонара 🤦‍♂️",
          timeAgo: "1 день назад",
          likes: 5
        },
        {
          name: "Михаил",
          age: "35 лет",
          location: "Новосибирск",
          avatar: "https://placehold.co/40x40/84cc16/white?text=М",
          rating: 4,
          comment: "@Кулинар_про, так ты добавь \"классический рецепт\" или \"без экспериментов\". ИИ же не знает что ты повар",
          timeAgo: "1 день назад",
          likes: 8
        },
        {
          name: "Елена",
          age: "41 год",
          location: "Волгоград",
          avatar: "https://placehold.co/40x40/a855f7/white?text=Е",
          rating: 5,
          comment: "Хочу поделиться находкой! Пишите \"с фото каждого шага\" - выдает прям пошаговые картинки. Очень удобно когда не знаешь как должно выглядеть",
          timeAgo: "1 день назад",
          likes: 14
        },
        {
          name: "Бабушка Галя",
          age: "67 лет",
          location: "Краснодар",
          avatar: "https://placehold.co/40x40/f59e0b/white?text=БГ",
          rating: 5,
          comment: "@Елена, спасибо деточка! А я вот приспособилась внучке отправлять что купить. Фотографирую что приготовил бот, она мне продукты покупает точно под рецепт",
          timeAgo: "1 день назад",
          likes: 11
        },
        {
          name: "Дмитрий",
          age: "38 лет",
          location: "Тула",
          avatar: "https://placehold.co/40x40/059669/white?text=Д",
          rating: 5,
          comment: "Обновляю свой промпт! Версия 2.0:\n\"Что приготовить из [продукты]. Важно: [ограничения по времени/диете/навыкам]. Есть базовые специи и масло. Объясняй простым языком с фото шагов. Напиши что можно заменить если чего-то не хватает\"\n\nЮзайте, не благодарите 😎",
          timeAgo: "1 день назад",
          likes: 67
        },
        {
          name: "Марина Петровна",
          age: "54 года",
          location: "Самара",
          avatar: "https://placehold.co/40x40/8b5cf6/white?text=МП",
          rating: 5,
          comment: "@Дмитрий, вы наш герой! Может создадите отдельную тему с промптами? А то в комментах теряется",
          timeAgo: "1 день назад",
          likes: 15
        },
        {
          name: "Администратор",
          age: "",
          location: "",
          avatar: "https://placehold.co/40x40/1f2937/white?text=👑",
          rating: 5,
          comment: "@Марина Петровна, отличная идея! Создали раздел \"Лучшие промпты от сообщества\". Дмитрий, ждем вас там первым автором! 🎉",
          timeAgo: "1 день назад",
          likes: 23
        },
        {
          name: "Олег",
          age: "42 года",
          location: "Москва",
          avatar: "https://placehold.co/40x40/3b82f6/white?text=О",
          rating: 4,
          comment: "Ну вот, теперь норм тема. Подписался на обновления. Спасибо всем кто помогал!",
          timeAgo: "1 день назад",
          likes: 6
        }
      ],
      ratingBreakdown: {
        5: 50,
        4: 50,
        3: 0,
        2: 0,
        1: 0
      }
    },
    2: {
      title: "Генератор маркетинговых стратегий",
      description: "Создает комплексные маркетинговые стратегии для любого бизнеса",
      author: "Маркетинг Эксперт",
      authorHandle: "@MarketingExpert",
      avatar: "https://placehold.co/40x40/ef4444/white?text=МЭ",
      image: "https://placehold.co/400x300/3b82f6/white?text=МАРКЕТИНГ+ИИ",
      uses: "245К",
      saved: "892",
      rating: 4.3,
      creationDate: "22/03/2023",
      tags: ["маркетинг", "бизнес"],
      content: "Создай детальную маркетинговую стратегию для [ТИП БИЗНЕСА] с целевой аудиторией [ЦЕЛЕВАЯ АУДИТОРИЯ]...",
      reviews: [],
      ratingBreakdown: { 5: 40, 4: 45, 3: 10, 2: 3, 1: 2 }
    },
    3: {
      title: "Помощник по ревью кода",
      description: "Профессиональное ревью кода с предложениями и улучшениями",
      author: "Алекс Чен",
      authorHandle: "@AlexDev",
      avatar: "https://placehold.co/40x40/10b981/white?text=АЧ",
      image: "https://placehold.co/400x300/059669/white?text=РЕВЬЮ+КОДА",
      uses: "189К",
      saved: "567",
      rating: 4.7,
      creationDate: "10/05/2023",
      tags: ["программирование", "код"],
      content: "Проанализируй следующий код и предоставь детальную обратную связь...",
      reviews: [],
      ratingBreakdown: { 5: 70, 4: 25, 3: 3, 2: 1, 1: 1 }
    }
  };

  // Если промпт не найден, создаем дефолтный
  const prompt = prompts[id] || {
    title: `Промпт ${id}`,
    description: `Описание промпта ${id}`,
    author: "Неизвестный автор",
    authorHandle: "@unknown",
    avatar: "https://placehold.co/40x40/6b7280/white?text=?",
    image: "https://placehold.co/400x300/6b7280/white?text=ПРОМПТ",
    uses: "0",
    saved: "0",
    rating: 0,
    creationDate: "01/01/2023",
    tags: ["общее"],
    content: `Это содержимое промпта ${id}`,
    reviews: [],
    ratingBreakdown: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(prompt.content);
    alert('Промпт скопирован в буфер обмена!');
  };

  const handleOpenChatGPT = () => {
    const encodedPrompt = encodeURIComponent(prompt.content);
    window.open(`https://chat.openai.com/?q=${encodedPrompt}`, '_blank');
  };

  const handleOpenGemini = () => {
    const encodedPrompt = encodeURIComponent(prompt.content);
    window.open(`https://gemini.google.com/chat?q=${encodedPrompt}`, '_blank');
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }
    
    return stars;
  };

  return (
    <div className="prompt-page">
      <div className="prompt-page__container">
        <div className="prompt-page__main">
          <div className="prompt-page__header">
            <Link to="/" className="prompt-page__back">← Назад на главную</Link>
            <h1 className="prompt-page__title">{prompt.title}</h1>
          </div>

          <div className="prompt-page__content">
            <div className="prompt-page__image">
              <img src={prompt.image} alt={prompt.title} />
            </div>

            <div className="prompt-page__meta">
              <div className="prompt-page__author">
                <img src={prompt.avatar} alt={prompt.author} className="author-avatar" />
                <div className="author-info">
                  <span className="author-name">{prompt.author}</span>
                  <span className="author-handle">{prompt.authorHandle}</span>
                </div>
                <button className="follow-btn">Подписаться →</button>
              </div>

              <div className="prompt-page__stats">
                <div className="stat">
                  <span className="stat-number">{prompt.uses}</span>
                  <span className="stat-label">Использований</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{prompt.saved}</span>
                  <span className="stat-label">Сохранено</span>
                </div>
              </div>

              <div className="prompt-page__date">
                Дата создания: {prompt.creationDate}
              </div>
            </div>

            <div className="prompt-page__description">
              <p>{prompt.description}</p>
            </div>

            <div className="prompt-page__ratings">
              <div className="rating-summary">
                <div className="rating-score">
                  <span className="score">{prompt.rating}</span>
                  <div className="stars">
                    {renderStars(prompt.rating)}
                  </div>
                </div>
                
                <div className="rating-breakdown">
                  {[5, 4, 3, 2, 1].map(star => (
                    <div key={star} className="rating-row">
                      <span className="rating-label">{star} звезд</span>
                      <div className="rating-bar">
                        <div 
                          className="rating-fill" 
                          style={{ width: `${prompt.ratingBreakdown[star]}%` }}
                        ></div>
                      </div>
                      <span className="rating-percent">{prompt.ratingBreakdown[star]}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="prompt-page__reviews">
              <div className="reviews-header">
                <h3>Лучшие отзывы</h3>
                <button className="leave-review-btn">Оставить отзыв</button>
              </div>
              
              {prompt.reviews.map((review, index) => (
                <div key={index} className="review">
                  <div className="review-header">
                    <img src={review.avatar} alt={review.name} className="review-avatar" />
                    <div className="review-info">
                      <div className="review-name-location">
                        <span className="review-name">{review.name}</span>
                        {review.age && review.location && (
                          <span className="review-details">{review.age}, {review.location}</span>
                        )}
                      </div>
                      <div className="review-stars">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                  <div className="review-footer">
                    <button className="review-like">👍 {review.likes}</button>
                    <span className="review-report">Пожаловаться</span>
                    <span className="review-time">{review.timeAgo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="prompt-page__sidebar">
          <button className="use-prompt-btn">Использовать промпт</button>

          <div className="edit-tags">
            <h3>Редактировать теги <span className="info-icon">ⓘ</span></h3>
            <div className="tags-list">
              {prompt.tags.map((tag, index) => (
                <span key={index} className="tag">#{tag}</span>
              ))}
            </div>
            <input 
              type="text" 
              placeholder="Введите тег" 
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="tag-input"
            />
          </div>

          <div className="prompt-settings">
            <div className="setting">
              <label>Язык</label>
              <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option>По умолчанию</option>
                <option>Русский</option>
                <option>Английский</option>
                <option>Испанский</option>
              </select>
            </div>

            <div className="setting">
              <label>Тон</label>
              <select value={tone} onChange={(e) => setTone(e.target.value)}>
                <option>По умолчанию</option>
                <option>Профессиональный</option>
                <option>Неформальный</option>
                <option>Дружелюбный</option>
              </select>
            </div>

            <div className="setting">
              <label>Стиль</label>
              <select value={style} onChange={(e) => setStyle(e.target.value)}>
                <option>По умолчанию</option>
                <option>Креативный</option>
                <option>Технический</option>
                <option>Академический</option>
              </select>
            </div>
          </div>

          <button className="send-prompt-btn" onClick={handleCopyPrompt}>
            📋 Отправить промпт
          </button>

          <div className="powered-by">
            Работает на 🤖 ChatGPT
            <button className="copy-btn">Копировать</button>
          </div>

          <div className="external-links">
            <p>Или открыть в:</p>
            <button className="external-btn chatgpt" onClick={handleOpenChatGPT}>
              🤖 Копировать и открыть ChatGPT
            </button>
            <button className="external-btn gemini" onClick={handleOpenGemini}>
              💎 Копировать и открыть Gemini
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptPage;