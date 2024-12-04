module.exports = function (config) {
    config.set({
      basePath: "",
      frameworks: ["jasmine", "@angular-devkit/build-angular"],
      plugins: [
        require("karma-jasmine"),
        require("karma-chrome-launcher"),
        require("karma-jasmine-html-reporter"),
        require("karma-coverage"),
        require("@angular-devkit/build-angular/plugins/karma"),
      ],
      client: {
        clearContext: false,
      },
      jasmineHtmlReporter: {
        suppressAll: true
      },
      coverageReporter: {
        dir: require("path").join(__dirname, "./coverage/task-tracker/"),
        reports: ["html", "lcovonly", "text-summary"],
        reporters: [ { type: 'lcov' }],
        subdir: '.',
        fixWebpackSourcePaths: true,
      },
      reporters: ["progress", "kjhtml"],
      port: 9200,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome','ChromeHeadlessNoSandbox'],
      customLaunchers: {
        ChromeHeadlessNoSandbox: {
            base: 'ChromeHeadless',
            flags: ['--no-sandbox']
        }
      },
      singleRun: false,
      restartOnFileChange: true,
      captureTimeout: 2100000,
      browserDisconnectTolerance: 5,
      browserDisconnectTimeout : 3000000,
      browserNoActivityTimeout : 3000000,
    });
  };