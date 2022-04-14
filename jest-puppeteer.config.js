// get environment varable
const ci = Boolean(process.env.CI || false);

const baseOptions = {
  server: {
    command: "npm run serv",
    port: 300,
    launchTimeout: 180000,
  },
};

const ciPipelineOptions = {
  // launch: {
  //   executablePath: "/usr/bin/google-chrome-stable",
  //   headless: true,
  //   args: [
  //     "--ignore-certificate-errors",
  //     "--no-sandbox",
  //     "--disable-setuid-sandbox",
  //     "--disable-accelerated-2d-canvas",
  //     "--disable-gpu",
  //   ],
  // },
  launch: {
    headless: process.env.CI === "false",
    ignoreDefaultArgs: ["--disable-extensions"],
    args: ["--no-sandbox"],
    executablePath: "/usr/bin/google-chrome-stable",
  },
  server: baseOptions.server,
};

module.exports = ci ? ciPipelineOptions : baseOptions;
