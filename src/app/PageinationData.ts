'use server';
import { BASE_URL } from "@/util/api";

export default async function PaginationData({slug }: any) {
  try {
    // Encode the slug to handle special characters in the URL
    const url = `${BASE_URL}${slug}/`;
    // console.log('Requesting URL:', url);

    // Fetch metadata using GET method
    const res = await fetch(url, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        // Remove Content-Type header if unnecessary for GET
        'Content-Type': 'application/json',
      },
    });

    // console.log('Response status:', res.status);
    // console.log('Response headers:', res.headers);

    if (!res.ok) {
console.log(`HTTP error! status: ${res.status}`)
    }

    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await res.json();
      console.log('Response Data:', data);
      return data;
    } 
    else {
      throw new Error('Response is not JSON');
    }
  } catch (error) {
    console.error("Error fetching meta:", error);
    throw error;
  }
}
