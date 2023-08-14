
export async function  getCategories(limit: string | null)
{
    const fetchAPIUrl = process.env.NEXT_PUBLIC_Host_Name +  "/api/getcategories?limit=" + limit;
     //const apiContent = await fetch(fetchAPIUrl);
    //const apiContent = await fetch(fetchAPIUrl, { next: { revalidate: 10 } });
    const apiContent = await fetch(fetchAPIUrl, {cache: "no-store"});
    const jsonData = await apiContent.json();
    const categories = jsonData.data.data.listCategories.data;

  return categories;
}
