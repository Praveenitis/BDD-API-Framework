const ApiClient = require('./apiClient');

class BookingService {

    constructor(authService) {
        this.apiClient = new ApiClient();
        this.authService = authService;
        this.baseUrl = 'https://automationintesting.online/api';
    }

    async getBookings() {

        const token = this.authService.getToken();

        return await this.apiClient.sendRequest(
            'GET',
            `${this.baseUrl}/booking/?roomid=1`,
            {
                headers: {
                    Cookie: `token=${token}`
                }
            }
        );
    }
}

module.exports = BookingService;