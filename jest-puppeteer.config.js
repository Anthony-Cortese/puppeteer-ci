module.exports = {
  launch: {
    headless: process.env.CI === "false",
    ignoreDefaultArgs: ["--disable-extensions"],
    args: ["--no-sandbox"],
  },
  // server: {
  //   command: "npm start",
  //   port: 4000,
  //   launchTimeout: 180000,
  //   debug: true,
  // },
};
