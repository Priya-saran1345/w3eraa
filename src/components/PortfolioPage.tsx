import Image from 'next/image';
import Link from 'next/link';
import { BASE_URL } from '@/util/api';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Navbar from '@/components/navbar';
import DownNavbar from '@/components/DownNavbar';
import Button from '@/components/button';
import PortfolioFilter from '@/components/ClientComponent/PortfolioFilter';

async function getPortfolio() {
  const res = await fetch(`${BASE_URL}portfolio/`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch portfolio data');
  }
  return res.json();
}

export default async function PortfolioPage() {
  const portfolio = await getPortfolio();

  return (
    <div>
      <div className="w-full">
        <Header />
        <DownNavbar />
        <Navbar />
        <div className="w-full h-[40vh] flex justify-center items-center bg-[url('/images/casebanner.png')]">
          <h1 className="text-white text-[32px] font-bold lg:text-[48px]">Portfolio</h1>
        </div>
        <div className="w-full px-4 xl:px-9 mx-auto bg-white pb-16">
          <PortfolioFilter initialPortfolio={portfolio} />
        </div>
        <div className="w-full bg-blue py-10 text-white lg:py-16">
          <div className="md:w-[75%] mx-auto xl:w-[50%]">
            <h2 className="text-[28px] font-bold text-center lg:leading-[46px] lg:text-[38px]">
              Get A Top Rank on Google Search Results, Qualified Leads and Increased Sales
            </h2>
            <div className="flex flex-wrap mt-8 justify-center gap-4">
              <Link href={'/get-a-free-quote'}>
                <Button content={'Get a Quote Now!'} />
              </Link>
              <Link href={'/get-a-free-strategy-review'}>
                <Button content={'Analyse my Website for Free!'} />
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}