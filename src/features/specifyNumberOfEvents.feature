Feature: Specify Number of Events
 Scenario: When user hasn't specified a number, 32 events shown by default.
  Given user opens the app
  And user hasn't changed the number of events
  When the user views the event list
  Then the Number of Events input field should display default number of 32
  And number of events in list should be default number of 32

 Scenario: User can change the number of events displayed.
  Given user opens the app
  When the user changes the Number of Events input field
  Then the Number of Events in event list should update accordingly