'use client'
import Image from 'next/image'
import { BASE_URL } from "@/util/api";
import { useEffect, useState } from 'react';

async function getStoryData() {
  const response = await fetch(`${BASE_URL}web-story/7-ai-tools-to-boost-your-productivity-in-2024/`);
  if (!response.ok) {
    throw new Error('Failed to fetch story data');
  }
  return response.json();
}

export default function Stories() {
  const [story, setStory] = useState<any>(null);

  useEffect(() => {
    async function fetchStory() {
      const fetchedStory = await getStoryData();
      setStory(fetchedStory);
    }
    fetchStory();
  }, []);

  if (!story) {
    return <div className="p-4 text-center text-red-500">No data available</div>;
  }

  const { title, image, card } = story;

  return (
    <main className="max-h-screen bg-black">
      <amp-story
        standalone=""
        title={title}
        publisher="My Publisher"
        publisher-logo-src="/path/to/logo.png"
        poster-portrait-src={image}
        background-color="#000"
      >
        {/* Loop through the card data */}
        {card && card.length > 0 ? (
          card?.map((cardItem: any, index: number) => (
            <amp-story-page key={cardItem.id} id={`page${index + 1}`}>
              <amp-story-grid-layer template="fill">
                <Image
                  src={cardItem.image}
                  alt={cardItem.title || `Story Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  priority={index === 0}
                  className='max-w-[300px] min-h-[300px]'
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
  );
}
