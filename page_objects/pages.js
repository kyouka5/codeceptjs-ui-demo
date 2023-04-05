const homePage = require('./pages/homePage');
const signUpPage = require('./pages/signUpPage');
const loginPage = require('./pages/loginPage');

module.exports = {
  [homePage.name]: homePage,
  [signUpPage.name]: signUpPage,
  [loginPage.name]: loginPage,
};
