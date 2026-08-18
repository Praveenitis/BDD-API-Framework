require('dotenv').config();

module.exports = {
    baseUrl: process.env.BASE_URL,
        adminCredentials: {
        username: process.env.ADMIN_USERNAME,
        password: process.env.ADMIN_PASSWORD
    },
      roomId: Number(process.env.ROOM_ID)
};