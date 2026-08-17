module.exports = {
    default: {
        require: [
            './step-definitions/**/*.js'
        ],
        format: [
            'progress'
        ],
        timeout: 10000
    }
};