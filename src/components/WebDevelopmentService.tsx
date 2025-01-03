import React from 'react'
import Header from '@/components/header'
import DownNavbar from '@/components/DownNavbar'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Blogs from '@/components/blogs'
import QuickLinks from '@/components/quickLinks'
import CluthRating from '@/components/cluthRating'
import Packages from '@/components/Packages/index'
import CustomerChoose from '@/components/CustomerChoose';
import Revenue from '@/components/revenue'
import CommonBanner from '@/components/Common-Banner'
import IndustriesServe from '@/components/IndustriesServe'
import data from '@/components/Webdevelopment.json'
import Quickfascts from '@/components/Quickfascts'
import OurProcess from '@/components/OurProcess'
import Service from '@/components/Service'
import ServiceWork from '@/components/ServiceWork'
import Technology from '@/components/Technology'
import Organization from '@/components/Organization'
const WebDevelopmentService = ({ data, cluth, quickLinks }: any) => {
    return (
        <div>
            <Header />
            <DownNavbar />
            <Navbar />
            <CommonBanner status={'true'} title={data?.title} description={data?.description} image={data?.image}
            btntext={data?.link_text} btnlink={data?.link_url} image_alt={data?.image_alt} />
              <Service/>
               <IndustriesServe />
               <Quickfascts/>
               <Organization/>
               <Technology/>
               {/* <OurProcess/> */}
               <ServiceWork/> 
            <Revenue />
            <CustomerChoose />
            {
                data?.our_package.length > 0 &&
                <Packages props={data?.our_package} />
            }
            <CluthRating props={cluth} />
            {quickLinks.length > 0 && <QuickLinks props={quickLinks} />}
            <Blogs props={data?.blog} />
            <Footer />
        </div>
    )
}

export default WebDevelopmentService