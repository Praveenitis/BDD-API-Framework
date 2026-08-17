@api @booking
Feature: Create Booking

  Scenario: Create a new booking successfully
    Given I am authenticated as an admin
    When I create a new booking
    Then the booking should be created successfully