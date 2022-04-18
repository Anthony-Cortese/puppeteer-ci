const timeout = 10000;
const puppeteer = require("puppeteer");

describe("Test header and title of the page", () => {
  let browser;
  let page;
  let options = {
    headless: false,

    slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,

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

  test("displays login in form text", async () => {
    const formHandle = await page.$(".form-header");
    const html = await page.evaluate(
      (formHandle) => formHandle.innerHTML,
      formHandle
    );

    expect(html).toBe("Login form");
  });

  test("shows a success message after submitting a form", async () => {
    await page.waitForSelector("form");

    await page.click(".form-input__email");
    await page.type(".form-input__email", "username@gmail.com");

    await page.click(".form-input__password");
    await page.type(".form-input__password", "password");

    await page.click(".form-submit-button");

    await page.waitForSelector(".form-success-message");
    const text = await page.$eval(
      ".form-success-message",
      (e) => e.textContent
    );

    expect(text).toContain("You are now signed in.");
  });

  test("shows an error message if authentication fails", async () => {
    await page.waitForSelector("form");

    await page.click(".form-input__email");
    await page.type(".form-input__email", "username@gmail.com");

    await page.click(".form-input__password");
    await page.type(".form-input__password", "password123");

    await page.click(".form-submit-button");

    await page.waitForSelector(".form-error-text");
    const text = await page.$eval(".form-error-text", (e) => e.textContent);

    expect(text).toContain("Please enter a correct username/password.");
  });
});
