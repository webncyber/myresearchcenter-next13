import "./style.scss";
import { getCategories } from "../../../../lib/categories";
import { Blog, Category } from "../../../../types";
import Link from 'next/link'

export async function Categories(limit: string) {
  const categoriesData = getCategories(limit);
  let categories = await categoriesData;
  return (
    <div className="category-listing">
          
         {limit != "0" && 
       
         (
          <div className="list-heading">Latest Categories</div>
         )
         } 
      {
        <ul>
          {categories.map((category: Category) => (
             <li key={category.url}>
              <div className='row'>
              <div className='fit'>
              <a href={category.url}>
                    <img src={category?.thumbnailImage} />
                </a>
              </div>
               
              <div>
                    <div><a href={category.url}><h4>{category.title}</h4></a></div>
                    <div className='blurb'>{category.blurb}</div>
                  </div>
              
              </div>
                
                
            </li>
          
          ))}
         </ul>
      }
    </div>
  );
}

export default Categories;
