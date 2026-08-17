const {  When, Then } = require('@cucumber/cucumber');
const assert = require('assert');


const BookingService = require('../api/bookingService');

let authService;
let bookingService;
let response;



When('I create a new booking', async function () {

    this.bookingService = new BookingService(this.authService);

    const bookingData = {
        roomid: 1,
        firstname: 'John',
        lastname: 'Smith',
        totalprice: 250,
        depositpaid: true,
        bookingdates: {
            checkin: '2026-09-01',
            checkout: '2026-09-05'
        },
        additionalneeds: 'Breakfast'
    };

    this.response = await this.bookingService.createBooking(bookingData);

    console.log('Create Booking Status:', this.response.status);
    console.log('Create Booking Response:', this.response.body);
});

Then('the booking should be created successfully', function () {

    assert.strictEqual(this.response.status, 201);

    assert.ok(this.response.body.bookingid);
});