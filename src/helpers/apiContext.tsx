"use client"; // Ensure this is a client component
import { useEffect, createContext, useContext, useState } from "react";
import { BASE_URL } from "@/util/api";

interface ApiContextType {
  apidata: any;
  faq: any;
  blog: any;
  blogs: any;
  service: any;
  client: any;
  about: any;
  basic_details: any;
  portfolio: any;
  life: any;
  loading: boolean;
  cluth: any;
  career: any;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<ApiContextType>({
    apidata: null,
    faq: null,
    blog: null,
    blogs: null,
    service: null,
    client: null,
    about: null,
    basic_details: null,
    portfolio: null,
    life: null,
    loading: true,
    cluth: null,
    career: null,
  });

  // Helper function for fetching data with caching
  const fetchData = async (endpoint: string, key: keyof ApiContextType) => {
    try {
      console.log(`[Client] Fetching data from: ${BASE_URL}${endpoint}`);
      const response = await fetch(`${BASE_URL}${endpoint}`, { cache: "force-cache" });
      if (!response.ok) {
        throw new Error(`Failed to fetch ${endpoint}. Status: ${response.status}`);
      }
      const data = await response.json();
      setState((prevState) => ({ ...prevState, [key]: data }));
      console.log(`[Client] Successfully fetched: ${key}`, data);
    } catch (error) {
      console.error(`[Client] Error fetching ${key}:`, error);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      await Promise.all([
        fetchData("home/", "apidata"),
        fetchData("faq/", "faq"),
        fetchData("blogs/?page=1", "blogs"),
        fetchData("career/", "career"),
        fetchData("our-clients/", "client"),
        fetchData("about/", "about"),
        fetchData("clutch/", "cluth"),
        fetchData("basic-details/", "basic_details"),
        // fetchData("portfolio/", "portfolio"),
        fetchData("w3era-life/", "life"),
      ]);
      setState((prevState) => ({ ...prevState, loading: false }));
    };

    fetchAllData();
  }, []);

  console.log("[ApiProvider] State after fetch:", state);

  return (
    <ApiContext.Provider value={state}>
      {children}
    </ApiContext.Provider>
  );
};

export const Useapi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    console.error("[Useapi] Context is undefined");
    throw new Error("Useapi must be used within an ApiProvider");
  }
  return context;
};
