'use server';
import { BASE_URL } from "@/util/api";
import { notFound } from "next/navigation";

export default async function fetchMeta(slug: string) {
  try {
    const url = `${BASE_URL}${encodeURIComponent(slug)}/`;

    const res = await fetch(url, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      // If the response is not OK, throw an error
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await res.json();
      return data;
    } else {
      throw new Error('Response is not JSON');
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    // Instead of redirecting here, we'll throw the notFound() error
    notFound();
  }
}

