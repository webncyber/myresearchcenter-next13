import { NextResponse } from "next/server";
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)
    const jsonDirectory = path.join(process.cwd(), 'data');
    //Read the json data file data.json
    const fileContents = await fs.readFile(jsonDirectory + '/home.json', 'utf8');

    const url = "/data/home.json";
    //const pageData = (await fetch(url)).json();
    //const page: Page = {
        //title: "hello"
        //set properites   
     // }

      
      const obj = Object.fromEntries(searchParams.entries())

    return NextResponse.json({fileContents})
}