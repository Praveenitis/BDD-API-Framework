const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

const BookingService = require('../api/bookingService');

When('I retrieve the bookings', async function () {

    //this.bookingService = new BookingService(this.authService);

    this.response = await this.bookingService.getBookings();

    console.log('Booking Status:', this.response.status);
    console.log('Booking Response:', this.response.body);
});

Then('the booking response should be successful', function () {

    console.log('Final Booking Status:', this.response.status);
    console.log('Final Booking Response:', this.response.body);

    assert.strictEqual(this.response.status, 200);
});