'use client'

import Image from 'next/image'
import { BASE_URL } from "@/util/api"
import { useState, useEffect } from 'react'

// Function to fetch story data
async function getStoryData() {
  const response = await fetch(`${BASE_URL}web-story/7-ai-tools-to-boost-your-productivity-in-2024/`)
  if (!response.ok) {
    throw new Error('Failed to fetch story data')
  }
  return response.json()
}

export default function Stories() {
  const [story, setStory] = useState<any>(null)  // Story data
  const [loading, setLoading] = useState(true)  // Loading state
  const [currentIndex, setCurrentIndex] = useState(0)  // To track current page index

  // Fetch story data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getStoryData()
        setStory(data)  // Set fetched story data
        setLoading(false)  // Set loading state to false
      } catch (error) {
        console.error('Error fetching story data:', error)
        setLoading(false)
      }
    }
    fetchData()
  }, [])  // Run only once when the component mounts

  // Automatically change pages every 5 seconds
  useEffect(() => {
    if (!story || story.card.length === 0) return  // If no story data, return early

    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => {
        const nextIndex = (prevIndex + 1) % story.card.length  // Loop back to the first card
        return nextIndex
      })
    }, 5000)  // Change page every 5 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, [story])

  // Render loading state while fetching data
  if (loading) {
    return <div className="p-4 text-center text-red-500">Loading...</div>
  }

  if (!story) {
    return <div className="p-4 text-center text-red-500">No data available</div>
  }

  const { title, image, card } = story

  return (
    <main className="min-h-screen bg-black">
      <amp-story
        standalone=""
        title={title}
        publisher="My Publisher"
        publisher-logo-src="/path/to/logo.png"
        poster-portrait-src={image}
        background-color="#000"
      >
        {card && card.length > 0 ? (
          card.map((cardItem: any, index: number) => (
            <amp-story-page
              key={cardItem.id}
              id={`page${index + 1}`}
              style={{ display: currentIndex === index ? 'block' : 'none' }} // Only show the current page
            >
              <amp-story-grid-layer template="fill">
                <Image
                  src={cardItem.image}
                  alt={cardItem.title || `Story Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0}
                />
              </amp-story-grid-layer>
              <amp-story-grid-layer template="vertical" className="p-4">
                <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                  <h1 className="text-2xl font-bold text-white mb-2">{cardItem.title}</h1>
                  <p className="text-white">{cardItem.description}</p>
                </div>
              </amp-story-grid-layer>
            </amp-story-page>
          ))
        ) : (
          <amp-story-page id="fallback">
            <amp-story-grid-layer template="vertical">
              <div className="flex items-center justify-center h-full">
                <p className="text-white text-xl">No cards available</p>
              </div>
            </amp-story-grid-layer>
          </amp-story-page>
        )}
      </amp-story>
    </main>
  )
}
