exports.config = {
    output: './output',
    helpers: {
        Playwright: {
            url: 'https://github.com',
            show: true,
            browser: 'chromium',
            bypassCSP: true
        }
    },
    include: {
        I: './steps_file.js',
        pages: './page_objects/pages.js',
        homePage: './page_objects/pages/homePage.js',
        timeouts: './timeouts.js'
    },
    bootstrap: null,
    timeout: 15,
    teardown: null,
    hooks: [],
    gherkin: {
        features: './features/*.feature',
        steps: ['./step_definitions/steps.js']
    },
    plugins: {
        allure: {
            enabled: true,
            require: '@codeceptjs/allure-legacy',
        },
        retryFailedStep: {
            enabled: true,
            defaultIgnoredSteps: [],
        }
    },
    tests: './test/*_test.js',
    name: 'codeceptjs-ui-demo'
}