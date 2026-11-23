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
    description: 'Я Go Backend Developer с 3 годами коммерческого опыта, разрабатываю распределённые системы',
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
    description: 'Разрабатываю Go Data Upload в платформе из 11 микросервисов, обрабатываю до 500 тыс. записей',
    tags: ['Go', 'Kafka', 'PostgreSQL', 'S3'],
    icon: 'layers',
    accent: 'blue',
    featured: true,
    stat: 'до 500 тыс. записей',
    search: ['smart crawler', 'data upload', 'qdrant', 'pgx', 'асинхронная выгрузка', 'streaming', 'doi'],
    intro: 'Работаю над Smart-Crawler — платформой из 11 микросервисов для обработки научных публикаций. Отвечаю за Go-сервис асинхронной выгрузки и участвую в развитии смежных компонентов.',
    metrics: [
      { value: '11', label: 'микросервисов в платформе' },
      { value: '~159×', label: 'ускорение поиска по DOI' },
      { value: '500k', label: 'записей в потоковой выгрузке' },
    ],
    sections: [
      {
        title: 'Go-сервис Data Upload',
        bullets: [
          'Разработал асинхронную выгрузку данных из PostgreSQL, Garage S3 и Qdrant.',
          'Реализовал потоковый экспорт CSV / JSON / ZIP через pgx/pgxpool без загрузки всей выборки в память — до 500 тыс. записей с контролируемым потреблением памяти.',
          'Разработал REST API для запуска, мониторинга, отмены и скачивания задач с поддержкой HTTP Range.',
          'Реализовал Kafka producer / consumer, DLQ, хранение статусов и восстановление состояния после перезапуска.',
          'Добавил отмену через context.Context и защиту от повторного выполнения задач.',
          'Покрыл сервис unit- и integration-тестами, включая race-проверки; настроил Swagger/OpenAPI, Docker и CI/CD.',
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
          'Реализовал и доработал около 20 REST API-эндпоинтов на Python / FastAPI.',
          'Спроектировал event-driven взаимодействие сервисов через Kafka.',
          'Участвовал в создании pipeline OpenAlex и нормализации данных в Etalonizer.',
          'Разработал frontend аналитического приложения на Next.js с Chart.js.',
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
    description: 'Переработал внутреннюю систему на Go, Gio, WebAssembly, PostgreSQL и gRPC с генерацией Excel/DOCX',
    tags: ['Go', 'PostgreSQL', 'gRPC', 'Gio'],
    icon: 'terminal',
    accent: 'orange',
    stat: '≈4,7× генерация',
    search: ['электроника', 'псц электроника', 'регламент', 'то', 'техническое обслуживание', 'gio', 'webassembly', 'wasm', 'excelize', 'docx', 'ooxml', 'асинхронный worker', 'автоматизация', 'Electronika'],
    intro: 'В ООО «ПСЦ Электроника» разрабатывал систему расчёта регламентов технического обслуживания и формирования документации. Переработал унаследованную C#-версию с использованием Go. Раннюю версию создавал при участии и под руководством Алексея Израилева; затем приложение проходило опытную эксплуатацию.',
    metrics: [
      { value: '≈4,7×', label: 'ускорил генерацию документов относительно Python-версии' },
      { value: '≈2,7×', label: 'ускорил полный рабочий цикл относительно Python-версии' },
      { value: '59/60', label: 'комплектов корректно сформировал с первого запуска на Go' },
    ],
    sections: [
      {
        title: 'Архитектура и реализация',
        bullets: [
          'Реализовал расчётное ядро на Go, desktop-интерфейс на Gio и веб-предпросмотр части расчётов через WebAssembly.',
          'Настроил импорт Excel-спецификаций через excelize и генерацию DOCX через fumiama/go-docx с дополнительной обработкой OOXML.',
          'Перенёс справочники оборудования и технологические карты из Excel в PostgreSQL, добавил транзакции, версионирование и защиту от конфликтующих изменений.',
          'Разделил систему на сервисы с gRPC / Protocol Buffers, вынес генерацию документов в асинхронный worker с повторами, идемпотентностью и журналированием.',
          'Настроил развёртывание через Docker Compose и автоматические проверки в CI.',
        ],
      },
      {
        title: 'Измеримые результаты',
        paragraphs: [
          'Сократил медианное время генерации документов с 2 мин 48 с в промежуточной Python-версии до 36 с на Go — примерно в 4,7 раза. Медианное время полного рабочего цикла сократил с 14 мин 30 с до 5 мин 20 с — примерно в 2,7 раза.',
          'Повысил долю корректно сформированных с первого запуска комплектов с 55/60 до 59/60. По внутренней оценочной модели высвободил около 163 часов рабочего времени в месяц относительно ручной подготовки — эквивалент примерно 122 тыс. ₽ рабочего времени.',
        ],
      },
      {
        title: 'Публичное подтверждение',
        paragraphs: [
          'Моё участие в разработке подтверждается выпуском «Электроника NEWS» за июль 2023 года: на стр. 7 показаны старый и новый интерфейсы, а на стр. 8 директор направления «Сервис» называет меня разработчиком обновлённой версии и сообщает об опытной эксплуатации.',
          'Это публикация о ранней версии приложения: в ней нет конкретных показателей последующих замеров и описания дальнейшей архитектуры, поэтому не выдаю её за подтверждение этих метрик.',
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
    description: 'Разработал REST/gRPC-сервис подбора игроков Valorant с ранжированием и PostgreSQL',
    tags: ['Go', 'gRPC', 'PostgreSQL'],
    icon: 'users',
    accent: 'mint',
    search: ['matchmaking', 'pusha', 'valorant', 'strategy', 'specification'],
    intro: 'Разработал Go-микросервис, который подбирает игроков в составе системы из Go- и Python-сервисов.',
    sections: [
      {
        title: 'Реализация',
        bullets: [
          'Разработал REST API для заявок, поиска кандидатов и формирования групп.',
          'Интегрировал сервис с Python Player Service через gRPC и Protocol Buffers.',
          'Организовал слоистую архитектуру handler → service → repository/provider.',
          'Реализовал ранжирование и фильтрацию через Strategy и Specification Pattern.',
          'Подключил PostgreSQL через pgxpool / raw SQL, использовал транзакции и индексы, добавил Swagger и unit-тесты.',
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
    description: 'Разработал два взаимодействующих Go-сервиса заказов и платежей с gRPC и конкурентной обработкой',
    tags: ['Go', 'gRPC', 'Concurrency'],
    icon: 'server',
    accent: 'orange',
    search: ['orders', 'payments', 'grpc microservices', 'goroutines', 'channels'],
    intro: 'Разработал два Go-микросервиса — Order Service и Payment Service — с взаимодействием через gRPC.',
    sections: [
      {
        title: 'Что реализовано',
        bullets: [
          'Описал контракты Order Service и Payment Service с помощью Protocol Buffers.',
          'Реализовал repository layer и SQL-операции для PostgreSQL.',
          'Добавил таймауты и отмену через context.Context.',
          'Реализовал конкурентную отправку 20 заказов через goroutines, channels и WaitGroup.',
          'Добавил gRPC interceptor, graceful shutdown и тесты с testify / sqlmock.',
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
    description: 'У меня 3 года коммерческого опыта: Smart-Crawler в ИТМО и автоматизация регламентов ТО в ООО «ПСЦ Электроника»',
    tags: ['ИТМО', 'ПСЦ Электроника', 'Go'],
    icon: 'briefcase',
    accent: 'blue',
    search: ['работа', 'опыт', 'итмо', 'лаборант', 'псц', 'электроника', 'backend developer', 'golang', 'регламенты то', '3 года'],
    intro: 'Разрабатываю Go backend в коммерческих проектах: потоковые выгрузки и отказоустойчивые микросервисы в ИТМО, ранее — расчёт регламентов технического обслуживания и генерация документов в «ПСЦ Электроника».',
    sections: [
      {
        title: 'Университет ИТМО · март 2025 — настоящее время',
        paragraphs: ['Работаю лаборантом / Backend-разработчиком над Smart-Crawler (11 микросервисов). Отвечаю прежде всего за Go-сервис асинхронного Data Upload.'],
        bullets: [
          'Реализовал потоковую выгрузку до 500 тыс. записей с контролируемым потреблением памяти.',
          'Работаю с PostgreSQL, Kafka, S3, Qdrant, REST API и фоновыми задачами с восстановлением статусов.',
          'Оптимизировал поиск по DOI до ≈159× в конкретном тестовом сценарии, покрываю сервис тестами, использую Docker и CI/CD.',
        ],
      },
      {
        title: 'ООО «ПСЦ Электроника» · февраль 2023 — апрель 2024',
        paragraphs: ['Разрабатывал внутреннюю систему автоматизации регламентов ТО. Переработал унаследованное C#-приложение на Go с Gio, PostgreSQL и генерацией документов.'],
        bullets: [
          'Реализовал desktop-интерфейс на Gio, веб-предпросмотр через WebAssembly, импорт Excel и генерацию DOCX/OOXML.',
          'Перенёс справочники из общих Excel-файлов в PostgreSQL, использовал gRPC и асинхронный worker, настроил CI.',
          'Сократил медианное время генерации документов примерно в 4,7 раза, а полного рабочего цикла — в 2,7 раза относительно промежуточной Python-версии.',
          'Моё участие в разработке ранней версии и её опытная эксплуатация отражены в корпоративной публикации 2023 года (стр. 7–8).',
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
    description: 'Работаю с Go, PostgreSQL, Kafka, REST/gRPC, S3, Docker, Python/FastAPI и Next.js',
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
          'Использую в Go net/http, chi, context.Context, goroutines, channels и graceful shutdown.',
          'Проектирую REST API и gRPC-контракты с Protocol Buffers, документирую через Swagger/OpenAPI.',
          'Для Python-сервисов использую FastAPI, SQLAlchemy, asyncpg, Alembic и pytest.',
        ],
      },
      {
        title: 'Данные и асинхронная обработка',
        bullets: [
          'Работаю с PostgreSQL, SQL, pgx/pgxpool, индексами и оптимизацией запросов.',
          'Использую Kafka / kafka-go, DLQ, восстановление задач и обработку событий.',
          'Интегрирую S3-совместимые хранилища (Garage, AWS SDK for Go v2) и Qdrant.',
        ],
      },
      {
        title: 'Инфраструктура и frontend',
        bullets: [
          'Использую Docker, Docker Compose, Git, GitHub Actions и CI/CD.',
          'Пишу unit- и integration-тесты, использую race detector и мокирование.',
          'Разрабатываю интерфейсы на React, Next.js, TypeScript/JavaScript и SCSS.',
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
    description: '4 раза выходил в финал НТО, 5 раз побеждал в «Талант НТО» и стал призёром по ИИ',
    tags: ['НТО', 'Олимпиады', 'Конкурсы'],
    icon: 'trophy',
    accent: 'gold',
    stat: '4 финала НТО',
    search: ['достижения', 'награды', 'олимпиада', 'нто', 'талант нто', 'победитель'],
    intro: 'Участвовал в инженерных и IT-соревнованиях, выходил в финалы НТО, побеждал и становился призёром «Талант НТО».',
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
    description: 'Учусь на бакалавриате ИТМО по инфокоммуникационным технологиям и применяю знания в проектах',
    tags: ['ИТМО', 'Бакалавриат', 'Санкт-Петербург'],
    icon: 'graduation',
    accent: 'violet',
    search: ['университет', 'образование', 'итмо', 'обучение', 'студент'],
    intro: 'Учусь на бакалавриате Университета ИТМО в Санкт-Петербурге по направлению «Инфокоммуникационные технологии».',
    sections: [
      {
        title: 'Образовательный путь',
        bullets: [
          'Учусь в ИТМО на бакалавриате по направлению «Инфокоммуникационные технологии», профиль «Мобильные и сетевые технологии».',
          'Применяю знания на практике, работая над микросервисной платформой Smart-Crawler в ИТМО.',
          'Окончил школу № 33 в Ярославле с аттестатом с отличием.',
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
