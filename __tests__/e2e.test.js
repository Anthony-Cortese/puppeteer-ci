const timeout = process.env.SLOWMO ? 30000 : 10000;
const puppeteer = require("puppeteer");

describe("Test header and title of the page", () => {
  let browser;
  let page;
  let options = {
    headless: false,

    slowMo: 50,

    args: ["--no-sandbox"],
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

  test("Title of the page", async (done) => {
    const title = await page.title();
    expect(title).toBe("React App");
    done();
  });

  test(
    "Header of the page",
    async (done) => {
      const headerHandle = await page.$(".learn_header");
      const html = await page.evaluate(
        (headerHandle) => headerHandle.innerHTML,
        headerHandle
      );

      expect(html).toBe("Main Page");
      done();
    },
    timeout
  );

  test(
    "Take screenshot of home page",
    async (done) => {
      await page.setViewport({ width: 1920, height: 1080 });
      await page.screenshot({
        path: "./src/screenshots/home.jpg",
        fullpage: true,
        type: "jpeg",
      });
      done();
    },
    timeout
  );
});
