const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const sites = [
  { slug: "elysia_beauty_lounge", url: "https://elysiabeautylounge.vercel.app/" },
  { slug: "clinica_drcurt", url: "https://clinica-drcurt.vercel.app/" },
  { slug: "emirav_beauty_studio", url: "https://site-emiravbeautystudio.vercel.app/" },
  { slug: "stomatology_blog", url: "https://site-stomatology-blog.vercel.app/" },
  { slug: "hectar_expert", url: "https://hectarexpert.vercel.app/" },
  { slug: "it_computer_service", url: "https://it-and-computer-service.vercel.app/" },
  { slug: "site_broderie", url: "https://site-broderie.vercel.app/" },
  { slug: "electroalfa", url: "https://electroalfa.vercel.app/" },
  { slug: "alex_social_media", url: "https://site-alex-social-media.vercel.app/" }
];

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  
  for (const site of sites) {
    console.log(`Taking screenshot for ${site.slug}...`);
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    
    try {
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
      // wait a bit extra for animations to settle
      await new Promise(r => setTimeout(r, 2000));
      
      const outPath = path.join(__dirname, '../public/previews', `${site.slug}.png`);
      await page.screenshot({ path: outPath });
      console.log(`Saved ${outPath}`);
    } catch (e) {
      console.error(`Error taking screenshot for ${site.slug}:`, e);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("Done taking screenshots.");
})();
