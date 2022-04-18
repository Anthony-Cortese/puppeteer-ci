const timeout = process.env.SLOWMO ? 30000 : 10000;

const puppeteer = require("puppeteer");

describe("Test header and title of the page", () => {
  let browser;
  let page;
  let options = {
    headless: false,

    slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,

    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--disable-web-security",
    ],
    defaultViewport: {
      width: 1024,
      height: 768,
    },
  };

  beforeEach(async () => {
    await page.goto("http://localhost:3000/", {
      waitUntil: "domcontentloaded",
    });
  });

  beforeAll(async () => {
    browser = await puppeteer.launch({
      options,
    });
    page = await browser.newPage();
  });

  test(
    "Take screenshot of home page",
    async () => {
      await page.setViewport({ width: 1920, height: 1080 });
      await page.screenshot({
        path: "./src/screenshots/home.jpg",
        fullpage: true,
        type: "jpeg",
      });
    },
    timeout
  );
});
