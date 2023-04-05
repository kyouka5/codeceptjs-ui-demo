const BasePage = require('./basePage');

class HomePage extends BasePage {
  constructor() {
    super();
    this.name = 'Home';
    this.url = '/';
    this.elements = {
      Header: '.header-logged-out',
      Logo: 'a[aria-label=Homepage] > svg',
      'Header menu items': 'nav[aria-label=Global] li.HeaderMenu-item',
      'Search bar': 'form.js-site-search-form',
      'Sign in button': 'a.HeaderMenu-link--sign-in',
      'Sign up button': 'a.HeaderMenu-link--sign-up',
    };
  }
}

module.exports = new HomePage();
