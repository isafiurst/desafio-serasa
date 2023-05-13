const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://www.serasa.com.br/ecred/simulador/',
    reporter: 'cypress-mochawesome-reporter'
  },
});

