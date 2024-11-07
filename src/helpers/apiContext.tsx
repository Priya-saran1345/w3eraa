"use client"; // Ensure this is a client component
import { useEffect, createContext, useContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/util/api";
interface ApiContextType {
  apidata: any;
  faq: any;
  blog:any;
  blogs:any;
  service:any;
  client:any;
  about:any;
  basic_details:any;
  portfolio:any;
  life:any;
  loading:any;
 
  career:any;
}
const ApiContext = createContext<ApiContextType | undefined>(undefined);
export const ApiProvider = ({ children }: { children: React.ReactNode }) => {
  const [apidata, setapidata] = useState<any>(null);
  const [blog, setblog] = useState<any>()
  const [blogs, setblogs] = useState<any>()
  const [faq, setfaq] = useState<any>()
  const [service, setservice] = useState<any>()
  const [client, setclient] = useState<any>()
  const [about, setabout] = useState<any>()
  const [basic_details, setbasic_details] = useState<any>()
  const [portfolio, setportfolio] = useState<any>()
  const [life, setlife] = useState<any>()
  const [loading, setloading] = useState<any>(true)
  const [career, setcareer] = useState<any>()
  const fetch = async () => {
    try {
      const response = await axios.get(`${BASE_URL}home/`);
      setapidata(response.data);
    } catch (error: any) {
      console.log(error.message);

    }
    try {
      const response = await axios.get(`${BASE_URL}faq/`);
      setfaq(response.data);
    } catch (error: any) {
      console.log("faq error", error.message);
    }
    // try {
    //   const response = await axios.get(`${BASE_URL}blog/`);
    //   setblog(response.data);
      
    // } catch (error: any) {
    //   console.log("blogs error", error.message);
    // }
    try {
      const response = await axios.get(`${BASE_URL}blogs/`);
      setblogs(response.data);
    } catch (error: any) {
      console.log("blogs error", error.message);
    }
    try {
      const response = await axios.get(`${BASE_URL}career/`);
      setcareer(response.data);
    } catch (error: any) {
      console.log("career error", error.message);
    }
    try {
      const response = await axios.get(`${BASE_URL}our-clients/`);
      setclient(response.data);
    } catch (error: any) {
      console.log("client error", error.message);
    }
    try {
      const response = await axios.get(`${BASE_URL}about/`);
      setabout(response.data);
    } catch (error: any) {
      console.log("about error", error.message);
    }
    try {
      const response = await axios.get(`${BASE_URL}basic-details/`);
      setbasic_details(response.data);
    } catch (error: any) {
      console.log("basic details error", error.message);
    }
    try {
      const response = await axios.get(`${BASE_URL}portfolio/`);
      setportfolio(response.data);
    } catch (error: any) {
      console.log("case study error", error.message);
    }
    try {
      const response = await axios.get(`${BASE_URL}w3era-life/`);
      setlife(response.data);
    } catch (error: any) {
    console.log("w3era-life study error", error.message);
    }
    
    setloading(false)
  };
  useEffect(() => {
    fetch();
  }, []);
 
 
  return (
    <ApiContext.Provider value={{ apidata, faq,blog,blogs ,service,client,about,basic_details,portfolio,life,loading,career}}>
      {children}
    </ApiContext.Provider>
  );
};
export const Useapi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('Useapi must be used within a apiProvider');
  }
  return context;
};
