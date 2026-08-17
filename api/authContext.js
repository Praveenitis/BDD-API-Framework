class AuthContext {

    constructor() {
        this.token = null;
    }

    setToken(token) {
        this.token = token;
    }

    getToken() {
        return this.token;
    }

    clearToken() {
        this.token = null;
    }

    getAuthHeaders() {

        if (!this.token) {
            return {};
        }

        return {
            Cookie: `token=${this.token}`
        };
    }
}

module.exports = AuthContext;