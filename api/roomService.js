const ApiClient = require('./apiClient');

class RoomService {

    constructor(authService) {
        this.apiClient = new ApiClient();
         this.authService = authService;
        this.baseUrl = 'https://automationintesting.online/api';
    }

    async getRooms() {

        return await this.apiClient.get(
            `${this.baseUrl}/room/`
        );
    }

    async getBookingSummary(roomId) {

    return await this.apiClient.get(
        `${this.baseUrl}/booking/summary`,
        {
            headers: this.authService.getAuthHeaders(),

            queryParams: {
                roomid: roomId
            }
        }
    );
}
}

module.exports = RoomService;