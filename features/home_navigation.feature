Feature: Home navigation
  As a GitHub user
  I want to have a navigation header on the home page
  So that I can navigate between different pages easier

  Background:
    Given I open "Home" page
    Then "Header" should be visible

  @smoke @id(TC-1)
  Scenario: Header elements visibility
    Then The number of "Header menu items" should be 4
    And The text of the 1st of "Header menu items" should be "Product"
    And The text of the 2nd of "Header menu items" should be "Solutions"
    And The text of the 3rd of "Header menu items" should be "Open Source"
    And The text of the 4th of "Header menu items" should be "Pricing"

  @smoke @id(TC-2)
  Scenario: Sign up button navigates to Sign up page
    When I click "Sign up button"
    Then I should be on "Sign up" page
