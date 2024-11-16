"use client"
import React from 'react'
import { Useapi } from '@/helpers/apiContext';
import Header from "@/components/header"
import Navbar from "@/components/navbar";
import Banner from "@/components/Banner";
import DriveResults from "@/components/driveResults"
import ClientSays from "@/components/clientSays"
import Provide from "@/components/provide"
import Choose from "@/components/Choose"
import Packages from '@/components/Packages'
import Revenue from "@/components/revenue"
import Blogs from "@/components/blogs"
import Solution from "@/components/solution";
import Faq1 from '@/components/faqComp'
import ProvenResult from "@/components/ProvenResult";
import Footer from "@/components/footer";
import Marketing from "@/components/Marketing"
import ValuedClients from '@/components/ValuedClients'
import MarketingGrowth from "@/components/marketingGrowth";
import WebsiteReport from '@/components/websiteReport'
import Loader from '@/components/loader';
const Main = () => {
    const { basic_details } = Useapi();
    const { apidata } = Useapi();
    const {blogs  } = Useapi();
    // const {  faq} = Useapi();
    return (
    <div>
        {/* { !basic_details&&!apidata&&!blogs&&  
       <Loader/>
        } */}
         {
          //  basic_details&&apidata&&blogs&& 
      <div>
      <Header />
      <Navbar />
      <Banner />
      <Marketing />
      <DriveResults/>
      <ValuedClients />
      <Packages props={apidata?.our_package} />
      <ProvenResult />
      <MarketingGrowth />
      <WebsiteReport/>
      <Provide />
      <Solution />
      <ClientSays props={apidata?.clients_say[0]}  />
      <Choose props={apidata?.why_choose[0]}  />
      <Faq1 props={apidata?.marketing_agency} />
      <Revenue/>
      <Blogs props={apidata?.blog} />
      <Footer />
</div>
}
    </div>
  )
}

export default Main