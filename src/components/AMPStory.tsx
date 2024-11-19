'use client'

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import axios from 'axios'
import Loader from '@/components/loader'

const AMPStoryContent = dynamic(() => import('@/components/AMPStoryContent'), { ssr: false })

const BASE_URL = 'https://w3era.vefogix.com/api/'

export default function AMPStory({ slug }: { slug: string }) {
  const [story, setStory] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchStory = async () => {
      try {
        const response = await axios.get(`${BASE_URL}web-story/${slug}/`)
        setStory(response.data)
        setError(null)
      } catch (error: any) {
        console.error("Failed to fetch story:", error.message)
        setError("Failed to load story. Please try again later.")
      } finally {
        setLoading(false)
      }
    }
    fetchStory()
  }, [slug])

  if (loading) {
    return <div>
      <Loader/>
    </div>
  }
  if (error) {
    return <div>{error}</div>
  }
  if (!story) {
    return <div>No story data available.</div>
  }
  return (
    <>
      <Script src="https://cdn.ampproject.org/v0.js" strategy="lazyOnload" />
      <Script src="https://cdn.ampproject.org/v0/amp-story-1.0.js" strategy="lazyOnload" custom-element="amp-story" />
      <Script src="https://cdn.ampproject.org/v0/amp-video-0.1.js" strategy="lazyOnload" custom-element="amp-video" />
      <Script src="https://cdn.ampproject.org/v0/amp-img-0.1.js" strategy="lazyOnload" custom-element="amp-img" />
      <AMPStoryContent  story={story} />
    </>
  )
}