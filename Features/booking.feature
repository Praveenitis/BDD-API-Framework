@api @smoke
Feature: Booking API

  Scenario: Retrieve bookings with valid authentication
    Given I am authenticated as an admin
    When I retrieve the bookings
    Then the booking response should be successful