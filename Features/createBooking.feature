@api @booking
Feature: Create Booking

  Scenario: Create and retrieve a booking successfully
    Given I am authenticated as an admin
    When I create a new booking
    Then the booking should be created successfully
    When I retrieve the created booking
    Then the created booking details should be correct