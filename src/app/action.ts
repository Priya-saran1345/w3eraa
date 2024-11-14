'use server';
import { BASE_URL } from "@/util/api";

export const fetchMeta = async (slug: string) => {
  console.log('Requesting metadata for slug:', slug);

  try {
    // Remove leading and trailing slashes, but keep internal slashes
    const formattedSlug = slug.replace(/^\/+|\/+$/g, '') || '/';
    console.log('Posting metadata for slug:', formattedSlug);
 
    const res = await fetch(`${BASE_URL}meta-data/`, { 
      method: 'POST',  // Change the method to POST
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ slug: formattedSlug })  // Send the slug as JSON
    });

    console.log('Response status:', res.status);
    console.log('Response headers:', res.headers);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const contentType = res.headers.get("content-type");
    console.log('Content-Type:', contentType);

    if (contentType && contentType.includes("application/json")) {
      const data = await res.json();
      console.log('Received JSON data:', data); // Debug log
      return data.data;
    } else {
      throw new Error('Response is not JSON');
    }
  } catch (error) {
    console.error("Error posting meta:", error);
    throw error;
  }
};
