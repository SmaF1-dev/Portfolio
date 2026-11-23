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
    overline: 'Профиль и контакты',
    title: 'Никита Лютый — SmaF1',
    description: 'Go Backend Developer · 3 года коммерческого опыта · проектирование и разработка распределённых систем',
    tags: ['Go', 'Backend', 'Microservices'],
    icon: 'user',
    accent: 'violet',
    featured: true,
    search: ['никита', 'лютый', 'smaf1', 'обо мне', 'контакты', 'связь', 'написать', 'telegram', 'email', 'github', 'backend', 'golang', 'profile'],
    intro: 'Я Никита, backend-разработчик с коммерческим опытом на Go и Python. Проектирую API, распределённые сервисы и обработку данных, а результат стараюсь подтверждать измерениями и тестами.',
    sections: [
      {
        title: 'Что делаю',
        bullets: [
          'Разрабатываю Go-сервисы с REST/gRPC API, транзакциями, фоновой обработкой и интеграциями',
          'Работаю с PostgreSQL, Kafka, S3 и инструментами тестирования и наблюдаемости',
          'Оптимизирую SQL и потоковую обработку больших выборок',
          'При необходимости создаю интерфейсы на Next.js и React',
        ],
      },
      {
        title: 'Подход к разработке',
        paragraphs: [
          'Мне интересны задачи, в которых нужно продумать архитектуру, обеспечить корректную работу при сбоях и измерить результат, а не просто написать функциональность.',
          'Сейчас работаю над Smart-Crawler в ИТМО. Ранее разрабатывал внутреннюю систему расчёта регламентов ТО для «ПСЦ Электроника».',
        ],
      },
      {
        title: 'О сотрудничестве',
        paragraphs: [
          'Открыт к интересным backend-задачам, проектной работе и профессиональному общению. Быстрее всего связаться со мной через Telegram; для подробных предложений подойдёт email.',
        ],
      },
    ],
    links: [
      { label: 'Написать в Telegram', href: 'https://t.me/SmaF1_1' },
      { label: 'Мой GitHub', href: 'https://github.com/SmaF1-dev' },
      { label: 'Отправить email', href: 'mailto:Nikita_Lyutyi@mail.ru' },
    ],
  },
  {
    slug: 'smart-crawler',
    kind: 'project',
    category: 'projects',
    overline: 'Коммерческий опыт · ИТМО',
    title: 'Smart-Crawler',
    description: '11 микросервисов для работы с научными публикациями — отвечаю за Go Data Upload и потоковую выгрузку до 500 тыс. записей',
    tags: ['Go', 'Kafka', 'PostgreSQL', 'S3'],
    icon: 'layers',
    accent: 'blue',
    featured: true,
    stat: 'до 500 тыс. записей',
    search: ['smart crawler', 'data upload', 'qdrant', 'pgx', 'асинхронная выгрузка', 'streaming', 'doi'],
    intro: 'Smart-Crawler — платформа из 11 микросервисов, предназначенная для работы с данными научных публикаций. Я отвечаю за разработку Go-сервиса асинхронной выгрузки и участвую в развитии смежных компонентов.',
    metrics: [
      { value: '11', label: 'микросервисов в платформе' },
      { value: '~159×', label: 'ускорение поиска по DOI' },
      { value: '500k', label: 'записей в потоковой выгрузке' },
    ],
    sections: [
      {
        title: 'Go-сервис Data Upload',
        bullets: [
          'Асинхронная выгрузка данных из PostgreSQL, Garage S3 и Qdrant.',
          'Потоковый экспорт CSV / JSON / ZIP через pgx/pgxpool без полной загрузки выборки в память — до 500 тыс. записей с контролируемым потреблением памяти.',
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
    description: 'Переработка внутренней системы: Go, Gio, WebAssembly, PostgreSQL, gRPC и автоматическая генерация Excel/DOCX',
    tags: ['Go', 'PostgreSQL', 'gRPC', 'Gio'],
    icon: 'terminal',
    accent: 'orange',
    stat: '≈4,7× генерация',
    search: ['электроника', 'псц электроника', 'регламент', 'то', 'техническое обслуживание', 'gio', 'webassembly', 'wasm', 'excelize', 'docx', 'ooxml', 'асинхронный worker', 'автоматизация', 'Electronika'],
    intro: 'В ООО «ПСЦ Электроника» разрабатывал систему расчёта регламентов технического обслуживания и формирования документации. Переработал унаследованную C#-версию с использованием Go. Ранняя версия приложения была передана в опытную эксплуатацию при участии и под руководством Алексея Израилева.',
    metrics: [
      { value: '≈4,7×', label: 'быстрее генерация документов относительно Python-версии — по резюме' },
      { value: '≈2,7×', label: 'быстрее полный цикл относительно Python-версии — по резюме' },
      { value: '59/60', label: 'комплектов с первого запуска на Go — по резюме' },
    ],
    sections: [
      {
        title: 'Архитектура и реализация',
        bullets: [
          'Реализовал расчётное ядро на Go, desktop-интерфейс на Gio и веб-предпросмотр части расчётов через WebAssembly.',
          'Настроил импорт Excel-спецификаций через excelize и генерацию DOCX через fumiama/go-docx с дополнительной обработкой OOXML.',
          'Перенёс справочники оборудования и технологические карты из Excel в PostgreSQL, добавил транзакции, версионирование и защиту от конфликтующих изменений.',
          'Разделил систему на сервисы с gRPC / Protocol Buffers, вынес генерацию документов в асинхронный worker с повторами, идемпотентностью и журналированием.',
          'Развёртывание через Docker Compose и автоматические проверки в CI.',
        ],
      },
      {
        title: 'Измеримые результаты',
        paragraphs: [
          'В обновлённом резюме указаны медианные измерения: генерация документов сократилась с 2 мин 48 с на промежуточной Python-версии до 36 с на Go (примерно в 4,7 раза). Полный цикл — с 14 мин 30 с до 5 мин 20 с (примерно в 2,7 раза).',
          'Доля корректно сформированных с первого запуска комплектов выросла с 55/60 до 59/60. По внутренней оценочной модели экономия относительно ручной подготовки составила около 163 часов в месяц, эквивалент примерно 122 тыс. ₽ рабочего времени.',
        ],
      },
      {
        title: 'Публичное подтверждение',
        paragraphs: [
          'В корпоративном выпуске «Электроника NEWS» за июль 2023 года на стр. 7 показаны старый и новый интерфейсы, а на стр. 8 директор направления «Сервис» называет Никиту разработчиком обновлённой версии и сообщает об опытной эксплуатации.',
          'Публикация подтверждает участие в разработке ранней версии и ускорение работы, но не содержит приведённых выше метрик или описания поздней архитектуры — эти сведения приведены по актуальному резюме.',
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
    description: 'REST/gRPC-сервис подбора игроков Valorant с ранжированием, фильтрацией кандидатов и PostgreSQL',
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
    description: 'Два взаимодействующих Go-сервиса: создание заказов, обработка платежей, gRPC и конкурентная работа',
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
    description: '3 года коммерческого опыта — Smart-Crawler в ИТМО и автоматизация регламентов ТО в ООО «ПСЦ Электроника»',
    tags: ['ИТМО', 'ПСЦ Электроника', 'Go'],
    icon: 'briefcase',
    accent: 'blue',
    search: ['работа', 'опыт', 'итмо', 'лаборант', 'псц', 'электроника', 'backend developer', 'golang', 'регламенты то', '3 года'],
    intro: 'Разрабатываю Go backend в коммерческих проектах: потоковые выгрузки и отказоустойчивые микросервисы в ИТМО, ранее — расчёт регламентов технического обслуживания и генерация документов в «ПСЦ Электроника».',
    sections: [
      {
        title: 'Университет ИТМО · март 2025 — настоящее время',
        paragraphs: ['Лаборант / Backend-разработчик в проекте Smart-Crawler (11 микросервисов). Основная ответственность — Go-сервис асинхронного Data Upload.'],
        bullets: [
          'Потоковая выгрузка данных до 500 тыс. записей с контролируемым потреблением памяти.',
          'PostgreSQL, Kafka, S3, Qdrant, REST API, фоновые задачи, восстановление статусов.',
          'Оптимизация запросов по DOI (до ≈159× на конкретном тесте), тестирование, Docker и CI/CD.',
        ],
      },
      {
        title: 'ООО «ПСЦ Электроника» · февраль 2023 — апрель 2024',
        paragraphs: ['Разработчик внутренней системы автоматизации регламентов ТО. Переработал унаследованное приложение на C# в систему на Go с Gio, PostgreSQL и генерацией документов.'],
        bullets: [
          'Gio desktop и веб-предпросмотр через WebAssembly, Excel-импорт, DOCX/OOXML.',
          'PostgreSQL вместо общих Excel-файлов, gRPC, асинхронный worker и CI.',
          'По актуальному резюме: медианная генерация документов ускорилась в ≈4,7 раза, полный цикл — в ≈2,7 раза относительно промежуточной Python-версии.',
          'Корпоративная публикация 2023 года подтверждает разработку ранней версии и её опытную эксплуатацию (стр. 7–8).',
        ],
      },
    ],
    links: [{ label: 'Публикация о приложении (PDF)', href: '/evidence/electronika-news-2023-full.pdf#page=7' }],
  },
  {
    slug: 'stack',
    kind: 'skills',
    category: 'skills',
    overline: 'Инструменты и технологии',
    title: 'Технологический стек',
    description: 'Go, PostgreSQL, Kafka, REST/gRPC, S3, Docker, Python/FastAPI и Next.js — без условных процентов владения',
    tags: ['Go', 'PostgreSQL', 'Kafka'],
    fullStack: [
      'Go', 'PostgreSQL', 'Kafka', 'REST API', 'gRPC', 'Protocol Buffers',
      'net/http', 'chi', 'context.Context', 'goroutines', 'channels', 'Swagger/OpenAPI',
      'SQL', 'pgx/pgxpool', 'kafka-go', 'Garage S3', 'AWS SDK for Go v2', 'Qdrant',
      'Python', 'FastAPI', 'SQLAlchemy', 'asyncpg', 'Alembic', 'pytest',
      'Docker', 'Docker Compose', 'Git', 'GitHub Actions', 'CI/CD',
      'Unit Testing', 'Integration Testing',
      'React', 'Next.js', 'TypeScript', 'JavaScript', 'SCSS',
      'Gio', 'WebAssembly', 'excelize', 'fumiama/go-docx', 'OOXML',
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
    description: '4 финала НТО, 5 побед в «Талант НТО» и призовое место по искусственному интеллекту',
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
    description: 'Бакалавриат в ИТМО: инфокоммуникационные технологии, мобильные и сетевые технологии, прикладные проекты',
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
