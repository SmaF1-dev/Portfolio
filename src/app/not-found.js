import Link from 'next/link';
import SiteHeader from './components/SiteHeader';

export default function NotFound() {
  return (
    <div className="notFoundPage">
      <SiteHeader compact />
      <main>
        <span className="notFoundCode">404 / NOT FOUND</span>
        <h1>Такой страницы нет.</h1>
        <p>Попробуй вернуться к поиску — там собраны все разделы портфолио.</p>
        <Link href="/">Вернуться на главную →</Link>
      </main>
    </div>
  );
}
