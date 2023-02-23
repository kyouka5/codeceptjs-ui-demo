const homePage = require("./pages/homePage");
const signUpPage = require("./pages/signUpPage");

module.exports = {
    [homePage.name]: homePage,
    [signUpPage.name]: signUpPage
};