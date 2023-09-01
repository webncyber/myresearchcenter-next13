import './style.scss'
import  {getBlogsListing} from '../../../../lib/blogs'
import { Blog } from '../../../../types';
import Link from 'next/link'

export async function BlogListing(limit: string) {
    
  const blogsData = getBlogsListing(limit);
  let blogsListing = await blogsData;
  
    return(
        <div className='blogs-listing'>
           {limit != "0" &&
         (
          <div className='list-heading'>Latest Blogs</div>
         )
         } 
          {
             <ul>
              {blogsListing.map((blog: Blog) =>
              <li key={blog.url}>
                <div className='row'>
                  <div className='fit'>
                  <Link href={blog.url}> <img src={blog.hero?.heroImage}/></Link>
                  </div>
                  <div>
                    <div><Link href={blog.url}><h4>{blog.title}</h4></Link></div>
                    <div className='blurb'>{blog.blurb}</div>
                  </div>
                </div>
              </li>
             )}
           </ul>}
        </div>
    )
}

export default BlogListing;