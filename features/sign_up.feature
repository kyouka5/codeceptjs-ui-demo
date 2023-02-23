Feature: Sign up
  As a GitHub user
  I want to be able to register
  So that I can access more functionalities

  Background:
    Given I open "Sign up" page
    Then Eventually "Email field" should be visible

  @id(TC-3) @smoke
  Scenario: Sign up page elements visibility
    And "Continue button" should be visible

  @id(TC-4) @smoke
  Scenario: Continue button is disabled by default
    And "Continue button" should be disabled

  @id(TC-5) @regression
  Scenario Outline: Email field validation - invalid case: <case>
    When I type "<email>" into "Email field"
    Then "Continue button" should be disabled
    And Eventually "Email field validation error" should be visible
    And The text of "Email field validation error" should be "<validation_error>"

    Examples:
      | case                           | email                                                                                                 | validation_error                   |
      | simple string value            | simple_text                                                                                           | Email is invalid or already taken  |
      | email without domain extension | invalid@email                                                                                         | Email is invalid or already taken  |
      | not verified domain            | invalid@test.com                                                                                      | Email domain could not be verified |
      | max email length + 1           | 101_characters_looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong_email@testemail.com | Email is invalid or already taken  |
      | email is already taken         | test@gmail.com                                                                                        | validation_error                   |

  @id(TC-6) @regression
  Scenario: Email field validation - valid case
    When I type "not_taken_email@email.com" into "Email field"
    Then "Continue button" should be enabled
    And Eventually "Email field validation error" should not be visible

  @id(TC-7) @regression
  Scenario: Validation error disappears when the input field is cleared
    When I type "invalid@email" into "Email field"
    Then "Email field validation error" should be visible

    When I clear "Email field"
    Then Eventually "Email field validation error" should not be visible

  @id(TC-8) @regression
  Scenario: Domain suggestion is not visible when an unrecognized domain is entered
    When I type "not_taken_email@epa.com" into "Email field"
    Then Eventually "Domain suggestion" should not be visible

  @id(TC-9) @smoke
  Scenario Outline: Domain suggestion is visible when a recognized domain is entered: <domain>
    When I type "not_taken_email@<domain_with_typo>" into "Email field"
    Then Eventually "Domain suggestion" should be visible
    And The text of "Domain suggestion" should be "Did you mean not_taken_email@<domain_suggestion>?"

    Examples:
      | domain_with_typo | domain_suggestion |
      | fmail.com        | gmail.com         |
      | ahoo.com         | yahoo.com         |
      | htmail.com       | hotmail.com       |