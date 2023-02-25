const BasePage = require("./basePage");

class LoginPage extends BasePage {
    constructor() {
        super();
        this.name = "Login";
        this.url = "/login";
        this.elements = {};
    }
}

module.exports = new LoginPage();