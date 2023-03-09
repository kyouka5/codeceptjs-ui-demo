CodeceptJS UI demo
==================

UI testing demo project using CodeceptJS and GitHub Actions to execute tests, and then publish Allure test report to GitHub Pages.

Install
-------
```shell
npm install
```

Run tests
---------

Run all tests:
```shell
npm run codeceptjs
```

Run only the tests marked with `@current` tag:
```shell
npm run codeceptjs:current
```

View Allure report:
```shell
allure serve output
```
