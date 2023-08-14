import "./style.scss";
import { getCategories } from "../../../../lib/categories";
import { Blog, Category } from "../../../../types";

export async function Categories(limit: string, showBlurb: boolean = false) {
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
        <div className="flex-box">
          {categories.map((category: Category) => (
          
             <div key={category.value}>
                <h4>{category.title}</h4>
                <a href={"/blogs/" + category.value}>
                    <img src={category.image} />
                </a>
                {showBlurb && 
                (
                  <div>
                  <div className="blurb">{category.blurb}</div>
                </div>
                )}
                
            </div>
          
          ))}
         </div>
      }
    </div>
  );
}

export default Categories;
