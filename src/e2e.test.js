const puppeteer = require("puppeteer");

describe("App.js", () => {
  let browser;
  let page;
  let options = { headless: false, args: ["--no-sandbox"] };

  beforeAll(async () => {
    browser = await puppeteer.launch(options);
    page = await browser.newPage();
  });

  it("displays login in form text", async () => {
    await page.goto("http://localhost:9999/login");
    await page.waitForSelector(".form-header");

    const text = await page.$eval(".form-header", (e) => e.textContent);
    expect(text).toContain("Login form");
  });

  it("shows a success message after submitting a form", async () => {
    await page.goto("http://localhost:9999/login");
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

  it("shows an error message if authentication fails", async () => {
    await page.goto("http://localhost:9999/login");
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

  it("navigates to the about page", async () => {
    await page.goto("http://localhost:9999");
    await page.waitForSelector(".App-welcome-text");

    await page.click("#about-page-link");
    await page.waitForSelector(".App-welcome-text");

    const text = await page.$eval(".App-welcome-text", (e) => e.textContent);
    expect(text).toContain("This is the about page.");
  });

  it("navigates to the login page", async () => {
    await page.goto("http://localhost:9999");
    await page.waitForSelector(".App-welcome-text");

    await page.click("#login-page-link");
    await page.waitForSelector(".App-welcome-text");

    const text = await page.$eval(".App-welcome-text", (e) => e.textContent);
    expect(text).toContain("This is the Login page.");
  });
});
