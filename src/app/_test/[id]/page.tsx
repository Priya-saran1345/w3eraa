
// import { useEffect, useState } from "react";
// import Head from "next/head";
// import { BASE_URL } from "@/util/api";
// declare namespace JSX {
//   interface IntrinsicElements {
//     "amp-img": any
//     "amp-story": any
//     "amp-story-page": any
//     "amp-story-grid-layer": any
//   }
// }
// export default function Page() {
//   const [storyData, setStoryData] = useState<any>();
//   const [visibleCards, setVisibleCards] = useState<number>(0);


//   useEffect(() => {
//     const fetchStoryData = async () => {
//       try {
//         const response = await fetch(
//           `${BASE_URL}web-story/7-ai-tools-to-boost-your-productivity-in-2024/`
//         );
//         if (!response.ok) throw new Error("Failed to fetch story data");
//         const data = await response.json();
//         setStoryData(data);
//       } catch (error) {
//         console.error("Error fetching story data:", error);
//       }
//     };

//     fetchStoryData();
//   }, []);

//   useEffect(() => {
//     if (!storyData?.card) return;

//     const interval = setInterval(() => {
//       setVisibleCards((prev) =>
//         prev < storyData.card.length ? prev + 1 : prev
//       );
//     }, 2000); // Delay of 2 seconds

//     return () => clearInterval(interval);
//   }, [storyData]);

//   if (!storyData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Head>
//         <meta charSet="utf-8" />
//         <script async src="https://cdn.ampproject.org/v0.js"></script>
//         <script
//           async
//           custom-element="amp-story"
//           src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
//         ></script>
//         <title>{storyData.title}</title>
//         <link rel="canonical" href="http://example.ampproject.org/my-story.html" />
//         <meta
//           name="viewport"
//           content="width=device-width,minimum-scale=1,initial-scale=1"
//         />
//         <style amp-boilerplate>
//           {`
//             body {
//               -webkit-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
//               -moz-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
//               -ms-animation: -amp-start 8s steps(1, end) 0s 1 normal both;
//               animation: -amp-start 8s steps(1, end) 0s 1 normal both;
//             }
//           `}
//         </style>
//         <noscript>
//           <style amp-boilerplate>
//             {`
//               body {
//                 -webkit-animation: none;
//                 -moz-animation: none;
//                 -ms-animation: none;
//                 animation: none;
//               }
//             `}
//           </style>
//         </noscript>
//       </Head>
//       <amp-story
//   standalone
//   title="Example Story"
//   publisher="Your Publisher"
//   publisher-logo-src="https://example.com/logo.png"
//   poster-portrait-src="https://example.com/poster.jpg"
// >
//   <amp-story-page id="page1">
//     <amp-story-grid-layer template="fill">
//       <amp-img
//         src="https://example.com/image.jpg"
//         width="900"
//         height="1600"
//         alt="Example Image"
//       ></amp-img>
//     </amp-story-grid-layer>
//     <amp-story-grid-layer template="vertical">
//       <h1>Hello, AMP Story!</h1>
//     </amp-story-grid-layer>
//   </amp-story-page>
// </amp-story>

//     </div>
//   );
// }
import React from 'react'

const Page = () => {
  return (
    <div>Page</div>
  )
}

export default Page