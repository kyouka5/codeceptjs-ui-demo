const BasePage = require("./basePage");

class SignUpPage extends BasePage {
    constructor() {
        super();
        this.name = "Sign up";
        this.url = "/signup";
        this.elements = {
            "Email label": "label.signup-text-prompt",
            "Email field": "input#email",
            "Continue button": "#email-container button.signup-continue-button",
            "Email field validation error": "#email-err>p:first-child",
            "Domain suggestion": "#email-err>[data-target='text-suggester.suggestionContainer']"
        };
    }
}

module.exports = new SignUpPage();