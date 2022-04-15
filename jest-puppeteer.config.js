// const ci = Boolean(process.env.CI || false);

// const baseOptions = {
//   server: {
//     command: "npm run start",
//     port: 300,
//     launchTimeout: 180000,
//   },
// };

// const ciPipelineOptions = {
//   launch: {
//     headless: true,
//     args: [
//       "--no-sandbox",
//       "--disable-setuid-sandbox",
//       "--disable-accelerated-2d-canvas",
//       "--disable-gpu",
//     ],
//   },

//   server: baseOptions.server,
// };

// module.exports = ci ? ciPipelineOptions : baseOptions;

module.exports = {
  launch: {
    headless: process.env.CI === "false",
    args: ["--no-sandbox"],
  },
};
