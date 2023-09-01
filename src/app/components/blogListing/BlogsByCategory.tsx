import './style.scss'
import  {getBlogsByCategory} from '../../../../lib/blogs'
import { Blog } from '../../../../types';
import Link from 'next/link'

export async function BlogListingByCategory(categoryUrl: any) 
{
  try{
    const blogsData = getBlogsByCategory(categoryUrl);
  let blogsListing = await blogsData;
    return(
        <div className='blogs-listing'>
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
  }catch{}
}

export default BlogListingByCategory;