import Image from 'next/image'
import type { Metadata } from 'next';
import { title } from 'process';
import Hero from './components/hero/HERO'
import TopNav from './components/navbars/topnav'
import FooterNav from './components/navbars/footernav';
import SingleColumnContent from './components/singleColumnContent/SingleColumnContent'
export default function Home() {
  let heroImagePath = "/Images/bkgHome.jpg";

  return (
    <div className='container'>

    <div className='heading-section'>
       <TopNav />
       <Hero url={heroImagePath} headingOne="Ideas........." headingTwo="are where your research begins!" />
    </div>
    <div className='content-section'>
      {
        <SingleColumnContent heading="Welcome to research center" content={GetContent()} />
      }
      <div className='footer-section'>
          <FooterNav/>
        </div> 
    </div>

  </div>
  )
}


function GetContent() {
  return (
    <div>
      <div className='content'>
        <div>

          <div>
            A place where you can find many topics on certain products, compare products, and more!
          </div>
        </div>
        {/* <div>
          <h3>Recent Blogs</h3>
          <div>
            <BlogListing />
          </div>
        </div> */}
      </div>
    </div>
  );
}