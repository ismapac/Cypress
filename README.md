# Cypress

# Essential packages
Installing all the necessary packages. A good piece of advice is not to use the “mocha”: “latest” command. The latest version is usually unstable and it may have a negative impact on the generated reports.

    "mocha": "5.2.0",
    "mochawesome": "4.1.0",
    "mochawesome-merge": "2.0.1",
    "mochawesome-report-generator": "4.0.1"

# Report configuration in cypress.json
Reporter’s configuration to the cypress.json file. Much like before, I avoided “reporter”: “mochawesome” due to stability issues.

    "reporter": "./node_modules/mochawesome/src/mochawesome.js",
    "reporterOptions": {
      "reportDir": "cypress/reports/separate-reports",
      "overwrite": false,
      "html": false,
      "json": true
    }

# Script configuration in package.json

 "clean-reports":"rm -rf cypress/reports",
 "test": "npx cypress run",
 "merge-report": "npx mochawesome-merge --reportDir cypress/reports/separate-reports cypress/reports/full_report.json",
 "generate-report": "npx mochawesome-report-generator --reportDir cypress/reports cypress/reports/full_report.json",
 "after:tests": "npm run merge-report; npm run generate-report",
 "cypress": "npm run clean-reports; npm run test; npm run after:tests"
