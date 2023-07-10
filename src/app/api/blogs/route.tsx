import { NextResponse } from "next/server";
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(request: Request) {
    let requestedPage = request.url.split('/').at(-1);
    requestedPage = "/blogs/" + requestedPage + ".json";

    const { searchParams } = new URL(request.url)
    const jsonDirectory = path.join(process.cwd(), 'data');
    const fileContents = await fs.readFile(jsonDirectory + requestedPage, 'utf8');
    const obj = Object.fromEntries(searchParams.entries())

    return NextResponse.json({fileContents})
}