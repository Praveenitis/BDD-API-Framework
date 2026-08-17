class AvailabilityHelper {

    static findAvailableDates(bookings) {

        const today = new Date();

        let latestCheckout = new Date(today);

        for (const booking of bookings) {

            const checkout = new Date(
                booking.bookingDates.checkout
            );

            if (checkout > latestCheckout) {
                latestCheckout = checkout;
            }
        }

        const checkin = new Date(latestCheckout);

        checkin.setDate(checkin.getDate() + 1);

        const checkout = new Date(checkin);

        checkout.setDate(checkout.getDate() + 2);

        return {
            checkin: this.formatDate(checkin),
            checkout: this.formatDate(checkout)
        };
    }

    static formatDate(date) {

        return date.toISOString().split('T')[0];

    }
}

module.exports = AvailabilityHelper;