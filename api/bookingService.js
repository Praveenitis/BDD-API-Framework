const ApiClient = require('./apiClient');
const environment = require('../config/environment');

class BookingService {

    constructor(authService) {
        this.apiClient = new ApiClient();
        this.authService = authService;
        this.baseUrl = environment.baseUrl;
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

async updateBooking(id, bookingData) {

    return await this.apiClient.put(
        `${this.baseUrl}/booking/${id}`,
        {
            headers: this.authService.getAuthHeaders(),
            body: bookingData
        }
    );
}

async patchBooking(id, bookingData) {

    return await this.apiClient.patch(
        `${this.baseUrl}/booking/${id}`,
        {
            headers: this.authService.getAuthHeaders(),
            body: bookingData
        }
    );
}

async deleteBooking(id) {

    return await this.apiClient.delete(
        `${this.baseUrl}/booking/${id}`,
        {
            headers: this.authService.getAuthHeaders()
        }
    );
}
}

module.exports = BookingService;