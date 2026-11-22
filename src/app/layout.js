import '@fontsource-variable/rubik';
import './globals.scss';

export const metadata = {
  title: 'SmaF1',
  description:
    'Интерактивное портфолио Никиты Лютого (SmaF1): Go, микросервисы, PostgreSQL, Kafka, проекты и достижения.',
  openGraph: {
    title: 'SmaF1 — Никита Лютый',
    description: 'Go Backend Developer. Микросервисы, инфраструктура и проекты.',
    type: 'website',
    locale: 'ru_RU',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
