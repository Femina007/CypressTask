Feature: To place an order in the site

        Place order
        
    Scenario: To register user and log out from the account
    Given I enter the registration details
    When I click on register button
    When I click on logout link
    Then I logout from account

    Scenario: To login user and place order
    Given I enter the login details
    When I select the item 
    When I choose the size and color
    When I add to cart 
    When I view the cart
    When I proceed to checkout 
    When I enter billing details
    When I place order
    When I verify the details once order is placed
    Then I logout from account after placing order