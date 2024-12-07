import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req: NextRequest) {
  try {
    const { urls } = await req.json(); // Destructure the URLs from the body

    // Get the current timestamp for the lastmod value
    const currentTimestamp = new Date().toISOString();

    // Create the sitemap XML structure with lastmod
    const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    const urlSetOpen = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n`;
    const urlSetClose = `</urlset>\n`;

    const urlEntries = urls.map((url:any) => {
      return `<url>\n  <loc>${url}</loc>\n  <lastmod>${currentTimestamp}</lastmod>\n</url>\n`;
    }).join('');

    const xmlContent = xmlHeader + urlSetOpen + urlEntries + urlSetClose;

    // Define the file path where the sitemap will be saved
    const filePath = path.join(process.cwd(), 'public', 'site_map.xml');

    // Write the XML content to the sitemap.xml file
    fs.writeFileSync(filePath, xmlContent);

    return new NextResponse(
      JSON.stringify({
        message: 'Sitemap generated and saved successfully',
        urls,
      }),
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error processing the request:', error);
    return new NextResponse(
      JSON.stringify({
        message: 'Error processing the request',
        error: error.message || error,
      }),
      { status: 500 }
    );
  }
}
