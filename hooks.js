const percySnapshot = require('@percy/playwright');

const { I } = inject();
const { event } = require('codeceptjs');

module.exports = function () {
  event.dispatcher.on(event.test.started, async (test) => {
    if (test.tags.includes('@visualTesting')) {
      const page = await I.grabPage();
      await percySnapshot(page, 'github');
    }
  });
};
