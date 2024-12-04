
import React from 'react'
 import About from '@/components/About'
 import { fetchMeta } from "@/app/action";
 import { Suspense } from 'react'
import { BASE_URL } from '@/util/api';
import Footer from '@/components/footer'
import Header from '@/components/header'


async function SchemaScript() {
  const metaData = await fetchMeta("about-us")
  const schemaData = metaData?.scripts[0].content

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
async function fetchData() {
  try {
    const [caseStudyRes] = await Promise.all([
      fetch(`${BASE_URL}about/`, { cache: 'no-store' }),
     
    ]);
    if (!caseStudyRes.ok) throw new Error('Failed to fetch case study data');
    const aboutData = await caseStudyRes.json();
    return { aboutData };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to be handled by Next.js error boundary
  }
}
 export default async function AboutUS() {
  const { aboutData } = await fetchData();

  return (
    <>
       <Suspense fallback={null}>
        <SchemaScript />
      </Suspense>
      <Header />

    <About about={aboutData}  />
    <Footer />

    </>
  )
}
export async function generateMetadata() {
  try {
    const metaData = await fetchMeta("about-us");

    return {
      title: metaData?.title || '',
      description: metaData?.description || '',
      keywords: metaData?.keywords ||'',

      openGraph: metaData?.openGraph
        ? {
            type: metaData.openGraph.type || '',
            title: metaData.openGraph.title || '',
            description: metaData.openGraph.description || '',
            url: metaData.openGraph.url || '',
            siteName: metaData.openGraph.siteName || '',
            images: metaData.openGraph.images?.map((image:any) => ({
              url: image?.url || '',
              width: parseInt(image?.width) || '',
              height: parseInt(image?.height) || '',
              alt: image?.alt || '',
            })) || [],
            locale: metaData.openGraph.locale || '',
            authors: metaData.openGraph.authors || [], 
            publishedTime: metaData.openGraph.publishedTime || '',
          }
        : undefined,
      robots: {
        index: metaData?.robots?.index ?? false, // Default to true if not provided
        follow: metaData?.robots?.follow ?? false,
      },
      icons: metaData?.icons
        ? {
            icon: metaData.icons.icon || '',
            shortcut: metaData.icons.shortcut || '',
            apple: metaData.icons.apple || '',
          }
        : undefined,
      twitter: metaData?.twitter
        ? {
            card: metaData.twitter.card || '',
            title: metaData.twitter.title || '',
            description: metaData.twitter.description || '',
            creator: metaData.twitter.creator || '',
            images: metaData.twitter.images || '',
          }
        : undefined,
      // alternates: {
      //   canonical: metaData?.openGraph?.url || '',
      // },
    };
  }
 catch (error) {
    console.error('Error fetching meta data:', error);
    return {
      title: 'W3era® | Performance Driven Digital Marketing Company',
      description: 'A premier Digital Marketing Company, W3era® offer comprehensive services like SEO, PPC, and Web development. Schedule a free marketing consultation today.',
    };
  }
}
