@sort
Feature: Product Sorting
  Verify that products can be sorted correctly by Price and Name on the Products page.

  Scenario Outline: Verify product sorting by <sortType>
    Given I am logged in and on the Products page
    When I sort products by "<sortType>"
    Then products should be sorted in "<direction>" order by "<sortKey>"

    Examples:
      | sortType             | direction   | sortKey |
      | price (low to high)  | ascending   | Price   |
      | price (high to low)  | descending  | Price   |
      | name (a to z)        | ascending   | Name    |
      | name (z to a)        | descending  | Name    |
