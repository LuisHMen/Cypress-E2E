const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "defaultCommandTimeout": 10000,
    "video": false,
    "reporter": "cypress-mochawesome-reporter",

    chromeWebSecurity: false,
    testIsolation: false
    
    // Des-comentar en caso de usar

    //baseUrl: 
    //specPattern: "cypress/e2e/features/*.feature",
    //pageLoadTimeout: 10000
  },
});
