@api @booking
Feature: Create Booking

  Scenario: Create and retrieve a booking successfully
    Given I am authenticated as an admin
    When I create a new booking
    Then the booking should be created successfully
    When I retrieve the created booking
    Then the created booking details should be correct

    Scenario: Update an existing booking successfully
    Given I am authenticated as an admin
    When I create a new booking
    Then the booking should be created successfully
    When I update the created booking
    Then the booking should be updated successfully
    When I retrieve the updated booking
    Then the updated booking details should be correct

    Scenario: Delete an existing booking successfully
    Given I am authenticated as an admin
    When I create a new booking
    Then the booking should be created successfully
    When I delete the created booking
    Then the booking should be deleted successfully
    When I try to retrieve the deleted booking
    Then the deleted booking should not be found

   