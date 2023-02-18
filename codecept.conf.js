exports.config = {
    output: './allure-report',
    helpers: {
        AssertWrapper: {
            require: "codeceptjs-assert"
        },
        Playwright: {
            url: 'https://github.com',
            show: true,
            browser: 'chromium',
            bypassCSP: true
        }
    },
    include: {
        I: './steps_file.js',
        pages: './pages/pages.js',
        homePage: './pages/home.js',
        constants: './constants.js'
    },
    mocha: {
        reporterOptions: {
            mochaFile: 'output/test-report.xml'
        }
    },
    bootstrap: null,
    timeout: null,
    teardown: null,
    hooks: [],
    gherkin: {
        features: './features/*.feature',
        steps: ['./step_definitions/steps.js']
    },
    plugins: {
        allure: {},
        retryFailedStep: {
            enabled: true,
            defaultIgnoredSteps: [],
        },
    },
    stepTimeout: 0,
    stepTimeoutOverride: [{
        pattern: 'wait.*',
        timeout: 0
    },
        {
            pattern: 'amOnPage',
            timeout: 0
        }
    ],
    tests: './test/*_test.js',
    name: 'github-ui-demo'
}