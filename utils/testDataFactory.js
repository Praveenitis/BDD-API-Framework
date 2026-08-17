class TestDataFactory {

    static generateBookingData(roomId, checkin, checkout) {

        const timestamp = Date.now();

        return {
            roomid: roomId,
            firstname: `John${timestamp}`,
            lastname: 'Smith',
            totalprice: 250,
            depositpaid: true,
            bookingdates: {
                checkin: checkin,
                checkout: checkout
            },
            additionalneeds: 'Breakfast'
        };
    }
}

module.exports = TestDataFactory;