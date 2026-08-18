module.exports = {
    default: {
        require: [
            './step-definitions/**/*.js',
            './hooks/**/*.js'
        ],
        format: [
            'progress',
            'html:reports/cucumber-report.html',
    'json:reports/cucumber-report.json'
        ],
        timeout: 15000
    }
};