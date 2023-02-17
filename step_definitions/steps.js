const assert = require('assert');
const {I, pages, constants} = inject();

let currentPage;

Given(/^I open "(.*)" page$/, page => {
    currentPage = pages[page];
    I.amOnPage(currentPage.url);
});

When(/^I click (?:on )?"(.*)"$/, element => {
    I.click(currentPage.elements[element]);
});

When(/^I type "(.*)" into "(.*)"$/, (text, element) => {
    I.fillField(currentPage.elements[element], text);
});

Then(/^(Eventually )?"(.*)" should (not )?be visible$/, (wait, element, notVisible) => {
    if (wait) {
        I.waitForVisible(currentPage.elements[element], constants.ELEMENT_LOADING_TIMEOUT);
    }
    if (notVisible) {
        I.dontSeeElement(currentPage.elements[element]);
    } else {
        I.seeElement(currentPage.elements[element]);
    }
});

Then(/^The number of "(.*)" should be (.*)$/, (elementCollection, count) => {
    I.seeNumberOfElements(currentPage.elements[elementCollection], +count);
});

Then(/^The text of "(.*)" should be "(.*)"$/, (element, text) => {
    I.seeTextEquals(text, currentPage.elements[element]);
});

Then(/^The text of the (.*)(?:st|nd|rd|th) of "(.*)" should be "(.*)"$/, async (index, elementCollection, text) => {
    const actualTexts = await I.grabTextFromAll(currentPage.elements[elementCollection]);
    assert.strictEqual(actualTexts[index - 1], text);
});

Then(/^I should be on "(.*)" page$/, page => {
    I.waitUrlEquals(pages[page].url, constants.ELEMENT_LOADING_TIMEOUT);
    currentPage = pages[page];
});

Then(/^"(.*)" should be (disabled|enabled)$/, async (element, state) => {
    const DISABLED_ATTRIBUTE = "disabled";
    const isDisabled = state === DISABLED_ATTRIBUTE;
    const actualState = await I.grabAttributeFrom(currentPage.elements[element], DISABLED_ATTRIBUTE);
    assert.strictEqual(actualState, isDisabled);
});