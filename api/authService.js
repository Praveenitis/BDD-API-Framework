const ApiClient = require('./apiClient');
const TokenManager = require('./tokenManager');

class AuthService {

    constructor() {
        this.apiClient = new ApiClient();
        this.tokenManager = new TokenManager();
        this.baseUrl = 'https://automationintesting.online/api';
    }

    async login(credentials) {

        const response = await this.apiClient.sendRequest(
            'POST',
            `${this.baseUrl}/auth/login`,
            {
                body: credentials
            }
        );

        if (response.status === 200 && response.body.token) {
            this.tokenManager.setToken(response.body.token);
        }

        return response;
    }

    getToken() {
        return this.tokenManager.getToken();
    }

    clearToken() {
        this.tokenManager.clearToken();
    }
}

module.exports = AuthService;