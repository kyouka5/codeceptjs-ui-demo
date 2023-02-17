Feature: Sign up
  As a GitHub user
  I want to be able to register
  So that I can access more functionalities

  Background:
    Given I open "Sign up" page
    Then Eventually "Email field" should be visible

  @smoke @id(TC-3)
  Scenario: Sign up page elements visibility
    Then "Continue button" should be visible

  @smoke @id(TC-4)
  Scenario: Continue button is disabled by default
    Then "Continue button" should be disabled

#  teeest@test.com - invalid domain
#  invalid@email - invalid or taken
#  test@email.com - invalid or taken + suggestion
#  nem lehet a domain partban aláhúzás
#  a pont után legalább két karakter kell, hogy álljon
#  nem lehet 100 karakternél hosszabb
#  nem lehet 6 karakternél rövidebb
  @regression @id(TC-5)
  Scenario Outline: Email field validation - invalid cases
    When I type "<email>" into "Email field"
    Then "Continue button" should be disabled
    And Eventually "Email field validation error" should be visible
    And The text of "Email field validation error" should be "<validation_error>"

    Examples:
      | email            | validation_error                   |
      | simple_text      | Email is invalid or already taken  |
      | invalid@test.com | Email domain could not be verified |

  @regression @id(TC-6)
  Scenario: Email field validation - valid case

  @regression @id(TC-7)
  Scenario: Validation error disappears when the input field is cleared