import Navbar from '@/components/navbar'
import React from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import CommonBanner from '@/components/Common-Banner'

const Page = () => {
    const audiences = [
        {
          title: "Job Seeker",
          description: "Master digital marketing strategies and get ready for exciting career opportunities in the digital world.",
          icon: (
            <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          )
        },
        {
          title: "Under-Grad Student",
          description: "Learn while you study and build a strong foundation for your future career in digital marketing.",
          icon: (
            <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
          )
        },
        {
          title: "Working Professionals",
          description: "Enhance your skills and stay ahead in the competitive digital marketing landscape.",
          icon: (
            <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
          )
        },
        {
          title: "Business Owner",
          description: "Scale your business with proven digital marketing strategies and techniques.",
          icon: (
            <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
            </svg>
          )
        }
      ]
    
    const courses = [
        {
          title: "Search Engine Optimization",
          duration: "21 days",
          description: "Master the art of SEO and learn how to rank websites higher in search engines."
        },
        {
          title: "Google Ads",
          duration: "15 days",
          description: "Learn to create and manage successful Google Ads campaigns."
        },
        {
          title: "CMS: WordPress & Shopify",
          duration: "18 days",
          description: "Build professional websites and e-commerce stores with popular CMS platforms."
        },
        {
          title: "Front End Design (UI/UX)",
          duration: "25 days",
          description: "Create beautiful and user-friendly web interfaces."
        },
        {
          title: "Social Media Marketing",
          duration: "20 days",
          description: "Master social media strategies for business growth."
        },
        {
          title: "Digital Marketing Course",
          duration: "45 days",
          description: "Comprehensive digital marketing program covering all aspects."
        }
      ]
    
      const steps = [
        {
          number: "01",
          title: "Register",
          description: "Choose any one of the highly rated courses and register to start your journey."
        },
        {
          number: "02",
          title: "Learn",
          description: "Start learning through our structured curriculum with expert guidance."
        },
        {
          number: "03",
          title: "Excel",
          description: "Practice and excel with real-world projects and certifications."
        }
      ]
  return (
    <div>
<Header/>
<Navbar/>
<CommonBanner  title={'Illustrate Your Success, Learn Digital Skills Now!'}
 description={ 'Convert your resume into a jobs magnet by diving yourself into expert-crafted courses.Digital Marketing Courses: Designed With Purpose!'  }
  image={'/images/academy.png'} image_alt={'academy'}
         btntext={"Course Query"} btnlink={'contact-us'} />
         <section className="bg-blue py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Join our Free Google Ads Webinar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {audiences.map((item, index) => (
                <AudienceCard key={index} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl text-homeblack md:text-3xl font-bold text-center mb-12">
              Our Courses: The Menu Of Digital Excellence
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </div>
        </section>

        {/* Digital Marketing Toolkit Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl text-homeblack md:text-3xl font-bold mb-4">
              Digital Marketing Toolkit: Your Digital Saviour
            </h2>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Master 50+ digital marketing platforms and tools used by digital marketing experts all over the world.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
              How Our Academy Operates: A Tiny Guide
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {steps.map((step, index) => (
                <StepCard key={index} {...step} />
              ))}
            </div>
          </div>
        </section>
         <Footer/>
    </div>
  )
}

export default Page
const AudienceCard = ({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) => (
    <div className="bg-white p-6 rounded-lg hover:shadow-md lg:hover:scale-[1.1] duration-300 border-[2px] border-grey flex flex-col justify-center items-center">
      <div className="text-blue flex justify-center items-center w-12 h-12 mb-4">{icon}</div>
      <h3 className="!text-[22px] text-homeblack font-semibold mb-2">{title}</h3>
      <p className="text-[16px] text-gray-600">{description}</p>
    </div>
  )
  
  const CourseCard = ({ title, duration, description }: { title: string; duration: string; description: string }) => (
    <div className="bg-white p-6  hover:bg-lightblue rounded-lg hover:shadow-md  duration-300 border-[2px] border-grey">
      <h3 className="!text-[22px] text-homeblack font-semibold mb-2">{title}</h3>
      <p className="text-[18px] text-gray-600 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <span className="text-[16px] text-blue">Duration: {duration}</span>
        {/* <button className="text-[16px] text-blue htransition-colors duration-200">
          Learn More
          <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button> */}
      </div>
    </div>
  )
  
  const StepCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
    <div className="bg-white p-6 lg:hover:scale-[1.1] rounded-lg hover:shadow-md duration-300 border-[2px] border-grey">
      <span className="text-3xl font-bold text-blue mb-4 block">{number}</span>
      <h3 className="!text-[22px] text-homeblack font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )