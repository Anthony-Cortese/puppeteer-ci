import React from "react";

const Home = () => (
  <div className="home">
    <div className="main_content">
      <div>
        <h2 className="learn_header">What will you learn</h2>
        <ol>
          <li>What is Puppeteer</li>
          <li>How to Integrate Puppeteer with Jest</li>
          <li>Emulating mobile device</li>
          <li>Testing Forms</li>
          <li>Taking screenshots</li>
          <li>Testing fornted</li>
          <li>Intercepting requests</li>
          <li>How to target new tab opened in the headless browser</li>
          <li>How to debug your tests</li>
        </ol>
      </div>
      <div>
        <img src="/img/jest-puppeteer.png" alt="Jest + Puppeteer" />
      </div>
    </div>
  </div>
);

export default Home;
