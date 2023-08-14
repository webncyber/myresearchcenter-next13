import './style.scss'
import  {getBlogsListing} from '../../../../lib/blogs'
import { Blog } from '../../../../types';

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
                  <a href={blog.url}> <img src={blog.hero?.heroImage}/></a>
                  </div>
                  <div>
                    <div><a href={blog.url}><h4>{blog.title}</h4></a></div>
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