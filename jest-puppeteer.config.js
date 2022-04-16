module.exports = {
  launch: {
    dumpio: true,
    headless: true, //process.env.HEADLESS !== 'false',
  },
  server: {
    command: `npm start`,
    port: 3000,
    launchTimeout: 10000,
    debug: true,
  },
};
