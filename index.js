import puppeteer from "puppeteer"
;(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: true,
  })
  const page = await browser.newPage()

  // Navigate the page to a URL
  await page.goto("http://localhost:5500/")

  // Set screen size
  // await page.setViewport({width: 1080, height: 1024});
  await new Promise((resolve) => setTimeout(resolve, 200))
  // await const a = setTimeout(() => {}, 1000);
  await page.pdf({ path: "Ronnachai Srisangwarn - Resume.pdf", format: "A4", printBackground: true })

  // // Type into search box
  // await page.type('.search-box__input', 'automate beyond recorder');

  // // Wait and click on first result
  // const searchResultSelector = '.search-box__link';
  // await page.waitForSelector(searchResultSelector);
  // await page.click(searchResultSelector);

  // // Locate the full title with a unique string
  // const textSelector = await page.waitForSelector(
  //   'text/Customize and automate'
  // );
  // const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // // Print the full title
  // console.log('The title of this blog post is "%s".', fullTitle);

  await browser.close()
})()
