const assert = require('assert');

const { I, pages, timeouts } = inject();

let currentPage;

When(/^I open "(.*)" page$/, (page) => {
  currentPage = pages[page];
  I.amOnPage(currentPage.url);
});

When(/^I click (?:on )?"(.*)"$/, (element) => {
  I.click(currentPage.getLocator(element));
});

When(/^I type "(.*)" into "(.*)"$/, (text, element) => {
  I.fillField(currentPage.getLocator(element), text);
});

When(/^I clear "(.*)"$/, (element) => {
  I.clearField(currentPage.getLocator(element));
  I.pressKey('Backspace');
});

Then(/^"(.*)" should (not )?be visible$/, (element, notVisible) => {
  if (notVisible) {
    I.waitForInvisible(currentPage.getLocator(element), timeouts.ELEMENT_LOADING_TIMEOUT);
  } else {
    I.waitForVisible(currentPage.getLocator(element), timeouts.ELEMENT_LOADING_TIMEOUT);
  }
});

Then(/^The number of "(.*)" should be (.*)$/, (elementCollection, count) => {
  I.seeNumberOfElements(currentPage.getLocator(elementCollection), +count);
});

Then(/^The text of "(.*)" should (be|contain) "(.*)"$/, (element, equal, text) => {
  if (equal === 'be') {
    I.seeTextEquals(text, currentPage.getLocator(element));
  } else {
    I.see(text, currentPage.getLocator(element));
  }
});

Then(/^The text of the (.*)(?:st|nd|rd|th) of "(.*)" should be "(.*)"$/, async (index, elementCollection, text) => {
  const actualTexts = await I.grabTextFromAll(currentPage.getLocator(elementCollection));
  assert.strictEqual(actualTexts[index - 1], text);
});

Then(/^I should be on "(.*)" page$/, (page) => {
  I.waitUrlEquals(pages[page].url, timeouts.ELEMENT_LOADING_TIMEOUT);
  currentPage = pages[page];
});

// TODO: Right now, this step only works with CSS selectors.
// Figure out a solution to be able to handle XPath as well
Then(/^"(.*)" should be (disabled|enabled)$/, (element, actualState) => {
  const states = {
    disabled: '[disabled]',
    enabled: ':not([disabled])',
  };
  I.waitForVisible(`${currentPage.getLocator(element)}${states[actualState]}`, timeouts.ELEMENT_LOADING_TIMEOUT);
});
