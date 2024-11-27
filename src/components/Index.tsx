// 'use client'
import React  from "react";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Banner from "@/components/Banner";
import DriveResults from "@/components/driveResults";
import ClientSays from "@/components/clientSays";
import Provide from "@/components/provide";
import Choose from "@/components/Choose";
import Packages from "@/components/Packages";
import Revenue from "@/components/revenue";
import Blogs from "@/components/blogs";
import Solution from "@/components/solution";
import Faq1 from "@/components/faqComp";
import ProvenResult from "@/components/ProvenResult";
import Footer from "@/components/footer";
import Marketing from "@/components/Marketing";
import ValuedClients from "@/components/ValuedClients";
import MarketingGrowth from "@/components/marketingGrowth";
import WebsiteReport from "@/components/websiteReport";
import Loader from "@/components/loader";
import ChooseAgency from "@/components/ChooseAgency";
import Certificate from "@/components/Certificate";
import CustomerChoose from "@/components/CustomerChoose";
import DownNavbar from "@/components/DownNavbar";
import { BASE_URL } from "@/util/api";
// const { apidata } = Useapi();
async function getHomeData() {
  const res = await fetch(`${BASE_URL}home/`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch FAQ data');
  }
  return res.json();
}
async function getBasicData() {
  const res = await fetch(`${BASE_URL}basic-details/`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch FAQ data');
  }
  return res.json();
}
 export default async function  Main   ()  {
  const apidata = await getHomeData();
  const basic_details=await getBasicData()
  return (
    <div>
      {/* {(!basic_details || !apidata) && <Loader />}
      {basic_details && apidata && ( */}
       <>
          <Header />
          <DownNavbar />
          <Navbar />
          <Banner  props={apidata?.banner[0]} basic_details={basic_details}/>
          <Marketing  props={apidata?.aboutsection[0]}/>
          <DriveResults Data={apidata?.drive_result} />
          <ValuedClients Data={apidata?.valued_client[0]}/>
          <Packages props={apidata?.our_package} />
          <ProvenResult provenResult={apidata?.proven_result} />
          <MarketingGrowth Data={apidata?.marketing_growth[0]}  />
          <WebsiteReport />
          <Provide props={apidata?.we_provide} />
          <Solution solutionData={apidata?.achieve_your_goal[0]} />
          <ClientSays props={apidata?.clients_say[0]} />
          <Choose props={apidata?.why_choose[0]} />
          <ChooseAgency />
          <Faq1 props={apidata?.marketing_agency} title={"Frequently Asked Questions"} />
          <Revenue />
          <Certificate />
          <CustomerChoose />
          <Blogs props={apidata?.blog} />
          <Footer />
       </>
  
   {/* )} */}
    </div>
  );
};

