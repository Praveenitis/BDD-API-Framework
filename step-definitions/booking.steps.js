const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

const AuthService = require('../api/authService');
const BookingService = require('../api/bookingService');

let authService;
let bookingService;
let response;

Given('I am authenticated as an admin', async function () {

    authService = new AuthService();

    await authService.login({
        username: 'admin',
        password: 'password'
    });

});

When('I retrieve the bookings', async function () {

    bookingService = new BookingService(authService);

    response = await bookingService.getBookings();

    console.log('Booking Status:', response.status);
    console.log('Booking Response:', response.body);

});

Then('the booking response should be successful', function () {

    console.log('Final Booking Status:', response.status);
    console.log('Final Booking Response:', response.body);

    assert.strictEqual(response.status, 200);

});