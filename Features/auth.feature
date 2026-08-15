@api @smoke
Feature: API Authentication

  Scenario: Generate authentication token with valid credentials
    Given valid admin credentials
    When I send an authentication request
    Then an authentication token should be generated