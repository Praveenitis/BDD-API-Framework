const { Before } = require('@cucumber/cucumber');

const AuthService = require('../api/authService');
const BookingService = require('../api/bookingService');

Before(function () {

    this.authService = new AuthService();

    this.bookingService = new BookingService(
        this.authService
    );

});