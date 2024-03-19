const Helper = require('@codeceptjs/helper');

class Percy extends Helper {
  async grabPage() {
    const { page } = this.helpers.Playwright;
    return page;
  }
}

module.exports = Percy;
