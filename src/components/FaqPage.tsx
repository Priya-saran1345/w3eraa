import { BASE_URL } from '@/util/api'
import AnimatedFaqs from '@/app/faq/AnimatedFaqs'

async function getFaqData() {
  const res = await fetch(`${BASE_URL}faq/`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch FAQ data');
  }
  return res.json();
}
export default async function FaqPage() {
  const faqData = await getFaqData();
  return <AnimatedFaqs faqData={faqData} />;
}

