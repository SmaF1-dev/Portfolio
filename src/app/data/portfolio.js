// All public-facing content lives in one place. Add or edit a result here.
export const identity = {
  nickname: 'SmaF1',
  name: 'Никита Лютый',
  role: 'Go Backend Developer',
  city: 'Санкт-Петербург',
  github: 'https://github.com/SmaF1-dev',
  telegram: 'https://t.me/SmaF1_1',
  email: 'Nikita_Lyutyi@mail.ru',
};

export const categories = [
  { id: 'all', label: 'Все результаты' },
  { id: 'projects', label: 'Проекты' },
  { id: 'experience', label: 'Опыт' },
  { id: 'skills', label: 'Навыки' },
  { id: 'achievements', label: 'Достижения' },
];

export const portfolioItems = [
  {
    slug: 'about',
    kind: 'profile',
    category: 'experience',
    overline: 'Профиль',
    title: 'Никита Лютый — SmaF1',
    description: 'Разрабатываю Go-сервисы, API и распределённые системы. Люблю задачи, где важны архитектура, надёжность и производительность.',
    tags: ['Go', 'Backend', 'Microservices'],
    icon: 'user',
    accent: 'violet',
    featured: true,
    search: ['никита', 'лютый', 'smaf1', 'обо мне', 'backend', 'golang', 'profile'],
    intro: 'Backend-разработчик с коммерческим опытом. Основное направление — Go и распределённые сервисы. Умею проходить путь от постановки задачи и архитектуры до тестов, контейнеризации и запуска.',
    sections: [
      {
        title: 'Чем занимаюсь',
        bullets: [
          'Создаю HTTP/gRPC API и микросервисы на Go.',
          'Проектирую взаимодействия через Kafka, PostgreSQL, S3 и другие хранилища.',
          'Занимаюсь оптимизацией запросов, потоковой обработкой данных и надёжностью фоновых задач.',
          'При необходимости разрабатываю интерфейсы на React / Next.js.',
        ],
      },
      {
        title: 'Сейчас в фокусе',
        paragraphs: [
          'Работаю над платформой Smart-Crawler в университете ИТМО.',
          'Предпочитаю задачи, в которых можно не только написать код, но и осмысленно выбрать архитектуру, измерить результат и сделать систему удобной в сопровождении.',
        ],
      },
    ],
    links: [{ label: 'GitHub', href: 'https://github.com/SmaF1-dev' }],
  },
  {
    slug: 'smart-crawler',
    kind: 'project',
    category: 'projects',
    overline: 'Коммерческий опыт · ИТМО',
    title: 'Smart-Crawler',
    description: 'Микросервисная платформа для сбора, обработки и выгрузки научных публикаций. Моя основная зона — Go-сервис Data Upload.',
    tags: ['Go', 'Kafka', 'PostgreSQL', 'S3'],
    icon: 'layers',
    accent: 'blue',
    featured: true,
    stat: '11 микросервисов',
    search: ['smart crawler', 'data upload', 'qdrant', 'pgx', 'асинхронная выгрузка', 'streaming', 'doi'],
    intro: 'Smart-Crawler — платформа из 11 микросервисов, предназначенная для работы с данными научных публикаций. Я отвечаю за разработку Go-сервиса асинхронной выгрузки и участвую в развитии смежных компонентов.',
    metrics: [
      { value: '11', label: 'микросервисов в платформе' },
      { value: '~159×', label: 'ускорение поиска по DOI' },
      { value: '100k', label: 'записей в тестовой выборке' },
    ],
    sections: [
      {
        title: 'Go-сервис Data Upload',
        bullets: [
          'Асинхронная выгрузка данных из PostgreSQL, Garage S3 и Qdrant.',
          'Потоковый экспорт CSV / JSON / ZIP без загрузки всей выборки в память.',
          'REST API для запуска, мониторинга, отмены и скачивания задач; поддержка HTTP Range.',
          'Kafka producer / consumer, DLQ, статусы задач и восстановление состояния после перезапуска.',
          'Контекстная отмена задач и защита от повторного выполнения.',
          'Unit- и integration-тесты, race-проверки, Swagger/OpenAPI, Docker и CI/CD.',
        ],
      },
      {
        title: 'Производительность',
        paragraphs: [
          'На выборке из 100 тысяч публикаций оптимизировал запросы PostgreSQL: поиск по DOI ускорился примерно в 159 раз, сортировка по дате — в 121 раз, диапазонная фильтрация — в 5,5 раза. Эти показатели относятся к конкретным тестовым сценариям, а не к производительности платформы в целом.',
        ],
      },
      {
        title: 'Другие задачи в платформе',
        bullets: [
          'Реализация и доработка около 20 REST API-эндпоинтов на Python / FastAPI.',
          'Проектирование event-driven взаимодействия сервисов через Kafka.',
          'Участие в pipeline OpenAlex и нормализации данных в Etalonizer.',
          'Разработка frontend аналитического приложения на Next.js с Chart.js.',
        ],
      },
    ],
  },
  {
    slug: 'maintenance-regulations',
    kind: 'project',
    category: 'projects',
    overline: 'Коммерческий проект · ПСЦ Электроника',
    title: 'Автоматизация регламентов ТО',
    description: 'Новая версия внутреннего приложения для расчёта регламентов технического обслуживания: Go, Gio/WebAssembly и генерация Excel/DOCX.',
    tags: ['Go', 'Gio', 'WebAssembly', 'Excel'],
    icon: 'terminal',
    accent: 'orange',
    stat: '2023 · кейс',
    search: ['электроника', 'псц электроника', 'регламент', 'то', 'техническое обслуживание', 'gio', 'webassembly', 'wasm', 'excelize', 'docx', 'автоматизация', 'Electronika'],
    intro: 'В ООО «ПСЦ Электроника» разработал новую версию внутреннего приложения для расчёта регламентов технического обслуживания на Go. Работа велась под руководством Алексея Израилева и при его участии. Результат был передан в опытную эксплуатацию.',
    metrics: [
      { value: '≈5 мин', label: 'обработка после оптимизации — по резюме' },
      { value: '40–60 мин', label: 'аналогичный процесс до оптимизации — по резюме' },
    ],
    sections: [
      {
        title: 'Реализация',
        bullets: [
          'Перенёс функции предыдущего C#-приложения на Go, сохранив рабочий сценарий сотрудников.',
          'Разработал интерфейс на Gio с запуском в браузере через WebAssembly.',
          'Реализовал загрузку и обработку Excel с excelize и генерацию DOCX через fumiama/go-docx.',
          'Оптимизировал расчёты и подготовил приложение к опытной эксплуатации.',
        ],
      },
      {
        title: 'Результат и подтверждение',
        paragraphs: [
          'По обновлённому резюме время обработки сократилось с 40–60 минут примерно до 5 минут. В корпоративной публикации подтверждается существенное ускорение без указания конкретных чисел.',
          'В выпуске «Электроника NEWS» от июля 2023 года на странице 7 показаны интерфейсы старого и нового приложения. На странице 8 директор направления «Сервис» прямо называет Никиту разработчиком новой версии и сообщает об опытной эксплуатации.',
        ],
      },
    ],
    links: [
      { label: 'Подтверждение: «Электроника NEWS», стр. 7–8 (PDF)', href: '/evidence/electronika-news-2023-full.pdf#page=7' },
    ],
  },
  {
    slug: 'matchmaking',
    kind: 'project',
    category: 'projects',
    overline: 'Go · pet-проект',
    title: 'Go Matchmaking Service',
    description: 'REST/gRPC-сервис подбора игроков Valorant с ранжированием, фильтрацией кандидатов и PostgreSQL.',
    tags: ['Go', 'gRPC', 'PostgreSQL'],
    icon: 'users',
    accent: 'mint',
    search: ['matchmaking', 'pusha', 'valorant', 'strategy', 'specification'],
    intro: 'Разработал Go-микросервис, который подбирает игроков в составе системы из Go- и Python-сервисов.',
    sections: [
      {
        title: 'Реализация',
        bullets: [
          'REST API для заявок, поиска кандидатов и формирования групп.',
          'Интеграция с Python Player Service через gRPC и Protocol Buffers.',
          'Слоистая архитектура handler → service → repository/provider.',
          'Ранжирование и фильтрация через Strategy и Specification Pattern.',
          'PostgreSQL через pgxpool / raw SQL, транзакции, индексы, Swagger и unit-тесты.',
        ],
      },
    ],
    links: [{ label: 'Репозиторий GitHub', href: 'https://github.com/SmaF1-dev/PushA' }],
  },
  {
    slug: 'orders-payments',
    kind: 'project',
    category: 'projects',
    overline: 'Go · pet-проект',
    title: 'Order & Payment Microservices',
    description: 'Два взаимодействующих Go-сервиса: создание заказов, обработка платежей, gRPC и конкурентная работа.',
    tags: ['Go', 'gRPC', 'Concurrency'],
    icon: 'server',
    accent: 'orange',
    search: ['orders', 'payments', 'grpc microservices', 'goroutines', 'channels'],
    intro: 'Практический проект с двумя Go-микросервисами, взаимодействующими через gRPC.',
    sections: [
      {
        title: 'Что реализовано',
        bullets: [
          'Order Service и Payment Service с Protocol Buffers.',
          'PostgreSQL repository layer и SQL-операции.',
          'Timeout / cancellation через context.Context.',
          'Конкурентная отправка 20 заказов через goroutines, channels и WaitGroup.',
          'gRPC interceptor, graceful shutdown и тесты с testify / sqlmock.',
        ],
      },
    ],
    links: [{ label: 'Репозиторий GitHub', href: 'https://github.com/SmaF1-dev/grpc_MicroServices' }],
  },
  {
    slug: 'experience',
    kind: 'experience',
    category: 'experience',
    overline: 'Карьера',
    title: 'Опыт работы',
    description: 'ИТМО: Go-сервисы Smart-Crawler. Ранее — ООО «ПСЦ Электроника»: приложение для автоматизации регламентов ТО на Go.',
    tags: ['ИТМО', 'ПСЦ Электроника', 'Go'],
    icon: 'briefcase',
    accent: 'blue',
    search: ['работа', 'опыт', 'итмо', 'лаборант', 'псц', 'электроника', 'backend developer', 'golang', 'регламенты то'],
    intro: 'Опыт коммерческой разработки на Go: от внутреннего продукта для автоматизации регламентов технического обслуживания до микросервисной платформы обработки научных данных.',
    sections: [
      {
        title: 'Университет ИТМО · март 2025 — настоящее время',
        paragraphs: ['Лаборант / Backend-разработчик в проекте Smart-Crawler. Основной язык — Go, также работаю с Python/FastAPI и клиентскими интерфейсами.'],
        bullets: [
          'Проектирование и реализация API, фоновых задач, интеграций с брокером сообщений и хранилищами.',
          'Оптимизация SQL-запросов и тестирование производительности.',
          'Тесты, документация, контейнеризация и CI/CD.',
        ],
      },
      {
        title: 'ООО «ПСЦ Электроника» · март 2023 — февраль 2024',
        paragraphs: ['Golang-разработчик. Создал новую версию внутреннего приложения для расчёта регламентов технического обслуживания на Go, заменив прежнее C#-решение. Разработка проходила под руководством Алексея Израилева и при его участии.'],
        bullets: [
          'Интерфейс на Gio с запуском в браузере через WebAssembly.',
          'Обработка Excel через excelize и генерация DOCX через fumiama/go-docx.',
          'По резюме: время обработки сократилось с 40–60 до примерно 5 минут.',
          'Компания подтвердила разработку и опытную эксплуатацию в выпуске «Электроника NEWS» за июль 2023 года (стр. 7–8).',
        ],
      },
    ],
    links: [{ label: 'Подтверждение работы над приложением (PDF)', href: '/evidence/electronika-news-2023-full.pdf#page=7' }],
  },
  {
    slug: 'stack',
    kind: 'skills',
    category: 'skills',
    overline: 'Инструменты и технологии',
    title: 'Технологический стек',
    description: 'Go, PostgreSQL, Kafka, REST/gRPC, S3, Docker, Python/FastAPI и Next.js. Без искусственных процентов «владения».',
    tags: ['Go', 'PostgreSQL', 'Kafka'],
    fullStack: [
      'Go', 'PostgreSQL', 'Kafka', 'REST API', 'gRPC', 'Protocol Buffers',
      'net/http', 'chi', 'context.Context', 'goroutines', 'channels', 'Swagger/OpenAPI',
      'SQL', 'pgx/pgxpool', 'kafka-go', 'Garage S3', 'AWS SDK for Go v2', 'Qdrant',
      'Python', 'FastAPI', 'SQLAlchemy', 'asyncpg', 'Alembic', 'pytest',
      'Docker', 'Docker Compose', 'Git', 'GitHub Actions', 'CI/CD',
      'Unit Testing', 'Integration Testing',
      'React', 'Next.js', 'TypeScript', 'JavaScript', 'SCSS',
      'Gio', 'WebAssembly', 'excelize', 'fumiama/go-docx',
    ],
    icon: 'terminal',
    accent: 'mint',
    search: ['языки', 'навыки', 'технологии', 'стек', 'go', 'python', 'react', 'docker', 'devops'],
    intro: 'Мой основной стек — Go backend. Использую технологии в реальных проектах; предпочитаю показывать контекст применения, а не условные шкалы «знаю на 90%».',
    sections: [
      {
        title: 'Backend',
        bullets: [
          'Go: net/http, chi, context.Context, goroutines, channels, graceful shutdown.',
          'REST API, gRPC, Protocol Buffers, Swagger/OpenAPI.',
          'Python: FastAPI, SQLAlchemy, asyncpg, Alembic, pytest.',
        ],
      },
      {
        title: 'Данные и асинхронная обработка',
        bullets: [
          'PostgreSQL, SQL, pgx/pgxpool, индексы и оптимизация запросов.',
          'Kafka / kafka-go, DLQ, восстановление задач, обработка событий.',
          'S3-совместимые хранилища (Garage, AWS SDK for Go v2), Qdrant.',
        ],
      },
      {
        title: 'Инфраструктура и frontend',
        bullets: [
          'Docker, Docker Compose, Git, GitHub Actions, CI/CD.',
          'Unit / integration testing, race detector, мокирование.',
          'React, Next.js, TypeScript/JavaScript, SCSS.',
        ],
      },
    ],
  },
  {
    slug: 'achievements',
    kind: 'achievement',
    category: 'achievements',
    overline: 'Олимпиады и конкурсы',
    title: 'Достижения',
    description: '4 финала НТО, 5 побед в «Талант НТО» и призовое место по искусственному интеллекту.',
    tags: ['НТО', 'Олимпиады', 'Конкурсы'],
    icon: 'trophy',
    accent: 'gold',
    stat: '4 финала НТО',
    search: ['достижения', 'награды', 'олимпиада', 'нто', 'талант нто', 'победитель'],
    intro: 'Участвовал в инженерных и IT-соревнованиях. Ниже — результаты, указанные в предыдущей версии портфолио.',
    sections: [
      {
        title: 'Национальная технологическая олимпиада · финалист',
        bullets: [
          '2023 — «Финансовый инжиниринг».',
          '2024 — «Автоматизация бизнес-процессов».',
          '2024 — «Искусственный интеллект».',
          '2024 — «Программная инженерия в финансовых технологиях».',
        ],
      },
      {
        title: '«Талант НТО» · победитель',
        bullets: [
          '2023 — «Разработка бизнес-приложений».',
          '2023 — «Программирование на Python».',
          '2024 — «Инженерия».',
          '2024 — «Программирование».',
          '2024 — «Разработка бизнес-приложений».',
        ],
      },
      {
        title: '«Талант НТО» · призёр',
        bullets: ['2023 — «Искусственный интеллект».'],
      },
    ],
    links: [{ label: 'Официальный сайт НТО', href: 'https://ntcontest.ru/' }],
  },
  {
    slug: 'education',
    kind: 'education',
    category: 'achievements',
    overline: 'Образование',
    title: 'Университет ИТМО',
    description: 'Бакалавриат в ИТМО: инфокоммуникационные технологии, мобильные и сетевые технологии, прикладные проекты.',
    tags: ['ИТМО', 'Бакалавриат', 'Санкт-Петербург'],
    icon: 'graduation',
    accent: 'violet',
    search: ['университет', 'образование', 'итмо', 'обучение', 'студент'],
    intro: 'Учусь на бакалавриате Университета ИТМО в Санкт-Петербурге по направлению «Инфокоммуникационные технологии».',
    sections: [
      {
        title: 'Образовательный путь',
        bullets: [
          'ИТМО — бакалавриат, направление «Инфокоммуникационные технологии», профиль «Мобильные и сетевые технологии».',
          'Практическая работа над микросервисной платформой Smart-Crawler в ИТМО.',
          'Школа № 33, Ярославль — среднее общее образование, аттестат с отличием (по данным предыдущего портфолио).',
        ],
      },
    ],
  },
  {
    slug: 'contacts',
    kind: 'contact',
    category: 'experience',
    overline: 'Связь',
    title: 'Связаться со мной',
    description: 'Telegram, GitHub и email. Открыт к интересным задачам, проектам и профессиональному общению.',
    tags: ['Telegram', 'GitHub', 'Email'],
    icon: 'send',
    accent: 'pink',
    search: ['связь', 'контакты', 'написать', 'email', 'telegram', 'github'],
    intro: 'Самый быстрый способ связаться со мной — Telegram. Для более подробных предложений также подойдёт email.',
    sections: [
      { title: 'О чём можно написать', bullets: ['Backend-разработка на Go и микросервисные проекты.', 'Работа с PostgreSQL, Kafka, API и интеграциями.', 'Разработка продуктов и совместные проекты.'] },
    ],
    links: [
      { label: 'Telegram', href: 'https://t.me/SmaF1_1' },
      { label: 'GitHub', href: 'https://github.com/SmaF1-dev' },
      { label: 'Email', href: 'mailto:Nikita_Lyutyi@mail.ru' },
    ],
  },
];

export function getPortfolioItem(slug) {
  return portfolioItems.find((item) => item.slug === slug);
}

function normalize(text) {
  return String(text ?? '')
    .toLocaleLowerCase('ru-RU')
    .replace(/ё/g, 'е')
    .trim();
}

export function findPortfolioItems(query, category = 'all') {
  const term = normalize(query);
  const normalizedTerm = ['smaf1', 'никита', 'никита лютый', 'nikita', 'nikita lyutyi'].includes(term)
    ? ''
    : term;

  return portfolioItems.filter((item) => {
    if (category !== 'all' && item.category !== category) return false;
    if (!normalizedTerm) return true;
    const haystack = normalize([
      item.title,
      item.description,
      item.overline,
      item.intro,
      ...item.tags,
      ...(item.fullStack ?? []),
      ...item.search,
      ...item.sections.flatMap((section) => [section.title, ...(section.paragraphs ?? []), ...(section.bullets ?? [])]),
    ].join(' '));
    return normalizedTerm.split(/\s+/).every((word) => haystack.includes(word));
  });
}
