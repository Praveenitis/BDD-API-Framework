const Logger = require('../utils/logger');
class ApiClient {

    constructor() {
        this.defaultHeaders = {
            'Content-Type': 'application/json'
        };
    }

    get(endpoint, options = {}) {
    return this.sendRequest('GET', endpoint, options);
}

post(endpoint, options = {}) {
    return this.sendRequest('POST', endpoint, options);
}

put(endpoint, options = {}) {
    return this.sendRequest('PUT', endpoint, options);
}

patch(endpoint, options = {}) {
    return this.sendRequest('PATCH', endpoint, options);
}

delete(endpoint, options = {}) {
    return this.sendRequest('DELETE', endpoint, options);
}

    async sendRequest(method, endpoint, options = {}) {

        const {
            headers = {},
            queryParams,
            body
        } = options;

        const url = this.buildUrl(endpoint, queryParams);

        const requestHeaders = {
            ...this.defaultHeaders,
            ...headers
        };

        const startTime = Date.now();
        Logger.info(
    `${method} ${url}`
);

        const response = await fetch(url, {
            method,
            headers: requestHeaders,
            body: body ? JSON.stringify(body) : undefined
        });

        const responseTime = Date.now() - startTime;

        Logger.info(
    `${method} ${url} → ${response.status} (${responseTime}ms)`
);

        const responseBody = await this.parseResponse(response);

        return {
            status: response.status,
            headers: response.headers,
            body: responseBody,
            responseTime
        };
    }

    buildUrl(endpoint, queryParams) {

        if (!queryParams) {
            return endpoint;
        }

        const url = new URL(endpoint);

        Object.entries(queryParams).forEach(([key, value]) => {
            url.searchParams.append(key, value);
        });

        return url.toString();
    }

    async parseResponse(response) {

        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        }

        return await response.text();
    }
}

module.exports = ApiClient;