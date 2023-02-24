const assert = require('assert');
const {I, pages, constants} = inject();

let currentPage;

Given(/^I open "(.*)" page$/, page => {
    currentPage = pages[page];
    I.amOnPage(currentPage.url);
});

When(/^I click (?:on )?"(.*)"$/, element => {
    I.click(currentPage.getLocator(element));
});

When(/^I type "(.*)" into "(.*)"$/, (text, element) => {
    I.fillField(currentPage.getLocator(element), text);
});

When(/^I clear "(.*)"$/, (element) => {
    I.clearField(currentPage.getLocator(element));
    I.pressKey("Backspace");
});

Then(/^"(.*)" should (not )?be visible$/, (element, notVisible) => {
    if (notVisible) {
        I.waitForInvisible(currentPage.getLocator(element), constants.ELEMENT_LOADING_TIMEOUT);
    } else {
        I.waitForVisible(currentPage.getLocator(element), constants.ELEMENT_LOADING_TIMEOUT);
    }
});

Then(/^The number of "(.*)" should be (.*)$/, (elementCollection, count) => {
    I.seeNumberOfElements(currentPage.getLocator(elementCollection), +count);
});

Then(/^The text of "(.*)" should be "(.*)"$/, (element, text) => {
    I.seeTextEquals(text, currentPage.getLocator(element));
});

Then(/^The text of the (.*)(?:st|nd|rd|th) of "(.*)" should be "(.*)"$/, async (index, elementCollection, text) => {
    const actualTexts = await I.grabTextFromAll(currentPage.getLocator(elementCollection));
    assert.strictEqual(actualTexts[index - 1], text);
});

Then(/^I should be on "(.*)" page$/, page => {
    I.waitUrlEquals(pages[page].url, constants.ELEMENT_LOADING_TIMEOUT);
    currentPage = pages[page];
});

Then(/^"(.*)" should be (disabled|enabled)$/, async (element, state) => {
    const DISABLED_ATTRIBUTE = "disabled";
    const isDisabled = state === DISABLED_ATTRIBUTE;
    const actualState = await I.grabAttributeFrom(currentPage.getLocator(element), DISABLED_ATTRIBUTE);
    assert.strictEqual(actualState, isDisabled);
});