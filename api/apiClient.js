class ApiClient {

    async sendRequest(method, endpoint, options = {}) {

        const {
            headers = {},
            body
        } = options;

        const response = await fetch(endpoint, {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: body ? JSON.stringify(body) : undefined
        });

        let responseBody;

        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
            responseBody = await response.json();
        } else {
            responseBody = await response.text();
        }

        return {
            status: response.status,
            headers: response.headers,
            body: responseBody
        };
    }
}

module.exports = ApiClient;