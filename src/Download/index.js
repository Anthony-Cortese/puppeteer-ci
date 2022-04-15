const Downloader = require("./Downloader");

const fs = require("fs");
const puppeteer = require("puppeteer");

(async () => {
  try {
    // Initialize Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Specify comic issue page url
    await page.goto("https://www.movieposters.com/products/batman-mpw-131206");
    console.log("page has been loaded!");

    const imageURL = await page.$eval(".picture img", (img) => img.src);
    console.log(imageURL);

    Downloader.download(
      imageURL.substring(0, imageURL.length - 13),
      function (filename) {
        console.log(
          "download complete" + filename.substring(0, filename.length - 13)
        );
      }
    );

    // End Puppeteer
    await browser.close();
  } catch (error) {
    console.log(error);
  }
})();
