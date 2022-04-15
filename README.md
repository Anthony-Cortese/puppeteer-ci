![Workflow badge](https://github.com/Anthony-Cortese/puppeteer-ci/actions/workflows/tests.yml/badge.svg)

"react-scripts test --testPathPattern=.\*e2e.test.js$",

executablePath: "/usr/bin/google-chrome-stable",

await puppeteer.launch({
headless: true,
args: [
"--disable-gpu",
"--disable-dev-shm-usage",
"--no-sandbox",
"--disable-setuid-sandbox"
]
});

const ci = Boolean(process.env.CI || false);

const baseOptions = {
server: {
command: "npm run start",
port: 3000,
},
};

const ciPipelineOptions = {
launch: {
executablePath: "/usr/bin/google-chrome-stable",
headless: true,
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

name: Node.js CI

# on:

# push:

# branches: [main]

# pull_request:

# branches: [main]

# jobs:

# build:

# runs-on: ubuntu-latest

# env:

# PUPPETEER_SKIP_CHROMIUM_DOWNLOAD: "true"

# CI: "true"

# steps:

# - uses: actions/checkout@v2

# with:

# fetch-depth: 0

# strategy:

# matrix:

# node-version: [14.x]

# - uses: actions/setup-node@v2

# with:

# node-version: ${{ matrix.node-version }}

# - name: Caching nodeJS

# uses: actions/cache@v2

# id: npm-cache

# with:

# path: |

# ~/.npm

# ./node_modules

# key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}

# restore-keys: |

# ${{ runner.os }}-node-

# - run: npm install --ignore-scripts

# - name: End to End Test

# run: |

# export DISPLAY=:99

# chromedriver --url-base=/wd/hub &

# sudo Xvfb -ac :99 -screen 0 1280x1024x24 > /dev/null 2>&1 & # optional

# - run: npm ci

# - run: npm run build --if-present

# - run: npm test
