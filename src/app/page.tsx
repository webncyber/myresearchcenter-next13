import Image from 'next/image'
import type { Metadata } from 'next';
import SingleColumnContent from './components/singleColumnContent/SingleColumnContent'
import  {getPageByUrl} from '../../lib/page'
import BlogListing from './components/blogListing/BlogListing'; 



export default async function Home() {
 

  return (
    <div className="single-column-content">
      hello
    </div>
  )
}


