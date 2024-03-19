@jira(ISG-1) @epic(Navigation)
Feature: Create navigation header for Home page
  As a GitHub user
  I want to have a navigation header on the home page
  So that I can navigate between different pages easier

  Background:
    Given I open "Home" page
    Then "Header" should be visible

  @id(TC-1) @smoke @visualTesting
  Scenario: Header menu items visibility
    And "Header menu items" should be visible
    And The number of "Header menu items" should be 4
    And The text of the 1st of "Header menu items" should be "Product"
    And The text of the 2nd of "Header menu items" should be "Solutions"
    And The text of the 3rd of "Header menu items" should be "Open Source"
    And The text of the 4th of "Header menu items" should be "Pricing"

  @id(TC-2) @smoke
  Scenario: Sign in and Sign up buttons visibility
    And "Sign in button" should be visible
    And The text of "Sign in button" should be "Sign in"
    And "Sign up button" should be visible
    And The text of "Sign up button" should be "Sign up"

  @id(TC-3) @smoke
  Scenario Outline: <navigation_element> navigates to the <navigated_to> page
    When I click "<navigation_element>"
    Then I should be on "<navigated_to>" page

    Examples:
      | navigation_element | navigated_to |
      | Sign in button     | Login        |
      | Sign up button     | Sign up      |
