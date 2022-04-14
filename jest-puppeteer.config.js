// get environment varable
const ci = Boolean(process.env.CI || false);

const baseOptions = {
  server: {
    command: "npm run serve",
    port: 9000,
    launchTimeout: 180000,
  },
};

const ciPipelineOptions = {
  launch: {
    headless: process.env.CI === "false",

    args: [
      "--ignore-certificate-errors",
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-accelerated-2d-canvas",
      "--disable-gpu",
    ],
    executablePath: "chrome.exe",
  },
  server: baseOptions.server,
};

module.exports = ci ? ciPipelineOptions : baseOptions;
