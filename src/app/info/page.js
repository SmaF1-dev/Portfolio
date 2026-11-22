import { redirect } from 'next/navigation';

export default function LegacyInfoPage() {
  redirect('/explore/about');
}
