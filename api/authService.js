const ApiClient = require('./apiClient');
const TokenManager = require('./tokenManager');
const AuthContext = require('./authContext');

class AuthService {

    constructor() {

        this.apiClient = new ApiClient();
        this.tokenManager = new TokenManager();
        this.authContext = new AuthContext();

        this.baseUrl = 'https://automationintesting.online/api';
    }

    async login(credentials) {

        const response = await this.apiClient.post(
            `${this.baseUrl}/auth/login`,
            {
                body: credentials
            }
        );

        if (response.status === 200 && response.body.token) {

            this.tokenManager.setToken(response.body.token);

            this.authContext.setToken(response.body.token);
        }

        return response;
    }

    getToken() {
        return this.tokenManager.getToken();
    }

    getAuthHeaders() {
        return this.authContext.getAuthHeaders();
    }

    clearToken() {

        this.tokenManager.clearToken();

        this.authContext.clearToken();
    }
}

module.exports = AuthService;