require('../spec.helper');

context('FizzBuzz test', () => {
  // Initialize a browser and visit the server's root path
  before(async () => {
    await browser.init()
    await browser.visitPage('http://localhost:8080/')
  });

  // Reload before each test 
  beforeEach(async () => {
    await browser.page.reload();
  });

  it('clicking on the "Check" button', async () => {
    await browser.fillIn("input[id='value']", { with: "3" })
    await browser.clickOnButton("input[value='Check']")
    let content = await browser.getContent("[id='display_answer']")
    expect(content == ('Fizz'))
  });

  // Make sure the browser closes after the test is finished
  after(() => {
    browser.close();
  });

  // Example test
  it('renders the correct page title', async () => {
    expect(await browser.page.title()).to.eql('Puppeteer Mocha Scaffold');
  });
});