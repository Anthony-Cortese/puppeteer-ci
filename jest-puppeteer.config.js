// get environment varable
// const ci = Boolean(process.env.CI || false);

module.exports = {
  server: {
    command: "npm run start",
    port: 3000,
  },

  launch: {
    headless: process.env.HEADLESS !== "false",
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
  },
};
