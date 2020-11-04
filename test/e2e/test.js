const assert = require('assert');
const {Builder, By} = require('selenium-webdriver');
 
describe('When a user opens the example page', () => {
  let driver;
  before(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('file:///C:/Users/Kalen/IdeaProjects/101/tryjs_intro_inner_html.html');
  })
  it('Then they should see a button to click', async () => {
    assert.equal(await driver.findElement(By.id('button')).isDisplayed(), true);
  });

  describe('And when they click the button', () => {
    before(async () => {
      await driver.findElement(By.id('button')).click();
      await driver.sleep(1000);
    });
    it('Then they should see the message', async () => {
      assert.equal(await driver.findElement(By.id('demo')).getText(), "Hello Javascript!");
    });
  })
  after(() => driver && driver.quit());
});