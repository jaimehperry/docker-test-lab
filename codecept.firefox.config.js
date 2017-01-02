exports.config = {
  "tests": "./e2e/tests/*.js",
  "testPath": "./e2e/tests/",
  "timeout": 10000,
  "output": "./e2e/output",
  "helpers": {
    "WebDriverIO": {
      "url": "http://localhost",
      "port":"4444",
      "path":"/wd/hub",
      "browser": "firefox"
    },
    "JSForce": { "require": "./e2e/helpers/jsforce_helper.js" }
  },
  "include": {
    "I": "./e2e/config/steps_file.js",
    "DemoPage": "./e2e/pages/DemoPage.js"
  },
  "bootstrap": false,
  "mocha": {
    "reporterOptions": {
        "reportDir": "./e2e/output"
    }
  },
  "name": "Codescience"
}