	  
	  "use client";
      import Footer from '@/components/footer';
      import Header from '@/components/header';
      import Navbar from '@/components/navbar';
      import React, { useEffect, useState } from 'react';
      import { IoIosSearch } from 'react-icons/io';
      import { usePathname } from 'next/navigation';
      import axios from 'axios';
      import { BASE_URL } from '@/util/api';
      import Link from 'next/link';
      import Image from 'next/image';
      import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
      import { IoReturnUpBackOutline } from 'react-icons/io5';
      import Button from '@/components/button';
      import { BsBoxArrowUpRight } from 'react-icons/bs';
      import Loader from '@/components/loader';
      import { StyledWrapper } from '@/components/Styled'
      import Sites from '@/components/Sites.json'
      import HubspotForm from '@/components/HubspotForm'
      import DownNavbar from '@/components/DownNavbar'
      import { div, form, ul } from 'framer-motion/client';
import ResultTable from '@/components/ResultTable';
      const     Tool = ({ tools, tools_body }: any) => {
          const [innerloading, setinnerloading] = useState<any>(false)
          const pathname = usePathname();
          const segments = pathname.replace(/\/$/, '').split('/');
          const lastSegment = segments.pop();
          const [loading, setLoading] = useState<boolean>(false); // Loading state
          const [error, setError] = useState<string | null>(null); // Error state
          const [result, setResult] = useState<any>(null); // Result state
          // const [tools, setTools] = useState<any>();
          const [currentTool, setCurrentTool] = useState<any[]>([]);
          const [showresult, setshowresult] = useState<any>(false)
          // const [tools_body, settools_body] = useState<any>()
          const [displayedRows, setDisplayedRows] = useState<any[]>([]); // Initially empty
      
          const [formData, setFormData] = useState({
              url: '',
              keywords: '',
              metaTitle: '',
              description: '',
              depth: '',
              pageno: '',
              useragent: '',
              allowpath: '',
              disallowpath: '',
              crawlDelay: '',
              sitemapUrl: '',
              strategy_input: ''
          });
          
          // const fetchTools = async () => {
          //     try {
          //         const response = await axios.get(`${BASE_URL}tools/`);
          //         setTools(response.data);
          //     } catch (error: any) {
          //         console.log("tools error", error.message);
          //     }
          //     try {
          //         const response = await axios.get(`${BASE_URL}tools/${lastSegment}`);
          //         settools_body(response.data);
          //     } catch (error: any) {
          //         console.log("tool body error", error.message);
          //     }
          // };
      
         
          const displayRowsOneByOne = (rows: any[]) => {

              let i = 0;
              const appendRow = () => {
setLoading(true)
                  if (i < rows.length) {
                      setDisplayedRows((prevRows) => [...prevRows, rows[i]]);
                      i++;
                      // Generate a random delay between 5 and 20 seconds
                      const randomDelay = Math.floor(Math.random() * (4000 - 2000 + 1)) + 2000
                      setTimeout(appendRow, randomDelay); // Schedule the next row with random delay
                  }
              setLoading(false);

              };
              appendRow(); // Start the recursive process
          };
          // Call this function after `setResult` is updated
          useEffect(() => {
              if (result?.length > 0) {
                  setDisplayedRows([]); // Reset displayed rows
                  displayRowsOneByOne(result);
                  setLoading(false);

              }
          }, [result]);
          const checkBacklink = () => {
              if (!formData.url) return; // Ensure the URL is valid before proceeding
      
              const formattedDomain = formData.url.replace(/https?:\/\/|www\./g, ""); // Remove protocol and 'www.'
              setshowresult(true); // Show the result section
      
              setLoading(true); // Set loading to true
              setError(null);        // Use setTimeout to delay the result display
              setTimeout(() => {
                  setLoading(false); // Stop loading after 3 seconds
                  // Show the result section
                  const formattedResults = Sites?.sites.map((site: any, index: number) => ({
                      id: index + 1, // Incremental ID
                      Page: site.replace("{domain}", formattedDomain), // Replace `{domain}` in URLs
                      Status: "Success", // Example status
                  }));
                  setResult(formattedResults || []); // Update the state with the formatted results
              }, 2000); // 3 seconds delay
          };
          // useEffect(() => {
          //     fetchTools();
          // }, []);
          useEffect(() => {
              setCurrentTool(
                  tools?.filter((elem: any) => elem?.slug_link === lastSegment)
              );
          }, [tools, lastSegment]);
          const fetchResult = async () => {
              setshowresult(true)
              setLoading(true); // Set loading to true
              setError(null); // Reset error state
      
              try {
                  const response = await axios.post(`${BASE_URL}tools/${lastSegment}`, { ...formData
                     
                  }); // Send URL in payload
                  setResult(response.data); // Save result in state
                  setinnerloading(true)
                  console.log('resposned data ----',response.data);
              } catch (error: any) {
                  setError(error.message); // Set error message
                  console.log("Service error", error.message);
              }
              finally {
                  setLoading(false); // Set loading to false
              }
          };
          const handleSubmit = (e: React.FormEvent) => {
              // Prevent default form submission
              fetchResult(); // Call fetch on submit
          };
      
          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
              const { name, value } = e.target;
              setFormData((prevState) => ({
                  ...prevState,
                  [name]: value,
              }));
          };
        
          const handleClear = () => {
              setFormData({
                  url: '',
                  keywords: '',
                  metaTitle: '',
                  description: '',
                  depth: '',
                  pageno: '',
                  useragent: '',
                  allowpath: '',
                  disallowpath: '',
                  crawlDelay: '',
                  sitemapUrl: '',
                  strategy_input:""
              });
              setResult(null);
              setshowresult(false);
          };
          return (
              <>
                  {
                      !tools && currentTool &&
                      <Loader />
                  }
                  {
                      tools && currentTool &&
                      <div>
                          {/* <Header /> */}
                          <DownNavbar />
      
                          <Navbar />
                          <div className='w-full'>
                              <div className='w-full bg-no-repeat bg-center min-h-[40vh] bg-[url("/images/tool-bg.png")] py-9 flex flex-col justify-center items-center'>
                                  <h1 className='text-[32px] lg:text-[44px] font-bold text-white'>{currentTool[0]?.title || 'This is'}</h1>
                              </div>
                          </div>
                          <div className='mt-4 w-full px-4 xl:px-0 xl:w-[95%]  2xl:w-[75%] mx-auto'>
                              <div className='flex  gap-3'>
      
                                  <div className='w-fit'>
                                      <Link href={'/tool'}>
                                          <button className='bg-lightpink text-pink mb-7 p-2 px-4 text-[18px] font-medium flex justify-center gap-3 rounded-lg items-center'>
                                              <IoReturnUpBackOutline className='text-[24px]' /> Back
                                          </button>
                                      </Link>
                                  </div>
                                  <button onClick={handleClear} className=' h-fit px-7 py-[9px] rounded-md bg-lightpink text-pink font-medium  hover:bg-pink hover:text-white duration-200'>Clear</button>
                              </div>
                              <div className='rounded-xl p-7 shadow-xl border-slate-100 border-[1px]'>
                                  <div className='bg-grey px-4 py-2 rounded-lg w-full flex items-center gap-3'>
                                      <div className='w-[93px] h-[93px] bg-white rounded-full flex justify-center items-center'>
                                          <Image src={currentTool?.[0]?.image || ''} height={53} width={53} alt={currentTool?.[0]?.image_alt} />
                                      </div>
                                      <div>
                                          <p className='text-homeblack font-semibold text-[18px] md:text-[20px]'>{currentTool?.[0]?.title}</p>
                                      </div>
                                  </div>
                                  {
                                      !(currentTool[0]?.slug_link === 'keywords-suggestion-tool' || currentTool[0]?.slug_link === 'robots-txt-generator' || 
                                        currentTool[0]?.slug_link === 'what-is-my-browser' || currentTool[0]?.slug_link === 'my-ip-address') && (
                                          <div className='rounded-lg w-full border-grey border-[2px] flex justify-between items-center p-3 px-6 mt-4 dark:bg-white bg-white'>
                                              <input
                                                  type="text"
                                                  className='text-textGrey w-full border-none outline-none text-[18px]'
                                                  placeholder='Enter url'
                                                  name='url'
                                                  onChange={handleChange}
                                                  value={formData.url} // Control input value
                                              />
                                          </div>
                                      )
                                  }
                                  {
                                      (currentTool[0]?.slug_link === 'keyword-position-checker' || currentTool[0]?.slug_link === 'keywords-suggestion-tool' || currentTool[0]?.slug_link ===
                                          'meta-tag-generator') &&
                                      (<div className='mt-4 border-grey border-[2px] rounded-lg p-6 w-full '>
                                          <input type="text" placeholder='Enter Keywords Seprated By Coma(,)'
                                              className='w-full  border-none outline-none' name='keywords' onChange={handleChange} value={formData?.keywords} />
                                      </div>)
                                  }
                                  {
                                      (currentTool[0]?.slug_link === 'meta-tag-generator') &&
                                      (<div className='mt-4 border-grey border-[2px] rounded-lg p-6 w-full '>
                                          <input type="text" placeholder='Enter Meta Title' className='w-full  border-none outline-none' name='metaTitle' onChange={handleChange} 
                                          value={formData?.metaTitle} />
                                      </div>)
                                  }
                                  {
                                      (currentTool[0]?.slug_link === 'meta-tag-generator') &&
                                      (<div className='mt-4 border-grey border-[2px] rounded-lg p-6 w-full '>
                                          <input type="text" placeholder='Enter Meta Description' className='w-full  border-none outline-none' name='description' onChange={handleChange}
                                          value={formData?.description} />
                                      </div>)
                                  }
                                  {
                                      (currentTool[0]?.slug_link === 'spider-simulator') &&
                                      (<div className='mt-4 border-grey flex justify-between border-[2px] rounded-lg p-6 w-full '>
                                          <input type="number" placeholder='Enter Crawler Depth' className='w-full  border-none outline-none'name='depth' onChange={handleChange}  value={formData?.depth} />
                                      
                                      </div>)
                                  }
                                  {
                                      (currentTool[0]?.slug_link === 'spider-simulator') &&
                                      (<div className='mt-4 border-grey flex justify-between border-[2px] rounded-lg p-6 w-full '>
                                          <input type="number" placeholder='Enter Number of Pages' className='w-full  border-none outline-none' name='pageno' 
                                          value={formData?.pageno} onChange={handleChange} />
                                     
                                      </div>)
                                  }
                                  {
                                      (currentTool[0]?.slug_link === 'robots-txt-generator') &&
                                      (<div className='mt-4 border-grey border-[2px] rounded-lg p-6 w-full '>
                                          <input type="text" placeholder=' Enter user agents Seprated By Coma(,)' className='w-full  border-none outline-none'
                                           name='useragent' value={formData?.useragent} onChange={handleChange} />
                                      </div>)
                                  }
                                  {
                                      (currentTool[0]?.slug_link === 'robots-txt-generator') &&
                                      (<div className='mt-4 border-grey border-[2px] rounded-lg p-6 w-full '>
                                          <input type="text" placeholder='   Enter disallow paths Seprated By Coma(,)' className='w-full  border-none outline-none' name='disallowpath'
                                          value={formData?.disallowpath} 
                                           onChange={handleChange} />
                                      </div>)
                                  }
                                  {
                                      (currentTool[0]?.slug_link === 'robots-txt-generator') &&
                                      (<div className='mt-4 border-grey border-[2px] rounded-lg p-6 w-full '>
                                          <input type="text" placeholder='   Enter allow paths Seprated By Coma(,)' name='allowpath' value={formData?.allowpath}
                                           className='w-full  border-none outline-none' onChange={handleChange} />
                                      </div>)
                                  }
                                    {
                                      (currentTool[0]?.slug_link === 'page-speed-checker' || currentTool[0]?.slug_link==='pagespeed-insights-checker') &&
                                      (<div className='mt-4 border-grey border-[2px] rounded-lg p-6 w-full '>
                                          <input type="text" placeholder='   Enter the strategy (mobile/desktop)' name='strategy_input' value={formData?.strategy_input}
                                           className='w-full  border-none outline-none' onChange={handleChange} />
                                      </div>)
                                  }
                                  {
                                      (currentTool[0]?.slug_link === 'robots-txt-generator') &&
                                      (<div className='mt-4 border-grey border-[2px] rounded-lg p-6 w-full '>
                                          <input type="text" placeholder='   Enter Crawler Delay' className='w-full 
                                           border-none outline-none' value={formData?.crawlDelay} name='crawlDelay' onChange={handleChange} />
                                      </div>)
                                  }
                                  {
                                      (currentTool[0]?.slug_link === 'robots-txt-generator') &&
                                      (<div className='mt-4 border-grey border-[2px] rounded-lg p-6 w-full '>
                                          <input type="text" placeholder='Enter sitemap URL' className='w-full  border-none outline-none' name='sitemapUrl' 
                                          value={formData?.sitemapUrl} onChange={handleChange} />
                                      </div>)
                                  }
                                  {showresult && <div className=' rounded-xl p-7  mt-5 border-slate-100 border-[1px]'>

                                      {error && <p className="text-center text-red-500">{error}</p>}
                                      {result && (
                                          <div className=" p-2 overflow-auto">
                                              {
                                                  lastSegment == 'backlink-maker' &&
                                                  <div className='w-full overflow-x-auto'>
                                                      <table className='table-auto w-full min-w-[500px] border-collapse border border-gray-300'>
      
                                                          <thead>
                                                              <tr className='bg-gray-100 border-b'>
                                                                  <th className='p-2 border-r'>S.no</th>
                                                                  <th className='p-2 border-r'>Pages contain backlink</th>
                                                                  <th className='p-2'>Status</th>
                                                              </tr>
                                                          </thead>
                                                          <tbody>
                                                              {displayedRows.map((elem: any, index: number) => (
                                                                  <tr key={index} className="border-b">
                                                                      <td className="p-2 text-center border-r">{index + 1}</td>
                                                                      <td className="p-2 border-r">
                                                                          <a
                                                                              href={elem?.Page}
                                                                              target="_blank"
                                                                              rel="noopener noreferrer"
                                                                              className="text-blue-500 text-homegrey hover:text-blue duration-75 hover:underline"
                                                                          >
                                                                              {elem?.Page}
                                                                          </a>
                                                                      </td>
                                                                      <td
                                                                          className={`p-2 ${elem?.Status === "Success" ? "text-green-600" : "text-red-600"
                                                                              }`}
                                                                      >
                                                                          {elem?.Status}
                                                                      </td>
                                                                  </tr>
                                                              ))}
      
                                                          </tbody>
      
                                                          {/* <tbody>
                                                              {result.map((elem: any, index: number) => {
                                                                  return (
                                                                      <tr key={index} className='border-b'>
                                                                          <td className='p-2 text-center border-r'>{index + 1}</td>
                                                                          <td className='p-2 border-r'>
                                                                              <a href={elem?.page} target='_blank' rel='noopener noreferrer' className='text-blue-500 text-homegrey  hover:text-blue duration-75 hover:underline'>
                                                                                  {elem?.Page}
                                                                              </a>
                                                                          </td>
                                                                          <td className={`p-2 ${elem?.Status === 'Success' ? 'text-green-600' : 'text-red-600'}`}>
                                                                              {elem?.Status}
                                                                          </td>
                                                                      </tr>
                                                                  );
                                                              })}
                                                          </tbody> */}
                                                      </table>
                                                  </div>
                                                  }
                                                  {
                                                      <div>
                                                          {lastSegment !== 'backlink-maker' && <ResultTable result={result} lastSegment={lastSegment} />}
                                                      </div>

                                                  }

                                          </div>
                                      )}
                                          {loading && <div className=" flex justify-center items-center">
                                              <div className=" loader"></div>
                                          </div>
                                          }
                                  </div>}
                                  <div className='flex justify-start items-center gap-2'>
      
                                      <div
                                          className="mt-4 w-fit"
                                          onClick={lastSegment === "backlink-maker" ? checkBacklink : handleSubmit}
                                      >
                                          <Button content={"Check"} type="submit" />
                                      </div>
                                      {/* <div className='mt-4 w-fit'{ (lastSegment=="backlink-maker")?checkBacklink :onClick={handleSubmit} }>
                                          <Button content={'Check'} type="submit" />
                                      </div> */}
                                      {/* <div className='mt-4 w-fit' onClick={handleClear}> */}
                                      <button onClick={handleClear} className=' h-fit px-7 py-2 rounded-md bg-grey text-homeblack  font-medium hover:bg-pink hover:text-white duration-200'>Clear</button>
      
                                      {/* </div> */}
                                      
                                  </div>
                              </div>
                          </div>
                          <div className='bg-white flex justify-between gap-3 xl:w-[77%] mx-auto px-4 w-full my-10'>
                              <div className='w-full rounded-xl border-slate-100 border-[1px] h-full py-8 px-6 shadow-lg'>
                                  <div>
                                      <div className='border-b-[2px] border-slate-200'>
                                          <p className='text-[24px] font-medium text-homeblack mb-3'>About SEO Tools</p>
                                      </div>
                                      <div className='my-8 px-4'>
                                          <StyledWrapper>
                                              <div dangerouslySetInnerHTML={{ __html: tools_body?.body || 'body is null' }} />
                                          </StyledWrapper>
                                      </div>
                                  </div>
      
                              </div>
      
                              <div className='w-[394px] hidden md:block border-slate-100 border-[1px] py-8 px-4 rounded-md shadow-lg'>
                                  {/* <div className='border-b-[1px] border-slate-200'>
                                      <p className='text-[24px] font-medium text-homeblack mb-3'>Package</p>
                                  </div> */}
                                  {/* <div className='flex flex-col my-4 gap-2'>
                                      <div className='bg-white w-[364px] rounded-lg shadow-sm border-[.5px] border-slate-100'>
                                          <div className='rounded-t-lg justify-between flex'>
                                              <div className='bg-blue py-2 h-fit rounded-tl-lg rounded-br-lg w-fit  px-5'>
                                                  <p className='text-[14px]  text-white uppercase font-medium'>STARTER</p>
                                              </div>
                                              <BsBoxArrowUpRight className='m-2 text-[20px] text-pink' />
      
                                          </div>
                                          <div className='flex  justify-between items-end p-3 mt-2'>
                                              <div>
                                                  <p className='text-textGrey font-medium'>Backlinks range niche</p>
                                                  <p className='text-[18px] font-medium text-blue'>100 10-20  Any</p>
                                              </div>
                                              <div>
                                                  <p className='text-black font-medium'>₹4,000</p>
                                              </div>
                                          </div>
                                      </div>
      
                                      <div className='bg-white w-[364px] rounded-lg shadow-sm border-[.5px] border-slate-100'>
                                          <div className='rounded-t-lg justify-between flex'>
                                              <div className='bg-blue py-2 h-fit rounded-tl-lg rounded-br-lg w-fit  px-5'>
                                                  <p className='text-[14px]  text-white uppercase font-medium'>Intermediate</p>
                                              </div>
                                              <BsBoxArrowUpRight className='m-2 text-[20px] text-pink' />
      
                                          </div>
                                          <div className='flex  justify-between items-end p-3 mt-2'>
                                              <div>
                                                  <p className='text-textGrey font-medium'>Backlinks range niche</p>
                                                  <p className='text-[18px] font-medium text-blue'>100 10-20  Any</p>
                                              </div>
                                              <div>
                                                  <p className='text-black font-medium'>₹4,000</p>
                                              </div>
                                          </div>
      
                                      </div>
                                  </div> */}
                                  <div className='border-b-[1px] mb-5 border-slate-200'>
                                      <p className='text-[24px] font-medium text-homeblack mb-3 leading-[28px]'>Double Your Organic Traffic With Our SEO Services</p>
                                  </div>
                                  {/* <form className='text-homegrey'>
                                      <input type="text" required placeholder='Please Enter Your Name*' className='my-2 w-full p-3 rounded-lg border-[2px] border-grey outline-none' />
                                      <input type="email" required placeholder='Email Address*' className='my-2 w-full p-3 rounded-lg border-[2px] border-grey outline-none' />
                                      <input type="number" required placeholder='Contact No.*' className='my-2 w-full p-3 rounded-lg border-[2px] border-grey outline-none' />
                                      <input type="text" required placeholder='Website URL (if any)' className='my-2 w-full p-3 rounded-lg border-[2px] border-grey outline-none' />
                                      <textarea required className='my-2 w-full p-3 rounded-lg border-[2px] border-grey outline-none' />
                                      <button className='bg-pink text-white text-[14px] w-[133px] h-[44px] flex justify-center items-center rounded-lg'>SUBMIT NOW</button>
                                  </form> */}
                                  <HubspotForm portalId="20095080" formId={"2aeda8d3-d0a1-4624-87f7-39fea7a4d68d"} region={'na1'} />
                                  <div className='border-b-[1px] border-slate-200 mt-5 mb-3'>
                                      <p className='text-[24px] font-medium text-homeblack mb-3'>Trendy SEO Tools</p>
                                  </div>
                                  <div className='px-4'>
                                      <ul className='flex flex-col gap-4'>
                                          <Link href={'/tool/backlink-checker'}><li className='text-textGrey flex gap-2 font-semibold'>Backlink Checker <HiArrowTopRightOnSquare className='text-[24px]' /></li></Link>
                                          <Link href={'/tool/article-rewriter'}><li className='text-textGrey flex gap-2 font-semibold'>Article Rewriter <HiArrowTopRightOnSquare className='text-[24px]' /></li></Link>
                                          <Link href={'/tool/keyword-ranking-checker'}><li className='text-textGrey flex gap-2 font-semibold'>Keyword Ranking Checker <HiArrowTopRightOnSquare className='text-[24px]' /></li></Link>
                                          <Link href={'/tool/word-counter'}><li className='text-textGrey flex gap-2 font-semibold'>Word Counter <HiArrowTopRightOnSquare className='text-[24px]' /></li></Link>
                                          <Link href={'/tool/domain-authority-checker'}><li className='text-textGrey flex gap-2 font-semibold'>Domain Authority Checker <HiArrowTopRightOnSquare className='text-[24px]' /></li></Link>
                                          <Link href={'/tool/xml-sitemap-generator'}><li className='text-textGrey flex gap-2 font-semibold'>XML Sitemap Generator <HiArrowTopRightOnSquare className='text-[24px]' /></li></Link>
                                          <Link href={'/tool/google-cache-checker'}><li className='text-textGrey flex gap-2 font-semibold'>Google Cache Checker <HiArrowTopRightOnSquare className='text-[24px]' /></li></Link>
                                          <Link href={'/tool/mozrank-checker'}><li className='text-textGrey flex gap-2 font-semibold'>Mozrank Checker <HiArrowTopRightOnSquare className='text-[24px]' /></li></Link>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          {/* <Footer /> */}
                      </div>
                  }
              </>
          );
      }
      export default Tool;
      
   
      







   
    
    