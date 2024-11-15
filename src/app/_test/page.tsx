import Head from "next/head";
import Script from 'next/script'
import Image from 'next/image'

export const metadata = {
  title: 'Dynamic Web Stories',
  publisher: 'My Publisher',
}

export const config = {
  amp: true,
}


  

  export default function Stories() {
    return (
      <>
        <Script
          async
          key="amp-story"
          src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
          custom-element="amp-story"
        />
        <main>
          <amp-story
            standalone=""
            title="Dynamic Web Stories"
            publisher="My Publisher"
            publisher-logo-src="/path/to/logo.png"
            poster-portrait-src="/path/to/poster.jpg"
          >
            <amp-story-page id="page1">
              <amp-story-grid-layer template="fill">
                <Image src="/path/to/image1.jpg" alt="Story Image 1" layout="fill" />
              </amp-story-grid-layer>
              <amp-story-grid-layer template="vertical">
                <h1>Dynamic Content Page 1</h1>
                <p>This is the first dynamic page of our story.</p>
              </amp-story-grid-layer>
            </amp-story-page>
  
            <amp-story-page id="page2">
              <amp-story-grid-layer template="fill">
                <Image src="/path/to/image2.jpg" alt="Story Image 2" layout="fill" />
              </amp-story-grid-layer>
              <amp-story-grid-layer template="vertical">
                <h1>Follow Us</h1>
                <p>Visit <a href="https://www.w3era.com">www.w3era.com</a> for insights.</p>
              </amp-story-grid-layer>
            </amp-story-page>
  
            <amp-story-page id="page3">
              <amp-story-grid-layer template="fill">
                <Image src="/images/w3erapic.png" alt="Promotional Image" layout="fill" />
              </amp-story-grid-layer>
              <amp-story-grid-layer template="vertical">
                <h1>Stay Ahead in Digital Marketing</h1>
                <p>Contact: +91-7073197281</p>
              </amp-story-grid-layer>
            </amp-story-page>
          </amp-story>
        </main>
      </>
    )
  }