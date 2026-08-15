const ApiClient = require('./apiClient');

class AuthService {

    constructor() {
        this.apiClient = new ApiClient();
        this.baseUrl = 'https://automationintesting.online/api';
    }

    async login(credentials) {

        return await this.apiClient.sendRequest(
            'POST',
            `${this.baseUrl}/auth/login`,
            {
                body: credentials
            }
        );
    }
}

module.exports = AuthService;