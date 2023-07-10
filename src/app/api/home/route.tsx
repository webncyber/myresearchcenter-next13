import { NextResponse } from "next/server";
import path from 'path';
import { readFileSync } from 'fs';

export async function GET(request: Request) 
{
    let requestedPage = request.url.split('/').at(-1);
    requestedPage = "/" + requestedPage + ".json";

    const { searchParams } = new URL(request.url)
    const jsonDirectory = path.join(process.cwd(), 'data');
    const dataText = await readFileSync(jsonDirectory + requestedPage, 'utf8');
    //const obj = Object.fromEntries(searchParams.entries())
    const data = JSON.parse(dataText);

    return NextResponse.json({data}.data);
}