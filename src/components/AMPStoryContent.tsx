'use client'
import { useRouter } from 'next/navigation'

import { useEffect } from 'react'

interface Card {
  id: number
  title: string
  description: string
  image: string
}

interface Story {
  id: number
  slug: string
  image: string
  image_alt: string
  title: string
  description: string
  author: string
  post_date: string
  card: Card[]
}

export default function AMPStoryContent({ story }: { story: Story }) {
  const router = useRouter()
  useEffect(() => {
    document.documentElement.setAttribute('amp', '')
  }, [])

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>?/gm, '')
  }
  const handleCancel = () => {

    // Navigate back in history
    // router.back();

    // // Optional: Force a full-page reload
    // setTimeout(() => {
    //   window.location.reload();
    // }, 0);
    window.location.href = '/web-stories'; // Replace with your actual previous page

  };

  return (
    <>
      <button
        onClick={handleCancel}
        className="absolute top-4 right-4 z-50 bg-black/45 bg-opacity-50 text-white rounded-full p-2"
        aria-label="Close story"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>

      <div>

        <amp-story
          standalone=""
          title={stripHtml(story.title) || "AMP Story"}
          publisher="W3era"
          publisher-logo-src="https://amp.dev/favicons/coast-228x228.png"
          poster-portrait-src={story.image || "https://amp.dev/static/samples/img/story_dog2_portrait.jpg"}
        >
          {story.card.map((card: Card, index: number) => (
            <amp-story-page key={card.id} id={`page-${index + 1}`} auto-advance-after="10s">
              <amp-story-grid-layer template="fill">
                <amp-img
                  src={card.image}
                  width="720"
                  height="1280"
                  layout="responsive"
                  animate-in="fade-in"
                  animate-in-duration="0.5s"
                  alt={story.image_alt}
                />
              </amp-story-grid-layer>
              <amp-story-grid-layer template="vertical">
                <div className='bg-black/45 p-4 rounded-xl' animate-in="fly-in-bottom">
                  <h1 animate-in="fly-in-top" animate-in-delay="0.3s" className=' text-[24px] font-semibold text-white text-center'>
                    {stripHtml(card.title)}
                  </h1>
                  <p
                    animate-in="fly-in-left"
                    animate-in-delay="0.5s"
                    className="text-white text-center mt-4 font-medium text-[20px]"
                    dangerouslySetInnerHTML={{ __html: card.description }}>
                  </p>
                </div>
              </amp-story-grid-layer>
            </amp-story-page>
          ))}
        </amp-story>
      </div>

    </>
  )
}