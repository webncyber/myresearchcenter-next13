import './style.scss'
import  {getBlogsByCategory} from '../../../../lib/blogs'
import { Blog } from '../../../../types';

export async function BlogListingByCategory(categoryValue: any) 
{
  const blogsData = getBlogsByCategory(categoryValue);
  let blogsListing = await blogsData;
  
    return(
        <div className='blogs-listing'>
           {categoryValue != "" &&
         (
          <div className='list-heading'>{categoryValue}</div>
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

export default BlogListingByCategory;