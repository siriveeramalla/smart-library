const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

(async function testLibrarySearch() {
  let options = new chrome.Options();
  options.addArguments("--log-level=3");

  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();

  try {
  
    await driver.get("file:///C:/Users/siri/library-search/library.html");

    const dropdown = await driver.wait(until.elementLocated(By.id("librarySelect")), 5000);
    await dropdown.sendKeys("State Central Library, Hyderabad");

    const button = await driver.findElement(By.xpath("//button[text()='Continue']"));
    await button.click();

    
    await driver.wait(until.urlContains("index.html"), 5000);

    const selected = await driver.wait(until.elementLocated(By.id("selectedLibrary")), 5000);
    const libText = await selected.getText();
    if (libText.includes("State Central Library, Hyderabad")) {
      console.log("✅ Library selection successful.");
    } else {
      console.log("❌ Library name not displayed properly.");
    }

    const searchBox = await driver.findElement(By.id("search"));
    await searchBox.sendKeys("Python Basics");

    const searchBtn = await driver.findElement(By.id("searchBtn"));
    await searchBtn.click();

    await driver.sleep(2000); 
    const results = await driver.findElements(By.className("book"));

    if (results.length > 0) {
      console.log("✅ Test Passed: Book search successful!");
    } else {
      console.log("❌ Test Failed: No results found.");
    }
  } catch (err) {
    console.error("❌ Error:", err.message);
  } finally {
    await driver.quit();
  }
})();
