const ApiClient = require('./apiClient');
const environment = require('../config/environment');

class RoomService {

    constructor(authService) {
        this.apiClient = new ApiClient();
         this.authService = authService;
       this.baseUrl = environment.baseUrl;
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