import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './PromptPage.css';

const PromptPage = () => {
  const { id } = useParams();
  const [placeholderInputs, setPlaceholderInputs] = useState({});

  // Новые данные промптов
  const prompts = {
    1: {
      title: "Диагностика болезней растений по фото",
      description: "Определяет заболевания огородных культур и предлагает методы лечения",
      author: "Садовод Иван",
      authorHandle: "@garden_expert",
      avatar: "https://placehold.co/40x40/22c55e/white?text=СИ",
      image: "https://placehold.co/400x300/16a34a/white?text=ДИАГНОСТИКА+РАСТЕНИЙ",
      uses: "287К",
      saved: "2.3К",
      rating: 4.3,
      creationDate: "15/06/2025",
      tags: ["сад", "огород", "болезни растений"],
      content: `Ты опытный агроном с 20-летним стажем. Проанализируй болезнь растения и дай точный диагноз с планом лечения.

Культура: #культура
Симптомы: #симптомы
Предпочтительный тип обработки: #тип_обработки

Дай подробный ответ:
1. Точный диагноз заболевания
2. Причины возникновения
3. План лечения пошагово
4. Профилактические меры
5. Сроки выздоровления

Отвечай простым языком, как опытный садовод соседу.`,
      reviews: [
        {
          name: "Тамара Ивановна",
          age: "62 года",
          location: "Воронеж",
          avatar: "https://placehold.co/40x40/ef4444/white?text=ТИ",
          rating: 5,
          comment: "Спасла мои помидоры! Показала фото - сразу определил фитофтору и дал рецепт раствора из молочной сыворотки. Через неделю растения ожили!",
          timeAgo: "3 дня назад",
          likes: 18
        },
        {
          name: "Геннадий",
          age: "58 лет",
          location: "Подмосковье",
          avatar: "https://placehold.co/40x40/3b82f6/white?text=Г",
          rating: 2,
          comment: "Ерунда какая-то. Огурцы желтеют - говорит мучнистая роса. А у меня просто перелив был! 40 лет в огороде, сам знаю что к чему",
          timeAgo: "2 дня назад",
          likes: 3
        },
        {
          name: "Людмила",
          age: "45 лет",
          location: "Саратов",
          avatar: "https://placehold.co/40x40/8b5cf6/white?text=Л",
          rating: 5,
          comment: "@Геннадий, а вы условия выращивания указывали? Я всегда пишу как поливаю и чем удобряю - диагноз точный получается",
          timeAgo: "2 дня назад",
          likes: 12
        },
        {
          name: "Валентина",
          age: "67 лет",
          location: "Курск",
          avatar: "https://placehold.co/40x40/f59e0b/white?text=В",
          rating: 4,
          comment: "Хорошо определяет, но названия препаратов такие заумные. Может добавить \"народные методы\" для нас, старых?",
          timeAgo: "2 дня назад",
          likes: 25
        },
        {
          name: "Дачник007",
          age: "35 лет",
          location: "Москва",
          avatar: "https://placehold.co/40x40/10b981/white?text=Д",
          rating: 5,
          comment: "Ребята, лайфхак! Добавляйте \"с фото до и после лечения\" - показывает как должно выглядеть здоровое растение 👍",
          timeAgo: "1 день назад",
          likes: 31
        }
      ],
      ratingBreakdown: {
        5: 65,
        4: 25,
        3: 7,
        2: 2,
        1: 1
      }
    },
    2: {
      title: "Составление жалоб и заявлений в #организация",
      description: "Помогает написать грамотное заявление в любую организацию",
      author: "Юрист Анна",
      authorHandle: "@law_helper",
      avatar: "https://placehold.co/40x40/dc2626/white?text=ЮА",
      image: "https://placehold.co/400x300/991b1b/white?text=ЖАЛОБЫ+И+ЗАЯВЛЕНИЯ",
      uses: "456К",
      saved: "3.7К",
      rating: 4.6,
      creationDate: "15/02/2025",
      tags: ["документы", "права", "жалобы"],
      content: `Ты опытный юрист. Составь грамотное заявление или жалобу с соблюдением всех юридических норм.

Организация: #организация
Суть проблемы: #проблема
Мои требования: #требования

Составь официальное заявление:
1. Правильная шапка документа
2. Изложение фактов
3. Ссылки на законы
4. Четкие требования
5. Подпись и дата

Используй официальный деловой стиль, но понятный обычному человеку.`,
      reviews: [
        {
          name: "Николай Петрович",
          age: "54 года",
          location: "Тверь",
          avatar: "https://placehold.co/40x40/6366f1/white?text=НП",
          rating: 5,
          comment: "Отличная штука! Составил жалобу на УК - через неделю батареи заработали. Главное все ссылки на законы правильные",
          timeAgo: "5 дней назад",
          likes: 23
        },
        {
          name: "Ирина",
          age: "41 год",
          location: "Челябинск",
          avatar: "https://placehold.co/40x40/ec4899/white?text=И",
          rating: 4,
          comment: "Помогло с возвратом бракованного телефона. Правда пришлось немного подредактировать под свою ситуацию",
          timeAgo: "4 дня назад",
          likes: 15
        },
        {
          name: "Пенсионер",
          age: "71 год",
          location: "Рязань",
          avatar: "https://placehold.co/40x40/f97316/white?text=П",
          rating: 3,
          comment: "Слишком много юридических терминов. Нельзя ли попроще для пожилых людей?",
          timeAgo: "3 дня назад",
          likes: 8
        },
        {
          name: "Елена Владимировна",
          age: "47 лет",
          location: "Калуга",
          avatar: "https://placehold.co/40x40/a855f7/white?text=ЕВ",
          rating: 5,
          comment: "@Пенсионер добавьте в конце \"простым языком без юридических терминов\" - работает!",
          timeAgo: "3 дня назад",
          likes: 19
        },
        {
          name: "Максим",
          age: "33 года",
          location: "СПб",
          avatar: "https://placehold.co/40x40/059669/white?text=М",
          rating: 5,
          comment: "Использую постоянно на работе. Очень экономит время, особенно когда нужно написать претензию поставщику",
          timeAgo: "2 дня назад",
          likes: 11
        }
      ],
      ratingBreakdown: {
        5: 70,
        4: 20,
        3: 8,
        2: 1,
        1: 1
      }
    },
    3: {
      title: "Помощник с домашними заданиями по #предмет",
      description: "Объясняет школьные задачи простым языком и помогает разобраться",
      author: "Учитель Мария",
      authorHandle: "@school_helper",
      avatar: "https://placehold.co/40x40/0ea5e9/white?text=УМ",
      image: "https://placehold.co/400x300/0284c7/white?text=ДОМАШНИЕ+ЗАДАНИЯ",
      uses: "623К",
      saved: "4.1К",
      rating: 4.4,
      creationDate: "08/09/2025",
      tags: ["образование", "дети", "школа"],
      content: `Ты опытный учитель с 15-летним стажем. Объясни школьное задание простым и понятным языком.

Предмет: #предмет
Класс: #класс
Тема: #тема

Дай подробное объяснение:
1. Суть темы простыми словами
2. Пошаговое решение
3. Почему именно так решается
4. Типичные ошибки и как их избежать
5. Похожие примеры для закрепления

Объясняй как терпеливый учитель, используй аналогии из жизни.`,
      reviews: [
        {
          name: "Светлана Мама",
          age: "39 лет",
          location: "Краснодар",
          avatar: "https://placehold.co/40x40/22c55e/white?text=СМ",
          rating: 5,
          comment: "Спасение для родителей! Сын в 7 классе, я уже ничего не помню из алгебры. Теперь сначала сама разбираюсь тут, потом ему объясняю",
          timeAgo: "1 день назад",
          likes: 34
        },
        {
          name: "Андрей Папа",
          age: "42 года",
          location: "Нижний Новгород",
          avatar: "https://placehold.co/40x40/7c3aed/white?text=АП",
          rating: 4,
          comment: "Хорошо объясняет, но иногда слишком просто. Дочка в 10 классе, а объясняет как для 5 класса",
          timeAgo: "1 день назад",
          likes: 7
        },
        {
          name: "Бабушка Вера",
          age: "68 лет",
          location: "Тула",
          avatar: "https://placehold.co/40x40/f59e0b/white?text=БВ",
          rating: 5,
          comment: "Внук приносит задачи - я ничего не понимаю. А тут все так ясно написано! Теперь сама могу помочь 😊",
          timeAgo: "1 день назад",
          likes: 28
        },
        {
          name: "Школьница Аня",
          age: "14 лет",
          location: "Москва",
          avatar: "https://placehold.co/40x40/ec4899/white?text=А",
          rating: 3,
          comment: "Нормально, но лучше бы сразу ответ давал, а не объяснял 😅 Хотя мама довольна что я хоть что-то понимаю",
          timeAgo: "1 день назад",
          likes: 12
        },
        {
          name: "Репетитор Ольга",
          age: "35 лет",
          location: "Екатеринбург",
          avatar: "https://placehold.co/40x40/84cc16/white?text=РО",
          rating: 5,
          comment: "Как преподаватель скажу - очень качественные объяснения. Иногда сама использую готовые схемы для уроков",
          timeAgo: "1 день назад",
          likes: 16
        }
      ],
      ratingBreakdown: {
        5: 55,
        4: 30,
        3: 12,
        2: 2,
        1: 1
      }
    },
    4: {
      title: "Диагностика поломки #техника по симптомам",
      description: "Определяет неисправности бытовой техники и предлагает способы ремонта",
      author: "Мастер Сергей",
      authorHandle: "@repair_master",
      avatar: "https://placehold.co/40x40/f97316/white?text=МС",
      image: "https://placehold.co/400x300/ea580c/white?text=РЕМОНТ+ТЕХНИКИ",
      uses: "189К",
      saved: "1.8К",
      rating: 4.1,
      creationDate: "12/04/2025",
      tags: ["ремонт", "техника", "дом"],
      content: `Ты опытный мастер по ремонту бытовой техники с 20-летним стажем. Помоги диагностировать поломку.

Техника: #техника
Симптомы: #симптомы
Возраст техники: #возраст_техники

Дай подробную диагностику:
1. Наиболее вероятная причина поломки
2. Дополнительные признаки для проверки
3. Пошаговый план ремонта
4. Необходимые инструменты и запчасти
5. Примерная стоимость ремонта
6. Когда лучше обратиться к мастеру

Объясняй простым языком, как опытный мастер соседу.`,
      reviews: [
        {
          name: "Владимир",
          age: "48 лет",
          location: "Волгоград",
          avatar: "https://placehold.co/40x40/dc2626/white?text=В",
          rating: 5,
          comment: "Реально работает! Холодильник странно гудел - посоветовал почистить компрессор. Сделал сам за полчаса, работает как новый",
          timeAgo: "2 дня назад",
          likes: 21
        },
        {
          name: "Татьяна",
          age: "52 года",
          location: "Омск",
          avatar: "https://placehold.co/40x40/8b5cf6/white?text=Т",
          rating: 2,
          comment: "Стиралка не отжимает - сказал поменять ремень. Муж полез, оказалось помпа сломана. 3000 рублей за вызов мастера зря потратили",
          timeAgo: "2 дня назад",
          likes: 8
        },
        {
          name: "Слесарь Иван",
          age: "55 лет",
          location: "Самара",
          avatar: "https://placehold.co/40x40/059669/white?text=СИ",
          rating: 4,
          comment: "@Татьяна может симптомы не те указали? Я всегда пишу подробно - какие звуки, в какой момент, что горит на панели",
          timeAgo: "1 день назад",
          likes: 15
        },
        {
          name: "Пенсионер Петр",
          age: "64 года",
          location: "Астрахань",
          avatar: "https://placehold.co/40x40/0ea5e9/white?text=ПП",
          rating: 5,
          comment: "Микроволновка не грела - оказывается дверца плохо закрывалась, защелку подогнул. Думал выбрасывать уже!",
          timeAgo: "1 день назад",
          likes: 18
        },
        {
          name: "Домохозяйка Лена",
          age: "43 года",
          location: "Ярославль",
          avatar: "https://placehold.co/40x40/22c55e/white?text=ДЛ",
          rating: 4,
          comment: "Полезно, но мужские объяснения какие-то. Не понимаю что такое \"реле\" и \"тэн\". Нельзя проще?",
          timeAgo: "1 день назад",
          likes: 9
        }
      ],
      ratingBreakdown: {
        5: 45,
        4: 35,
        3: 12,
        2: 6,
        1: 2
      }
    },
    5: {
      title: "Планировщик семейного бюджета на #период",
      description: "Составляет план расходов и помогает экономить семейные деньги",
      author: "Финансист Алексей",
      authorHandle: "@money_planner",
      avatar: "https://placehold.co/40x40/059669/white?text=ФА",
      image: "https://placehold.co/400x300/047857/white?text=СЕМЕЙНЫЙ+БЮДЖЕТ",
      uses: "341К",
      saved: "2.9К",
      rating: 4.5,
      creationDate: "28/01/2025",
      tags: ["деньги", "семья", "экономия"],
      content: `Ты опытный финансовый консультант. Составь детальный семейный бюджет с планом экономии.

Период планирования: #период
Общий доход: #доход
Цель экономии: #цель_экономии

Составь подробный план:
1. Распределение доходов по категориям (50/30/20 правило)
2. Детализация обязательных расходов
3. План экономии с конкретными суммами
4. Рекомендации по оптимизации трат
5. График достижения финансовой цели

Дай практические советы для реальной семьи.`,
      reviews: [
        {
          name: "Мама двоих",
          age: "34 года",
          location: "Красноярск",
          avatar: "https://placehold.co/40x40/ec4899/white?text=МД",
          rating: 5,
          comment: "Наконец-то разобрались куда уходят деньги! Оказывается на всякую ерунду 15000 в месяц тратили. Теперь экономим 😊",
          timeAgo: "3 дня назад",
          likes: 27
        },
        {
          name: "Многодетный папа",
          age: "41 год",
          location: "Иркутск",
          avatar: "https://placehold.co/40x40/3b82f6/white?text=МП",
          rating: 4,
          comment: "Хорошо считает, но не учитывает детские внезапные траты. То лекарства, то школьные поборы... Жизнь сложнее схем",
          timeAgo: "2 дня назад",
          likes: 16
        },
        {
          name: "Жена айтишника",
          age: "29 лет",
          location: "Новосибирск",
          avatar: "https://placehold.co/40x40/a855f7/white?text=ЖА",
          rating: 5,
          comment: "@Многодетный папа добавьте строку \"непредвиденные расходы 10-15%\" - я так делаю, помогает!",
          timeAgo: "2 дня назад",
          likes: 23
        },
        {
          name: "Пенсионерка Галина",
          age: "61 год",
          location: "Пенза",
          avatar: "https://placehold.co/40x40/f59e0b/white?text=ПГ",
          rating: 3,
          comment: "Для молодых наверное хорошо. А у нас пенсия 18000 на двоих, тут не до планирования - лишь бы до зарплаты внука дожить",
          timeAgo: "1 день назад",
          likes: 12
        },
        {
          name: "Экономист Марина",
          age: "37 лет",
          location: "СПб",
          avatar: "https://placehold.co/40x40/10b981/white?text=ЭМ",
          rating: 5,
          comment: "Профессионально составлено! Использую принципы 50/30/20 и envelope method. Для семейного бюджета самое то",
          timeAgo: "1 день назад",
          likes: 19
        }
      ],
      ratingBreakdown: {
        5: 60,
        4: 25,
        3: 10,
        2: 3,
        1: 2
      }
    },
    6: {
      title: "Календарь дачных работ для #регион",
      description: "Подскажет когда и что делать в саду и огороде с учетом климата",
      author: "Агроном Петр",
      authorHandle: "@dacha_calendar",
      avatar: "https://placehold.co/40x40/84cc16/white?text=АП",
      image: "https://placehold.co/400x300/65a30d/white?text=ДАЧНЫЙ+КАЛЕНДАРЬ",
      uses: "425К",
      saved: "3.5К",
      rating: 4.7,
      creationDate: "15/03/2025",
      tags: ["дача", "сад", "огород", "сезонность"],
      content: `Ты опытный агроном-консультант. Составь детальный план дачных работ с учетом климата и лунного календаря.

Регион: #регион
Месяц: #месяц
Основные культуры: #культуры

Составь подробный календарь:
1. Оптимальные даты для каждого вида работ
2. Учет лунных фаз для посева и посадки
3. Климатические особенности региона
4. Пошаговый план на каждую неделю
5. Необходимые материалы и инструменты
6. Советы по защите от вредителей

Давай практические рекомендации как опытный дачник соседу.`,
      reviews: [
        {
          name: "Дачница Антонина",
          age: "58 лет",
          location: "Подмосковье",
          avatar: "https://placehold.co/40x40/f59e0b/white?text=ДА",
          rating: 5,
          comment: "Просто находка! Раньше по старым календарям ориентировалась, а тут все современно и точно для нашего климата. Урожай стал лучше!",
          timeAgo: "1 неделя назад",
          likes: 42
        },
        {
          name: "Начинающий дачник",
          age: "33 года",
          location: "Казань",
          avatar: "https://placehold.co/40x40/6366f1/white?text=НД",
          rating: 5,
          comment: "Первый год на даче - без этого календаря бы пропал! Все четко расписано когда что сажать. Соседи удивляются как у новичка все растет 😄",
          timeAgo: "5 дней назад",
          likes: 38
        },
        {
          name: "Сибирячка Люда",
          age: "49 лет",
          location: "Новосибирск",
          avatar: "https://placehold.co/40x40/8b5cf6/white?text=СЛ",
          rating: 4,
          comment: "Хорошо, но для Сибири сроки иногда не подходят. Приходится корректировать на 2-3 недели позже",
          timeAgo: "4 дня назад",
          likes: 15
        },
        {
          name: "Пермяк Василий",
          age: "62 года",
          location: "Пермь",
          avatar: "https://placehold.co/40x40/059669/white?text=ПВ",
          rating: 5,
          comment: "@Сибирячка Люда а вы регион правильно указываете? Я пишу \"Урал, холодный климат\" - сроки нормальные получаются",
          timeAgo: "3 дня назад",
          likes: 22
        },
        {
          name: "Огородница Зоя",
          age: "71 год",
          location: "Воронеж",
          avatar: "https://placehold.co/40x40/ec4899/white?text=ОЗ",
          rating: 5,
          comment: "50 лет в огороде, а все равно узнаю новое! Особенно понравились советы про совместимость культур. Теперь планирую грядки по науке",
          timeAgo: "2 дня назад",
          likes: 35
        }
      ],
      ratingBreakdown: {
        5: 75,
        4: 20,
        3: 3,
        2: 1,
        1: 1
      }
    },
    7: {
      title: "Расшифровка медицинских анализов простым языком",
      description: "Объясняет результаты анализов понятными словами и дает рекомендации",
      author: "Доктор Елена",
      authorHandle: "@medical_helper",
      avatar: "https://placehold.co/40x40/ef4444/white?text=ДЕ",
      image: "https://placehold.co/400x300/dc2626/white?text=МЕДИЦИНСКИЕ+АНАЛИЗЫ",
      uses: "678К",
      saved: "5.2К",
      rating: 4.2,
      creationDate: "20/02/2025",
      tags: ["здоровье", "анализы", "медицина"],
      content: `Ты врач-лаборант с 15-летним опытом. Объясни результаты анализов простым языком.

Тип анализа: #тип_анализа
Возраст и пол: #возраст_пол
Показатели с отклонениями: #показатели

⚠️ ВАЖНО: Это не заменяет консультацию врача!

Дай подробную расшифровку:
1. Что означает каждый показатель простыми словами
2. Какие отклонения критичны, а какие в пределах нормы
3. Возможные причины отклонений
4. К какому врачу обратиться
5. Какие дополнительные обследования могут потребоваться
6. Общие рекомендации по образу жизни

Объясняй как заботливый семейный врач.`,
      reviews: [
        {
          name: "Беспокойная мама",
          age: "38 лет",
          location: "Москва",
          avatar: "https://placehold.co/40x40/ec4899/white?text=БМ",
          rating: 5,
          comment: "Спасибо огромное! Получила анализы ребенка, врач только через неделю. Объяснили что ничего страшного, успокоилась 🙏",
          timeAgo: "2 дня назад",
          likes: 31
        },
        {
          name: "Пенсионер Борис",
          age: "68 лет",
          location: "Тула",
          avatar: "https://placehold.co/40x40/6366f1/white?text=ПБ",
          rating: 4,
          comment: "Хорошо объясняет, но все равно к доктору пошел. Правда теперь знаю какие вопросы задавать!",
          timeAgo: "2 дня назад",
          likes: 18
        },
        {
          name: "Медсестра Ольга",
          age: "44 года",
          location: "Саратов",
          avatar: "https://placehold.co/40x40/10b981/white?text=МО",
          rating: 3,
          comment: "Как медик скажу - объяснения правильные, но слишком упрощенные. И постоянно пишите что к врачу надо - это правильно!",
          timeAgo: "1 день назад",
          likes: 25
        },
        {
          name: "Мнительная Лариса",
          age: "52 года",
          location: "Омск",
          avatar: "https://placehold.co/40x40/f97316/white?text=МЛ",
          rating: 2,
          comment: "Теперь еще больше паникую! Лучше бы не читала... Хотя может это проблема во мне 😅",
          timeAgo: "1 день назад",
          likes: 7
        },
        {
          name: "Студент-медик",
          age: "22 года",
          location: "СПб",
          avatar: "https://placehold.co/40x40/8b5cf6/white?text=СМ",
          rating: 5,
          comment: "Отлично для общего понимания! Родителям теперь объясняю их анализы через этот промпт - сразу все понятно становится",
          timeAgo: "1 день назад",
          likes: 14
        }
      ],
      ratingBreakdown: {
        5: 50,
        4: 30,
        3: 15,
        2: 4,
        1: 1
      }
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
    let content = prompt.content;
    
    // Replace placeholders with user inputs
    Object.keys(placeholderInputs).forEach(placeholder => {
      if (placeholderInputs[placeholder]) {
        const regex = new RegExp(`#${placeholder}`, 'g');
        content = content.replace(regex, placeholderInputs[placeholder]);
      }
    });
    
    navigator.clipboard.writeText(content);
    alert('Готовый промпт скопирован в буфер обмена!');
  };

  const handleOpenChatGPT = () => {
    const encodedPrompt = encodeURIComponent(prompt.content);
    window.open(`https://chat.openai.com/?q=${encodedPrompt}`, '_blank');
  };

  const handleOpenGemini = () => {
    const encodedPrompt = encodeURIComponent(prompt.content);
    window.open(`https://gemini.google.com/chat?q=${encodedPrompt}`, '_blank');
  };

  const handleOpenAlice = () => {
    const encodedPrompt = encodeURIComponent(prompt.content);
    window.open(`https://yandex.ru/alice?q=${encodedPrompt}`, '_blank');
  };

  const handlePlaceholderInputChange = (placeholder, value) => {
    setPlaceholderInputs(prev => ({
      ...prev,
      [placeholder]: value
    }));
  };

  const renderPromptContent = () => {
    let content = prompt.content;
    
    // Replace placeholders with user inputs
    Object.keys(placeholderInputs).forEach(placeholder => {
      if (placeholderInputs[placeholder]) {
        const regex = new RegExp(`#${placeholder}`, 'g');
        content = content.replace(regex, placeholderInputs[placeholder]);
      }
    });

    // Highlight remaining placeholders with bold font and unique color
    content = content.replace(/#(\w+)/g, '<span class="prompt-placeholder">#$1</span>');
    
    return { __html: content };
  };

  const extractPlaceholders = (content) => {
    const placeholderRegex = /#([^#\s]+)/g;
    const placeholders = [];
    let match;
    while ((match = placeholderRegex.exec(content)) !== null) {
      if (!placeholders.includes(match[1])) {
        placeholders.push(match[1]);
      }
    }
    console.log('Extracted placeholders:', placeholders); // Debug log
    return placeholders;
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

            <div className="prompt-page__content">
              <h3>Содержимое промпта</h3>
              <div className="prompt-content-box" dangerouslySetInnerHTML={renderPromptContent()} />
              
              <div className="placeholder-inputs-section">
                <h4>Ответьте на вопросы:</h4>
                <p className="placeholder-description">
                  <strong>Плейсхолдеры</strong> - это вставки в тексте промпта вида <span className="example-placeholder">#культура</span>, <span className="example-placeholder">#симптомы</span>, которые нужно заменить на ваш текст для кастомизации промпта под конкретную задачу.
                </p>
                <div className="placeholder-inputs-list">
                  {extractPlaceholders(prompt.content).map((placeholder, index) => (
                    <div key={index} className="placeholder-input-item">
                      <label className="placeholder-label">#{placeholder}</label>
                      <input
                        type="text"
                        placeholder={`Введите значение для #${placeholder}`}
                        value={placeholderInputs[placeholder] || ''}
                        onChange={(e) => handlePlaceholderInputChange(placeholder, e.target.value)}
                        className="placeholder-input"
                      />
                    </div>
                  ))}
                </div>
                
                <button className="copy-prompt-btn" onClick={handleCopyPrompt}>
                  📋 Копировать готовый промпт
                </button>
              </div>
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
                        <Link to={`/user/${review.name.replace(/\s+/g, '').toLowerCase()}`} className="review-name">{review.name}</Link>
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

          <div className="prompt-tags-section">
            <h3>Теги промпта <span className="info-icon">ⓘ</span></h3>
            <p className="tags-description">
              <strong>Теги</strong> - это ключевые слова, описывающие тематику и область применения промпта. Помогают в поиске и категоризации.
            </p>
            <div className="tags-list">
              {prompt.tags.map((tag, index) => (
                <span key={index} className="tag">#{tag}</span>
              ))}
            </div>
            
          </div>

          <div className="external-links">
            <button className="external-btn chatgpt" onClick={handleOpenChatGPT}>
              🤖 Копировать и открыть ChatGPT
            </button>
            <button className="external-btn gemini" onClick={handleOpenGemini}>
              💎 Копировать и открыть Gemini
            </button>
            <button className="external-btn alice" onClick={handleOpenAlice}>
              🔮 Копировать и открыть Яндекс Алису
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptPage;