'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { BASE_URL } from '@/util/api'
import axios from 'axios'
import { usePathname } from 'next/navigation';

export default function AMPStory() {
  const pathname = usePathname();
  const segments = pathname.replace(/\/$/, '').split('/');
  const lastSegment = segments.pop();
  const [story, setStory] = useState<any>();

  useEffect(() => {
    // This effect runs only on the client side
    document.documentElement.setAttribute('amp', '');
  }, []);

  const fetchStory = async () => {
    try {
      const response = await axios.get(`${BASE_URL}web-story/${lastSegment}/`);
      setStory(response.data);
    } catch (error: any) {
      console.log("Service error", error.message);
    }
  };

  useEffect(() => {
    fetchStory();
  }, []);

  return (
    <>
      {/* AMP Scripts */}
      <Script src="https://cdn.ampproject.org/v0.js" strategy="beforeInteractive" />
      <Script src="https://cdn.ampproject.org/v0/amp-story-1.0.js" strategy="beforeInteractive" custom-element="amp-story" />
      <Script src="https://cdn.ampproject.org/v0/amp-video-0.1.js" strategy="beforeInteractive" custom-element="amp-video" />
      <Script src="https://cdn.ampproject.org/v0/amp-img-0.1.js" strategy="beforeInteractive" custom-element="amp-img" />

      {/* AMP Story */}
      <amp-story
        standalone=""
        title={story?.title?.replace(/<[^>]*>?/gm, '') || "AMP Story"}
        publisher="W3era"
        publisher-logo-src="https://amp.dev/favicons/coast-228x228.png"
        poster-portrait-src={story?.image || "https://amp.dev/static/samples/img/story_dog2_portrait.jpg"}
      >
        {/* Dynamic Story Pages */}
        {story?.card?.map((card: any, index: number) => (
          <amp-story-page key={index} id={`page-${index + 1}`}>
            <amp-story-grid-layer template="fill">
              <amp-img
                src={card.image}
                width="720"
                height="1280"
                layout="responsive"
                animate-in="fade-in"
                animate-in-duration="0.5s"
              ></amp-img>
            </amp-story-grid-layer>
            <amp-story-grid-layer template="vertical">
              <h1 animate-in="fly-in-bottom" animate-in-delay="0.3s">
                {card.title?.replace(/<[^>]*>?/gm, '')}
              </h1>
              <p animate-in="fly-in-left" animate-in-delay="0.5s">
                {card.description?.replace(/<[^>]*>?/gm, '')}
              </p>
            </amp-story-grid-layer>
          </amp-story-page>
        ))}

        {/* Add Multiple Pages with Fixed Layouts */}
        {story?.card?.map((card: any, index: number) => (
          <amp-story-page key={`layout-${index}`} id={`layout-page-${index}`}>
            <amp-story-grid-layer template="thirds">
              <amp-img
                grid-area="upper-third"
                src={card.image}
                width="560"
                height="420"
                layout="responsive"
              ></amp-img>
              <amp-img
                grid-area="middle-third"
                src={card.image}
                width="560"
                height="420"
                layout="responsive"
              ></amp-img>
              <amp-img
                grid-area="lower-third"
                src={card.image}
                width="560"
                height="420"
                layout="responsive"
              ></amp-img>
            </amp-story-grid-layer>
          </amp-story-page>
        ))}
        {/* AMP Story Bookend */}
        {/* <amp-story-bookend
          src="https://amp.dev/static/samples/json/bookend.json"
          layout="nodisplay"
        ></amp-story-bookend> */}
      </amp-story>
    </>
  );
}
