
export async function  getCategories()
{
    const fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getcategories";
     //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: 10 } });
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const categories = jsonData.data.data.listBlogs.data;

  return categories;
}
