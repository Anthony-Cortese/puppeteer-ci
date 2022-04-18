// const timeout = process.env.SLOWMO ? 30000 : 10000;

const puppeteer = require("puppeteer");

describe("Test the login page", () => {
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
    await page.goto("http://localhost:3000/login", {
      waitUntil: "domcontentloaded",
    });
  });

  beforeAll(async () => {
    browser = await puppeteer.launch({
      options,
    });
    page = await browser.newPage();
  });

  test("displays login in form text", async () => {
    await page.goto("http://localhost:3000/login");
    await page.waitForSelector(".form-header");

    const text = await page.$eval(".form-header", (e) => e.textContent);
    expect(text).toContain("Login form");
  });

  test("shows a success message after submitting a form", async () => {
    await page.goto("http://localhost:3000/login");
    await page.waitForSelector(".form-header");

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
    await page.goto("http://localhost:3000/login");
    await page.waitForSelector(".form-header");

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
