Feature: Purchase Flow

  Scenario Outline: Validate successful purchase for multiple users
    Given I open the "https://www.saucedemo.com/" page
    When I login with username "<username>" and password "<password>"
    And I add a product to the cart
    And I complete the checkout process
    Then I should see the success message "<message>"

    Examples:
      | username                 | password      | message                   |
      | standard_user            | secret_sauce  | Thank you for your order! |
      | performance_glitch_user  | secret_sauce  | Thank you for your order! |
