import './style.scss'

const BlogListing = () =>{
    
    return(
        <div className='blogs-listing'>
          {/* {
             <ul>
              {blogs.map(blog =>
              <li key={blog}>
                <div className='row'>
                  <div className='fit'>
                  <a href={'/blogs/music/'+ blog.id}> <img src={blog.heroimageurl}/></a>
                  </div>
                  <div>
                    <div><a href={'/blogs/music/'+ blog.id}><h4>{blog.title}</h4></a></div>
                    <div className='blurb'>{blog.blurb}</div>
                  </div>
                </div>
              </li>
             )}
           </ul>} */}
        </div>
    )
}

export default BlogListing;