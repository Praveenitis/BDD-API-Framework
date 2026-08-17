const {  When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const TestDataFactory = require('../utils/testDataFactory');
const RoomService = require('../api/roomService');
const AvailabilityHelper = require('../utils/availabilityHelper');


const BookingService = require('../api/bookingService');

let authService;
let bookingService;
let response;



When('I create a new booking', async function () {

    this.bookingService = new BookingService(this.authService);

    const roomService = new RoomService(this.authService);

    const summaryResponse = await roomService.getBookingSummary(1);

    console.log(
        'Booking Summary Status:',
        summaryResponse.status
    );

    console.log(
    'Booking Summary Response:',
    JSON.stringify(summaryResponse.body, null, 2)
);
    const roomId = 1;

const availableDates =
    AvailabilityHelper.findAvailableDates(
        summaryResponse.body.bookings
    );

const bookingData =
    TestDataFactory.generateBookingData(
        roomId,
        availableDates.checkin,
        availableDates.checkout
    );


    this.bookingData = bookingData;

    this.response = await this.bookingService.createBooking(
        bookingData
    );
    if (this.response.body.bookingid) {
    this.bookingId = this.response.body.bookingid;
}
    console.log('Generated Booking ID:', this.bookingId);

    console.log('Create Booking Status:', this.response.status);
    console.log('Create Booking Response:', this.response.body);

});

Then('the booking should be created successfully', function () {

    assert.strictEqual(this.response.status, 201);

    assert.ok(this.response.body.bookingid);
});

When('I retrieve the created booking', async function () {

    this.response = await this.bookingService.getBooking(
        this.bookingId
    );

    console.log('Get Booking Status:', this.response.status);
    console.log('Get Booking Response:', this.response.body);
});

Then('the created booking details should be correct', function () {

    assert.strictEqual(this.response.status, 200);

    assert.strictEqual(
        this.response.body.firstname,
        this.bookingData.firstname
    );

    assert.strictEqual(
        this.response.body.lastname,
        this.bookingData.lastname
    );

    assert.strictEqual(
        this.response.body.roomid,
        this.bookingData.roomid
    );

});