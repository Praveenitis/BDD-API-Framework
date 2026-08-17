const ApiClient = require('./apiClient');

class BookingService {

    constructor(authService) {
        this.apiClient = new ApiClient();
        this.authService = authService;
        this.baseUrl = 'https://automationintesting.online/api';
    }

    async getBookings() {

    return await this.apiClient.get(
        `${this.baseUrl}/booking/`,
        {
            headers: this.authService.getAuthHeaders(),

            queryParams: {
                roomid: 1
            }
        }
    );
}

async createBooking(bookingData) {

    return await this.apiClient.post(
        `${this.baseUrl}/booking/`,
        {
            body: bookingData
        }
    );
}

async getBooking(id) {

    return await this.apiClient.get(
        `${this.baseUrl}/booking/${id}`,
        {
            headers: this.authService.getAuthHeaders()
        }
    );
}
}

module.exports = BookingService;