import { BASE_URL } from '@/util/api';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navigation from '@/components/navbar';
import DownNavbar from '@/components/DownNavbar';
import Revenue from '@/components/revenue';
import CustomerChoose from '@/components/CustomerChoose';
import CaseStudyContent from '@/components/Casestudycontent';
import CommonBanner from '@/components/Common-Banner';

async function fetchData() {
  try {
    const [caseStudyRes, otherRes] = await Promise.all([
      fetch(`${BASE_URL}case-study/`, { cache: 'no-store' }),
      fetch(`${BASE_URL}other/case-study/`, { cache: 'no-store' }),
    ]);

    if (!caseStudyRes.ok) throw new Error('Failed to fetch case study data');
    if (!otherRes.ok) throw new Error('Failed to fetch other case study data');

    const caseStudyData = await caseStudyRes.json();
    const otherData = await otherRes.json();

    return { caseStudyData, otherData };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to be handled by Next.js error boundary
  }
}

export default async function CaseStudyPage() {
  const { caseStudyData, otherData } = await fetchData();

  return (
    <div>
      <Header />
      <DownNavbar />
      <Navigation />
      <CommonBanner
        title={otherData.banner_title}
        description={otherData.banner_desc}
        image={otherData.image || ''}
        btnlink={otherData.button_url}
        btntext={otherData.button_text}
        image_alt={otherData.image_alt}
        status={otherData.status}
      />
      <CaseStudyContent props={caseStudyData} />
      <div className="w-full mx-auto xl:w-[75%] flex flex-col gap-4 px-6 xl:px-2 py-12">
        {caseStudyData.content_1 && caseStudyData.content_1[0] && (
          <div
            className="text-homegrey text-[18px]"
            dangerouslySetInnerHTML={{ __html: caseStudyData.content_1[0].description }}
          />
        )}
      </div>
      <Revenue />
      <CustomerChoose />
      <Footer />
    </div>
  );
}

