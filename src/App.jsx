import { useEffect, useRef, useState } from 'react'
import './App.css'

const translations = {
  EN: {
    nav: ['SERVICES', 'PORTFOLIO', 'HOW WE WORK', 'ABOUT', 'PAYMENT DETAILS'],
    contact: 'CONTACT US',
    eyebrow: 'INDEPENDENT DIGITAL STUDIO',
    title: <>WE DESTROY<br />THE ORDINARY.<br /><span>WE BUILD THE EXTRAORDINARY.</span></>,
    description:
      'We design and develop digital experiences that help brands stand out, communicate clearly and move forward.',
    primary: 'START A PROJECT',
    secondary: 'EXPLORE OUR WORK',

    servicesEyebrow: 'OUR SERVICES',
    servicesTitle: <><span className="hero-services-heading-main">Web design & website development.</span><span className="hero-services-heading-accent">For businesses and brands.</span></>,
    servicesDescription:
      'From interface design and website development to launch, basic SEO setup and post-launch support.',

    detailLabel: 'WHAT’S INCLUDED',
    modalContact: 'DISCUSS THIS PROJECT',
    closeLabel: 'Close service details',

    services: [
      {
        number: '01',
        title: 'WEB DESIGN & REDESIGN',
        description: 'Modern interface design and redesign of existing websites.',
        image: '/assets/service-01-web-design.webp',
        alt: 'NEXORA ONE web design concept',
        details: [
          'Website design from scratch.',
          'Redesign of existing pages and interfaces.',
          'Typography, colours and visual direction.',
          'Responsive layouts for desktop, tablet and mobile.',
          'Design preparation for further development.',
        ],
      },
      {
        number: '02',
        title: 'WEBSITE DEVELOPMENT',
        description: 'Websites for businesses, brands and personal projects.',
        image: '/assets/service-02-website-development.webp',
        alt: 'BUILDCORE corporate website concept',
        details: [
          'Landing pages for products and services.',
          'Corporate and multi-page websites.',
          'Personal websites and portfolios.',
          'Responsive layouts for mobile devices.',
          'Basic contact forms and agreed functionality.',
        ],
      },
      {
        number: '03',
        title: 'SOCIAL MEDIA DESIGN',
        description: 'Telegram channels, profile visuals and social media graphics.',
        image: '/assets/service-03-social-media-design.webp',
        alt: 'AURORA TECH social media design concept',
        details: [
          'Telegram channel and profile design.',
          'Avatars, covers and pinned banners.',
          'Post templates and promotional graphics.',
          'Consistent visual style for social profiles.',
          'Graphics prepared for the selected platforms.',
        ],
      },
      {
        number: '04',
        title: 'WEBSITE IMPROVEMENTS',
        description: 'Website fixes, content updates and interface improvements.',
        image: '/assets/service-04-website-improvements.webp',
        alt: 'FORMA INTERIORS website improvement concept',
        details: [
          'Fixing display and interface issues.',
          'Text, image and content updates.',
          'Structure and layout adjustments.',
          'Improvements for mobile devices.',
          'Basic loading performance improvements.',
        ],
      },
      {
        number: '05',
        title: 'WEBSITE LAUNCH',
        description: 'Domain, hosting, SSL configuration and website publication.',
        image: '/assets/service-05-website-launch.webp',
        alt: 'LAUNCHSITE website launch concept',
        details: [
          'Assistance with domain selection and registration.',
          'Hosting setup and configuration.',
          'SSL certificate and HTTPS setup.',
          'Website deployment and publication.',
          'Basic checks after launch.',
        ],
      },
      {
        number: '06',
        title: 'SEO & ANALYTICS',
        description: 'Basic SEO setup and website analytics integration.',
        image: '/assets/service-06-seo-analytics.webp',
        alt: 'METRIX SEO and analytics concept',
        details: [
          'Basic SEO structure for website pages.',
          'Page titles and meta descriptions.',
          'Google Search Console integration.',
          'Google Analytics integration.',
          'Basic indexing and analytics checks.',
        ],
      },
      {
        number: '07',
        title: 'POST-LAUNCH SUPPORT',
        description: 'Technical assistance, updates and ongoing website improvements.',
        image: '/assets/service-07-website-support.webp',
        alt: 'SITECARE website support concept',
        details: [
          'Technical assistance for agreed tasks.',
          'Website content updates.',
          'Minor changes and improvements.',
          'Checks of website availability and basic functions.',
          'Further support under individually agreed terms.',
        ],
      },
    ],

    footer: 'WE DESTROY THE ORDINARY. WE BUILD THE EXTRAORDINARY.',
  },

  RU: {
    nav: ['УСЛУГИ', 'ПОРТФОЛИО', 'КАК МЫ РАБОТАЕМ', 'О СТУДИИ', 'РЕКВИЗИТЫ'],
    contact: 'СВЯЗАТЬСЯ',
    eyebrow: 'НЕЗАВИСИМАЯ DIGITAL-СТУДИЯ',
    title: <>МЫ РАЗРУШАЕМ<br />ПРИВЫЧНОЕ,<br /><span>СОЗДАВАЯ НОВОЕ.</span></>,
    description:
      'Мы проектируем и разрабатываем цифровые решения, которые помогают брендам выделяться, ясно доносить идеи и развиваться.',
    primary: 'ОБСУДИТЬ ПРОЕКТ',
    secondary: 'НАШИ РАБОТЫ',

    servicesEyebrow: 'НАШИ УСЛУГИ',
    servicesTitle: <><span className="hero-services-heading-main">Веб-дизайн и разработка сайтов.</span><span className="hero-services-heading-accent">Для бизнеса и брендов.</span></>,
    servicesDescription:
      'Создаём сайты и цифровое оформление, помогаем с запуском, базовой SEO-настройкой и дальнейшей поддержкой.',

    detailLabel: 'ЧТО ВХОДИТ В УСЛУГУ',
    modalContact: 'ОБСУДИТЬ ПРОЕКТ',
    closeLabel: 'Закрыть описание услуги',

    services: [
      {
        number: '01',
        title: 'ВЕБ-ДИЗАЙН И РЕДИЗАЙН',
        description: 'Создание современных интерфейсов и обновление существующих сайтов.',
        image: '/assets/service-01-web-design.webp',
        alt: 'Концепция веб-дизайна NEXORA ONE',
        details: [
          'Разработка дизайна сайта с нуля.',
          'Редизайн существующих страниц и интерфейсов.',
          'Подбор типографики, цветов и визуального направления.',
          'Адаптивные макеты для компьютеров, планшетов и смартфонов.',
          'Подготовка дизайна для дальнейшей разработки.',
        ],
      },
      {
        number: '02',
        title: 'РАЗРАБОТКА САЙТОВ',
        description: 'Создание сайтов для бизнеса, брендов и личных проектов.',
        image: '/assets/service-02-website-development.webp',
        alt: 'Концепция корпоративного сайта BUILDCORE',
        details: [
          'Landing Page для презентации продукта или услуги.',
          'Корпоративные и многостраничные сайты.',
          'Персональные сайты и портфолио.',
          'Адаптивная версия для мобильных устройств.',
          'Базовые формы обратной связи и функциональность по согласованному заданию.',
        ],
      },
      {
        number: '03',
        title: 'СОЦИАЛЬНЫЕ СЕТИ',
        description: 'Telegram, оформление профилей и графические материалы.',
        image: '/assets/service-03-social-media-design.webp',
        alt: 'Концепция оформления Telegram и социальных сетей AURORA TECH',
        details: [
          'Оформление Telegram-каналов и профилей.',
          'Аватары, обложки и закреплённые баннеры.',
          'Шаблоны публикаций и рекламные креативы.',
          'Единый визуальный стиль социальных профилей.',
          'Подготовка графики под требования выбранных площадок.',
        ],
      },
      {
        number: '04',
        title: 'ДОРАБОТКА САЙТОВ',
        description: 'Исправления, обновление контента и улучшение интерфейсов.',
        image: '/assets/service-04-website-improvements.webp',
        alt: 'Концепция улучшения сайта FORMA INTERIORS',
        details: [
          'Исправление ошибок отображения и интерфейса.',
          'Обновление текстов, изображений и контента.',
          'Корректировка структуры и расположения блоков.',
          'Улучшение отображения на мобильных устройствах.',
          'Базовая оптимизация скорости загрузки.',
        ],
      },
      {
        number: '05',
        title: 'ЗАПУСК САЙТА',
        description: 'Домен, хостинг, настройка SSL и публикация сайта.',
        image: '/assets/service-05-website-launch.webp',
        alt: 'Концепция запуска сайта LAUNCHSITE',
        details: [
          'Помощь с подбором и регистрацией домена.',
          'Настройка и подключение хостинга.',
          'Установка SSL-сертификата и настройка HTTPS.',
          'Размещение готового сайта в интернете.',
          'Базовая проверка работы после запуска.',
        ],
      },
      {
        number: '06',
        title: 'SEO И АНАЛИТИКА',
        description: 'Базовая SEO-настройка и подключение аналитики сайта.',
        image: '/assets/service-06-seo-analytics.webp',
        alt: 'Концепция SEO и аналитики METRIX',
        details: [
          'Базовая SEO-структура страниц.',
          'Настройка заголовков Title и Meta Description.',
          'Подключение Google Search Console.',
          'Интеграция Google Analytics.',
          'Базовая проверка индексации и аналитических данных.',
        ],
      },
      {
        number: '07',
        title: 'ПОДДЕРЖКА ПОСЛЕ ЗАПУСКА',
        description: 'Техническое сопровождение, обновления и дальнейшие улучшения сайта.',
        image: '/assets/service-07-website-support.webp',
        alt: 'Концепция технической поддержки SITECARE',
        details: [
          'Техническая помощь по согласованным задачам.',
          'Обновление контента сайта.',
          'Небольшие изменения и улучшения.',
          'Проверка доступности и основных функций сайта.',
          'Дальнейшая поддержка на индивидуально согласованных условиях.',
        ],
      },
    ],

    footer: 'МЫ РАЗРУШАЕМ ПРИВЫЧНОЕ, СОЗДАВАЯ НОВОЕ.',
  },
}

function App() {
  const [language, setLanguage] = useState('EN')
  const [activeServiceNumber, setActiveServiceNumber] = useState(null)
  const historyEntryRef = useRef(false)

  const content = translations[language]

  const activeService = content.services.find(
    (service) => service.number === activeServiceNumber
  )

  useEffect(() => {
    if (!activeServiceNumber) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    if (!historyEntryRef.current) {
      window.history.pushState(
        { ...window.history.state, destructionServiceModal: true },
        '',
        window.location.href
      )
      historyEntryRef.current = true
    }

    const handlePopState = () => {
      historyEntryRef.current = false
      setActiveServiceNumber(null)
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (window.history.state?.destructionServiceModal) {
          window.history.back()
        } else {
          historyEntryRef.current = false
          setActiveServiceNumber(null)
        }
      }
    }

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeServiceNumber])

  const closeServiceModal = () => {
    if (window.history.state?.destructionServiceModal) {
      window.history.back()
    } else {
      historyEntryRef.current = false
      setActiveServiceNumber(null)
    }
  }

  return (
    <div className="site-shell" id="home">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Destruction Digital home">
  <img
    src="/assets/logo-wordmark.png"
    alt="DESTRUCTION"
    className="brand-logo"
  />
  <span className="brand-digital">DIGITAL</span>
</a>

        <nav className="main-nav" aria-label="Main navigation">
          {content.nav.map((item, index) => (
            <a
              key={item}
              href={['#services', '#portfolio', '#process', '#about', '#requisites'][index]}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="language-switch">
            <button
              className={language === 'EN' ? 'active' : ''}
              onClick={() => setLanguage('EN')}
              type="button"
            >
              EN
            </button>
            <span>/</span>
            <button
              className={language === 'RU' ? 'active' : ''}
              onClick={() => setLanguage('RU')}
              type="button"
            >
              RU
            </button>
          </div>

          <a
            className="header-contact"
            href="https://t.me/destructiondigital"
            target="_blank"
            rel="noreferrer"
          >
            {content.contact} <span>↗</span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero-section">
  <div className="hero-copy">
    <div className="eyebrow">
      <span className="eyebrow-line" />
      {content.eyebrow}
    </div>

    <h1>{content.title}</h1>

    <p className="hero-description">{content.description}</p>

    <div className="hero-actions">
      <a
        className="button-primary"
        href="https://t.me/destructiondigital"
        target="_blank"
        rel="noreferrer"
      >
        {content.primary} <span>↗</span>
      </a>

      <a className="button-secondary" href="#portfolio">
        {content.secondary} <span>→</span>
      </a>
    </div>
  </div>

  <div className="hero-services-copy">
    <div className="eyebrow">
      <span className="eyebrow-line" />
      {content.servicesEyebrow}
    </div>

    <h2>{content.servicesTitle}</h2>

    <p>{content.servicesDescription}</p>
  </div>
</section>

        <section className="services-preview" id="services">
          <div className="service-cards">
            {content.services.map((service) => (
              <button
                className="service-card"
                key={service.number}
                type="button"
                onClick={() => setActiveServiceNumber(service.number)}
                aria-haspopup="dialog"
                aria-label={`${service.title}. View details`}
              >
                <div className="service-card-image">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="service-card-content">
                  <div className="service-card-top">
                    <span>{service.number}</span>
                    <span>↗</span>
                  </div>

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </button>
            ))}
          </div>

          <a
            className="text-link"
            href="https://t.me/destructiondigital"
            target="_blank"
            rel="noreferrer"
          >
            {language === 'RU' ? 'ОБСУДИТЬ ПРОЕКТ' : 'DISCUSS YOUR PROJECT'}
            <span>→</span>
          </a>
        </section>

        <section className="future-sections" id="portfolio">
          <span>02 / PORTFOLIO</span>
          <span id="process">03 / HOW WE WORK</span>
          <span id="about">04 / ABOUT THE STUDIO</span>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand">DESTRUCTION<span> DIGITAL</span></div>
        <p>{content.footer}</p>
        <span>© 2026 DESTRUCTION DIGITAL</span>
      </footer>

      {activeService && (
        <div
          className="service-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeServiceModal()
            }
          }}
        >
          <section
            className="service-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <button
              className="service-modal-close"
              type="button"
              onClick={closeServiceModal}
              aria-label={content.closeLabel}
            >
              ×
            </button>

            <div className="service-modal-image">
              <img src={activeService.image} alt={activeService.alt} />
            </div>

            <div className="service-modal-content">
              <span className="service-modal-kicker">
                {activeService.number} / DESTRUCTION DIGITAL
              </span>

              <h2 id="service-modal-title">{activeService.title}</h2>

              <p className="service-modal-description">
                {activeService.description}
              </p>

              <h3>{content.detailLabel}</h3>

              <ul className="service-modal-list">
                {activeService.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>

              <a
                className="service-modal-cta"
                href="https://t.me/destructiondigital"
                target="_blank"
                rel="noreferrer"
              >
                {content.modalContact} <span>↗</span>
              </a>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default App