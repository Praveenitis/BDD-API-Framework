const ApiClient = require('./apiClient');

class BookingService {

    constructor(authService) {
        this.apiClient = new ApiClient();
        this.authService = authService;
        this.baseUrl = 'https://automationintesting.online/api';
    }

    async getBookings() {

    const token = this.authService.getToken();

    return await this.apiClient.get(
    `${this.baseUrl}/booking/`,
    {
        headers: {
            Cookie: `token=${token}`
        },
        queryParams: {
            roomid: 1
        }
    }
);
}
}

module.exports = BookingService;