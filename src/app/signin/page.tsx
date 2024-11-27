"use client"
import React, { useState } from 'react'
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navigation from '@/components/navbar';
import DownNavbar from '@/components/DownNavbar';
import Image from 'next/image';
import Link from 'next/link';
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";


const Signin = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        agreeToTerms: false
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
    }

    return (
        <>
            <Header />
            <DownNavbar />
            <Navigation />
            <main className="min-h-screen bg-[url(/images/signinbg.svg)] flex items-center justify-center p-4">
                <motion.div 
                className="w-full max-w-[1200px] flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
                    {/* Left side - Illustration */}
                    <div className="flex-1 max-w-[600px]">
                        <Image
                            src='/images/signinimg.svg'
                            alt="Developer illustration"
                            width={400}
                            height={400}
                        />
                    </div>

                    {/* Right side - Form */}
                    <div className="flex-1 max-w-[480px] w-full">
                        <motion.div 
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                        className="bg-white rounded-[20px] p-8 shadow-xl">
                            <div className="text-center mb-8">
                                <p className="text-gray-500 mb-2">Register to</p>
                                <h1 className="!text-[34px] !font-semibold">Free SEO Tools</h1>
                            </div>

                            {/* Google Sign In Button */}
                            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg p-3 mb-6 hover:bg-gray-50 transition-colors">
                                <FcGoogle className='text-xl' />

                                <span className="text-sm">Continue with Google</span>
                            </button>

                            <div className="relative mb-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-4 bg-white text-gray-500">or</span>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">


                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showPassword ? (
                                            <EyeOffIcon className="w-5 h-5" />
                                        ) : (
                                            <EyeIcon className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>

                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        name="agreeToTerms"
                                        checked={formData.agreeToTerms}
                                        onChange={handleInputChange}
                                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        required
                                    />
                                    <div className="flex flex-row justify-between w-full">
                                        <span className="text-sm">Remember Me</span>
                                        <a className="text-sm text-pink hover:underline " href='/'>Forget Password</a>
                                    </div>
                                </div>


                                <button
                                    type="submit"
                                    className="w-full bg-pink text-white rounded-lg py-3 font-medium hover:bg-pink transition-colors"
                                >
                                    REGISTER
                                </button>
                            </form>

                            <p className="text-center mt-6 text-sm">
                                Already have an account?{' '}
                                <Link href="/signup" className="text-pink hover:underline">
                                    Sign up
                                </Link>
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </main>


            <Footer />
        </>
    )
}

export default Signin


