exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://github.com',
      show: true,
      browser: 'chromium',
      bypassCSP: true,
    },
    Percy: {
      require: './percy_helper.js',
    },
  },
  include: {
    I: './steps_file.js',
    pages: './page_objects/pages.js',
    homePage: './page_objects/pages/homePage.js',
    timeouts: './timeouts.js',
  },
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js'],
  },
  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
    },
    retryFailedStep: {
      enabled: true,
      defaultIgnoredSteps: [],
    },
    hooks: {
      enabled: true,
      require: './hooks.js',
    },
  },
  tests: './test/*_test.js',
  name: 'codeceptjs-ui-demo',
};
