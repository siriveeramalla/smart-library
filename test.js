const { Builder, By, until } = require("selenium-webdriver");

(async function testLibrarySearch() {
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("C://Users//siri//OneDrive//Desktop//lib-search//index.html");

    const searchBox = await driver.findElement(By.id("search"));
    await searchBox.sendKeys("Java");
    await driver.findElement(By.tagName("button")).click();

    await driver.sleep(2000); // wait for results

    const results = await driver.findElements(By.className("book"));
    if (results.length > 0) {
      console.log("✅ Test Passed: Book Found");
    } else {
      console.log("❌ Test Failed: No Results");
    }
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await driver.quit();
  }
})();
