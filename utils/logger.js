class Logger {

    static info(message, data = '') {
        console.log(`[INFO] ${message}`, data);
    }

    static success(message, data = '') {
        console.log(`[PASS] ${message}`, data);
    }

    static error(message, data = '') {
        console.error(`[ERROR] ${message}`, data);
    }

    static debug(message, data = '') {
        console.log(`[DEBUG] ${message}`, data);
    }
}

module.exports = Logger;