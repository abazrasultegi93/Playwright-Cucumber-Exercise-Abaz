Feature: Login Page

  Scenario: Validate the login page title
    Given I open the "https://www.saucedemo.com/" page
    Then I should see the title "Swag Labs"

  Scenario: Validate login error message
    Given I open the "https://www.saucedemo.com/" page
    When I login with username "locked_out_user" and password "secret_sauce"
    Then I should see an error message "Epic sadface: Sorry, this user has been locked out."
