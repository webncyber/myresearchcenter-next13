import './style.scss'
import  {getCategories} from '../../../../lib/categories'
import { Blog, Category } from '../../../../types';

export async function BlogListing() {
    
  const categoriesData = getCategories();
  let categories = await categoriesData;
  
    return(
        <div className='category-listing'>
          {
             <ul>
              {categories.map((category: Category) =>
              <li key={category.value}>
                <a href={"/blogs/" + category.value}> 
                    <div className='row'>
                    <div className='fit'>
                    <img src={category.image}/>
                    </div>
                    <div>
                        <div className='blurb'>{category.blurb}</div>
                    </div>
                    </div>
                </a>
              </li>
             )}
           </ul>}
        </div>
    )
}

export default BlogListing;