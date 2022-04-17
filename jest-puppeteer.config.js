module.exports = {
  launch: {
    headless: process.env.HEADLESS !== "false",
    slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,
    devtools: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--disable-web-security",
    ],
  },
};
