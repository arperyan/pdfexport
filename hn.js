const puppeteer = require('puppeteer');
 
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.avivainvestors.com', {waitUntil: 'networkidle2'});
  await page.emulateMedia('screen');
  await page.pdf({path: 'hn.pdf', format: 'A4'});
 
  await browser.close();
})();