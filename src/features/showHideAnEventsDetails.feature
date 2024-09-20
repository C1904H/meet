Feature: Show/Hide event details
 Scenario: An event element is collapsed by default.
  Given user opens the app
  When the user views the event list
  Then all the listed events details should be hidden

 Scenario: User can expand an event to see details.
  Given user opens the app
  When the user clicks on event details button
  Then the event details should be shown
  And event details button text should changes to (Hide details)

 Scenario: User can collapse an event to hide details.
  Given event details are displayed
  And event details button text is (Hide details)
  When the user clicks on button
  Then event details should be hidden
  And event details button text changes to (Show details)