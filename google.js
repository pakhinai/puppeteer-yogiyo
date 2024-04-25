const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false }); // Launches a visible browser
  const page = await browser.newPage(); // Opens a new browser tab
  await page.goto("https://www.google.com"); // Navigates to Google

  // Wait for the input and type the address

  await page.type("*[name='q']", "puppteer get", { delay: 500 });

  await Promise.all([
    page.waitForNavigation({ waitUntil: "domcontentloaded" }),
    page.keyboard.press("Enter"),
  ]);
})();
