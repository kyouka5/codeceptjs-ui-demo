class BasePage {
  constructor() {
    this.url = null;
    this.elements = null;
  }

  getLocator(element) {
    return this.elements[element];
  }
}

module.exports = BasePage;
