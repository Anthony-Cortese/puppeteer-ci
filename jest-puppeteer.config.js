// get environment varable
const ci = Boolean(process.env.CI || false);

const baseOptions = {
  server: {
    command: "npm run start",
    port: 3000,
  },
};

const ciPipelineOptions = {
  launch: {
    headless: false,
    args: [
      "--ignore-certificate-errors",
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-accelerated-2d-canvas",
      "--disable-gpu",
    ],
  },
  server: baseOptions.server,
};

module.exports = ci ? ciPipelineOptions : baseOptions;
