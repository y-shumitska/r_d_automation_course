Feature: JS Tutorial Cucumber.js Autotests

    Background:
        Given the contents page is opened

    Scenario: User is able to open the necessary tab in the tutorial contents 
        When the user clicks the tab
        Then the user made the tab active

    Scenario: User is able to open the necessary topic from the tutorial contents
        When the user clicks the topic
        Then the user opened the topic
