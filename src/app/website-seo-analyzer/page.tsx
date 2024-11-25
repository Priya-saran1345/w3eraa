"use client"
import Footer from '@/components/footer'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import DownNavbar from '@/components/DownNavbar'
import HubspotForm from '@/components/HubspotForm'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoReturnUpBackOutline } from 'react-icons/io5'
import Button from '@/components/button'
import { StyledWrapper } from '@/components/Styled'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const Audit = () => {

    const [url, setUrl] = useState('');
    // console.log(url);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [result, setResult] = useState<any>(null);

    const handleUrlChange = (e: any) => {
        setUrl(e.target.value);
    };

    const handleClear = () => {
        setUrl('');
        setResult(null);
    };

    const handleSubmit = async () => {
        setIsAnalyzing(true);
        try {
            const response = await axios.post('https://onpageinsights.com/api/seo-check/', { url });
            setResult(response.data);
        } catch (error) {
            console.error('Error analyzing URL:', error);
            // Handle error (e.g., show error message to user)
        }
        setIsAnalyzing(false);
    };

    const getScoreColor = (score:any) => {
        if (score >= 80) return '#22c55e'
        if (score >= 60) return '#eab308'
        return '#ef4444'
    }

    const renderCard = (title:any, content:any, className = "") => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`bg-white rounded-xl p-8 shadow-lg border border-gray-100 ${className}`}
        >
            <h3 className="text-xl font-bold mb-4 text-homeblack">{title}</h3>
           <p className='text-homegrey'>{content}</p> 
        </motion.div>
    )

    const SEOScoreChart = ({ score }:any) => {
        const color = getScoreColor(score)
        const circumference = 2 * Math.PI * 45
        const strokeDasharray = `${(score / 100) * circumference} ${circumference}`

        return (
            <div className="relative w-40 h-40">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                        className="text-gray-200"
                        strokeWidth="10"
                        stroke="currentColor"
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                    />
                    <circle
                        className="text-primary"
                        strokeWidth="10"
                        strokeLinecap="round"
                        stroke={color}
                        fill="transparent"
                        r="45"
                        cx="50"
                        cy="50"
                        style={{
                            strokeDasharray,
                            strokeDashoffset: 0,
                            transform: 'rotate(-90deg)',
                            transformOrigin: '50% 50%',
                        }}
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold" style={{ color }}>
                        {score}
                    </span>
                </div>
            </div>
        )
    }
    return (
        <>
            <Header />
            <DownNavbar />
            <Navbar />



            <div className="min-h-screen ">
                <div className='w-full'>
                    <div className='w-full bg-no-repeat bg-center min-h-[40vh] bg-[url("/images/tool-bg.png")] py-9 flex flex-col justify-center items-center'>
                        <h1 className='text-[32px] lg:text-[44px] font-bold text-white'>Website SEO Analyzer</h1>
                    </div>
                </div>
                <div className='mt-4 w-full px-4 xl:px-0 xl:w-[75%] mx-auto'>

                    <div className='rounded-xl p-7 shadow-xl border-slate-100 border-[1px] bg-white'>
                        <div className='bg-grey px-4 py-2 rounded-lg w-full flex items-center gap-3'>
                            <div className='w-[93px] h-[93px] bg-white rounded-full flex justify-center items-center'>
                                <Image src={'/images/website-seo-analyzer.svg'} height={53} width={53} alt={'SEO Analyzer Icon'} />
                            </div>
                            <div>
                                <p className='text-homeblack font-semibold text-[18px] md:text-[20px]'>
                                    Website SEO Analyzer
                                </p>
                            </div>
                        </div>
                        <div className='rounded-lg w-full border-grey border-[2px] flex justify-between items-center p-3 px-6 mt-4 bg-white'>
                            <input
                                type="text"
                                className='text-textGrey w-full border-none outline-none text-[18px]'
                                placeholder='Enter URL'
                                value={url}
                                onChange={handleUrlChange}
                            />
                        </div>
                        <div className='flex justify-start items-center gap-2 mt-4'>
                            <div className="w-fit" onClick={handleSubmit}>
                                <Button type="submit" content={isAnalyzing ? "Analyzing..." : "Analyze"} disabled={isAnalyzing} />
                            </div>
                            <button onClick={handleClear} className='h-fit px-7 py-2 rounded-md bg-grey text-homeblack font-medium hover:bg-pink hover:text-white duration-200 -mt-4'>Clear</button>
                        </div>
                    </div>

                    <AnimatePresence>
                        {result && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="mt-10  rounded-xl  space-y-8"
                            >
                                <h2 className="text-3xl font-bold mb-6 text-gray-800">SEO Analysis Results</h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {renderCard("SEO Score", (
                                        <div className="flex items-center space-x-6">
                                            <SEOScoreChart score={result.seo_score} />
                                            <div>
                                                <p className="text-md font-semibold mb-2 text-homeblack">Overall Score</p>
                                                <p className="text-md text-homegrey">
                                                    This score represents the overall SEO health of your page.
                                                </p>
                                            </div>
                                        </div>
                                    ), "col-span-full")}

                                    {renderCard("Title", (
                                        <div className="space-y-2">
                                            <p className="text-md">{result.title.content}</p>
                                            <p className={`text-md ${result.title.optimal_length ? 'text-green-500' : 'text-red-500'}`}>
                                                {result.title.optimal_length ? 'Optimal length' : 'Not optimal length'}
                                            </p>
                                        </div>
                                    ))}

                                    {renderCard("Meta Description", (
                                        <div className="space-y-2">
                                            <p className="text-md">{result.meta_description.content}</p>
                                            <p className={`text-md ${result.meta_description.optimal_length ? 'text-green-500' : 'text-red-500'}`}>
                                                {result.meta_description.optimal_length ? 'Optimal length' : 'Not optimal length'}
                                            </p>
                                        </div>
                                    ))}

                                    {renderCard("Word Count", (
                                        <p className="text-3xl font-bold text-homegrey">{result.word_count} words</p>
                                    ))}

                                    {renderCard("Keyword Consistency", (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {Object.entries(result.keyword_consistency).map(([keyword, data]:any) => (
                                                <div key={keyword} className="bg-gray-100 p-4 rounded-lg">
                                                    <p className="font-semibold text-md mb-2 text-homeblack">{keyword}</p>
                                                    <p className="text-md">Frequency: {data.page_frequency}</p>
                                                    <p className="text-md">
                                                        In title: {data.title ? '✓' : '✗'}
                                                    </p>
                                                    <p className="text-md">
                                                        In meta: {data.meta_description_tag ? '✓' : '✗'}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    ), "col-span-full")}

                                    {renderCard("Performance", (
                                        <div className="space-y-2">
                                            <p className="text-md">Images without alt: {result.performance.images_without_alt}</p>
                                            <p className="text-md">H1 tag present: {result.performance.h1_tag ? 'Yes' : 'No'}</p>
                                        </div>
                                    ))}

                                    {renderCard("Security", (
                                        <div className="space-y-2">
                                            <p className="text-md">SSL Enabled: {result.security.ssl_enabled ? 'Yes' : 'No'}</p>
                                            <p className="text-md">HTTPS Redirect: {result.security.https_redirect ? 'Yes' : 'No'}</p>
                                        </div>
                                    ))}

                                    {renderCard("Indexing", (
                                        <div className="space-y-2">
                                            <p className="text-md">Canonical Tag: {result.indexing.canonical_tag_message}</p>
                                            <p className="text-md">Noindex Tag: {result.indexing.noindex_tag_message}</p>
                                            <p className="text-md">Robots.txt: {result.indexing.robots_txt_message}</p>
                                            <p className="text-md">XML Sitemap: {result.indexing.xml_sitemap_message}</p>
                                            <p className="text-md">Favicon: {result.indexing.favicon_message}</p>
                                            <p className="text-md">iFrames: {result.indexing.iframes_message}</p>
                                            <p className="text-md">Email Privacy: {result.indexing.email_privacy_message}</p>
                                        </div>
                                    ), "col-span-full")}

                                    {renderCard("Accessibility", (
                                        <div className="space-y-2">
                                            <p className="text-md">Friendly Links: {result.analyze_accessibility.friendly_links_message}</p>
                                            <p className="text-md">Legible Font Sizes: {result.analyze_accessibility.legible_font_sizes_message}</p>
                                        </div>
                                    ))}

                                    {renderCard("Schema", (
                                        <p className="text-md">{result.schema_message}</p>
                                    ))}

                                    {renderCard("Social Media", (
                                        <div className="space-y-2">
                                            {result.social_media.map((platform:any) => (
                                                <p key={platform.platform} className="text-md ">
                                                    {platform.platform.charAt(0).toUpperCase() + platform.platform.slice(1)}: {platform.found ? 'Found' : 'Not Found'}
                                                </p>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>




            <div className='bg-white flex justify-between gap-3 xl:w-[77%] mx-auto px-4 w-full my-10'>

                <div className='w-full rounded-xl border-slate-100 border-[1px] h-full py-8 px-6 shadow-lg'>

                    <div>

                        <div className='border-b-[2px] border-slate-200'>
                            <p className='text-[24px] font-medium text-homeblack mb-3'>About Website Seo Analyzer</p>
                        </div>
                        <div className='my-8 px-4'>
                            <StyledWrapper>
                                {/* <div dangerouslySetInnerHTML={{ __html: tools_body?.body || 'body is null' }} /> */}
                            </StyledWrapper>
                        </div>
                    </div>


                </div>

                <div className='w-[394px] hidden md:block border-slate-100 border-[1px] py-8 px-4 rounded-md shadow-lg'>

                    <div className='border-b-[1px] mb-5 border-slate-200'>
                        <p className='text-[24px] font-medium text-homeblack mb-3 leading-[28px]'>Double Your Organic Traffic With Our SEO Services</p>
                    </div>

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

            <Footer />
        </>
    )
}

export default Audit
