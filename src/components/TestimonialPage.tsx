import Footer from '@/components/footer'
import Header from '@/components/header'
import Navigation from '@/components/navbar'
import CommonBanner from '@/components/Common-Banner'
import TestimonialVideo from '@/components/testimonial-video'
import TestimonialCard from '@/components/testimonialCard'
import { BASE_URL } from '@/util/api'
import DownNavbar from '@/components/DownNavbar'

async function fetchData() {
  try {
    const [testimonialRes, otherRes] = await Promise.all([
      fetch(`${BASE_URL}testimonial/`, { cache: 'no-store' }),
      fetch(`${BASE_URL}other/testimonials/`, { cache: 'no-store' }),
    ]);
    if (!testimonialRes.ok) throw new Error('Failed to fetch testimonial data');
    if (!otherRes.ok) throw new Error('Failed to fetch other testimonial data');
    const testimonial = await testimonialRes.json();
    const apidata = await otherRes.json();
    return { testimonial, apidata };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
export default async function TestimonialPage() {
  const { testimonial, apidata } = await fetchData();
  return (
    <div>
      <Header />
      <DownNavbar />
      <Navigation />
      <CommonBanner 
        title={apidata.title} 
        description={apidata.body}  
        image={apidata.image} 
        btnlink={apidata.button_url} 
        btntext={apidata.button_text}
        image_alt={apidata.image_alt} 
      />
      <TestimonialCard props={testimonial.review} />
      <TestimonialVideo props={testimonial.clients_say_card} />
      <Footer />
    </div>
  )
}

