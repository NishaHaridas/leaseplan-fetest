Feature: Client service page functionalities

    As a user on the client service page
    I want to see the various client service options available.

    Background:

        Given I navigate to "nl-nl/klantenservice/" page

    Scenario: To check whether a user is able to get a satisfied answer from FAQ
        When I click topic card "Schade"
        And I select subject "Schade melden"
        And I click on question "Ik heb acute hulp nodig en kan niet meer verder rijden"
        Then I should see answer text "Heb je schade of pech aan de auto en kun je niet meer verder rijden? Bel direct met LeasePlan Hulpverlening."
        And I should see title "Tevreden met dit antwoord?" in answer feedback section
        When I Click on "Ja" button to give feedback
        Then I should see text "Fijn dat we konden helpen!"
    
    Scenario: To check whether a user is able to get customer service details if answer is not satisfied from FAQ
        When I click topic card "Bestellen en leveren"
        And I select subject "Levering"
        And I click on question "Ik heb een Tesla Model S of X met 4% bijtelling besteld. Geldt de prijsverlaging ook voor deze auto’s?"
        Then I should see answer text "Voor alle voorraad Tesla’s Model S en X, met 4% bijtelling, geldt de prijsverlaging niet."
        And I should see title "Tevreden met dit antwoord?" in answer feedback section
        When I Click on "Nee, ik wil contact" button to give feedback
        Then I should see text "Zie onderstaande contactopties"
        And I should see options to reach LeasePlan via phone "0365270000"