class SignUp {
    constructor() {
        this.url = "/signup";
        this.elements = {
            "Email field": "input#email",
            "Continue button": "button.signup-continue-button",
            "Email field validation error": "#email-err>p"
        }
    }
}

module.exports = new SignUp();