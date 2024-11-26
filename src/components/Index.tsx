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
import ChooseAgency from "@/components/ChooseAgency"
import Certificate from '@/components/Certificate'
import CustomerChoose from '@/components/CustomerChoose';
import DownNavbar from '@/components/DownNavbar'



const Main = () => {
    const { basic_details } = Useapi();
    console.log("basic_details",basic_details);
    
    const { apidata } = Useapi();
    return (
    <div>
        {/* { !basic_details&&!apidata&&  
       <Loader/>
        } */}
         {
          //  basic_details&&apidata&&
      <div>
      <Header />
      <DownNavbar/>
      <Navbar />
      <Banner />
      <Marketing />
      <DriveResults/>
      <ValuedClients />
      <Packages props={apidata?.our_package} />
      <ProvenResult />
      <MarketingGrowth />
      <WebsiteReport/>
      <Provide/>
      <Solution/>
      <ClientSays props={apidata?.clients_say[0]}  />
      <Choose props={apidata?.why_choose[0]}  />
      <ChooseAgency/>
      <Faq1 props={apidata?.marketing_agency} title={"Frequently Asked Questions"} />
      <Revenue/>
      <Certificate/>
      <CustomerChoose/>
      <Blogs props={apidata?.blog} />
      <Footer />
</div>
}
    </div>
  )
}

export default Main