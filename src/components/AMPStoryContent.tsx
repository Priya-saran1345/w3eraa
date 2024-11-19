'use client'

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
  useEffect(() => {
    document.documentElement.setAttribute('amp', '')
  }, [])

  const stripHtml = (html: string) => {
    return html.replace(/<[^>]*>?/gm, '')
  }

  return (
    <amp-story
      standalone=""
      title={stripHtml(story.title) || "AMP Story"}
      publisher="W3era"
      publisher-logo-src="https://amp.dev/favicons/coast-228x228.png"
      poster-portrait-src={story.image || "https://amp.dev/static/samples/img/story_dog2_portrait.jpg"}
    >
      {story.card.map((card: Card, index: number) => (
        <amp-story-page key={card.id} id={`page-${index + 1}`}>
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
            <div className='bg-black/45 p-4 rounded-xl' animate-in="fly-in-left ">

            <h1  animate-in="fly-in-top" animate-in-delay="0.3s" className=' text-[24px] font-semibold text-white text-center'>
              {stripHtml(card.title)}
            </h1>
            <p animate-in="fly-in-bottom" animate-in-delay="0.5s" className='text-white text-center mt-4 font-medium text-[20px]'>
              {stripHtml(card.description)}
            </p>
            </div>
          </amp-story-grid-layer>
        </amp-story-page>
      ))}
    </amp-story>
  )
}