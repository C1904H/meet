# Meet App
A serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. This application uses the Google Calendar API to fetch upcoming events.

## Features
The key features of the app allow users to:
- Filter events by city
- Show/Hide event details
- Specify number of events
- Use the app when offline
- Add an app shortcut to home screen
- Display charts visualizing event details

## User Stories by Feature

### Feature 1: Filter events by city
As a **user**, <br />
I should be able to **filter events by city** <br />
So that **I can see a list of events taking place in my city**.


### Feature 2: Show/Hide event details
As a **user**, <br />
I should be able to **view/hide event details** <br />
So that **I can toggle the screen to only see the important event information I need**. 


### Feature 3: Specify number of events
As a **user**, <br />
I should be able to **specify the number of events to be shown** <br />
So that **I can control the amount of events displayed on screen without being overwhelmed**.


### Feature 4: Use the app when offline
As a **user**, <br />
I should be able to **use the app when offline** <br />
So that **I have constant access to my events, and my use of the app is not limited to when I have internet access**.

### Feature 5: Add an app shortcut to home screen
As a **user**, <br />
I should be able to **add an app shortcut to home screen** <br />
So that **I can have quick and easy access to the app and my events**.

### Feature 6: Display charts visualizing event details
As a **user**, <br />
I should be able to **view charts visualizing event details** <br />
So that **I can have a visual overview of event to help inform choice**.

### Gherkin Syntax
#### Scenario 1 - User can select a city from the suggested list
**Given** user was typing "Berlin" in the city textbox AND the list of suggested cities is showing; <br />
**When** the user selects a city (eg "Berlin, Germany") from the list; <br />
**Then** their city should be changed to that city (ie "Berlin, Germany") AND the user should receive a list of upcoming events in that city.

#### Scenario 2 - User is viewing details of event
**Given** user is viewing a list of events; <br />
**When** the user selects "show details" link for event; <br />
**Then**  then detailed information for event should be displayed.

#### Scenario 3 - User can specify the number of events to be displayed
**Given** user is viewing upcoming events page; <br />
**When** the user selects the number of events (eg "20") to be displayed; <br />
**Then**  then the app view should update with the specified number of events (ie "20").

#### Scenario 4 - User has no internet access
**Given** user is wanting to use the app but is offline; <br />
**When** the user opens the app; <br />
**Then**  then the app should display cached event details and perform actions that don't require internet.

#### Scenario 5 - User wants to add app shortcut to their home screen
**Given** user is in the app settings; <br />
**When** the user selects "add to home screen"; <br />
**Then**  then app should deploy a shortcut to the app on user's device homescreen.

#### Scenario 6 - User wants to see how many events will take place in a certain location
**Given** user is on events page; <br />
**When** the user selects "chart" icon; <br />
**Then**  then a scatterplot will be displayed showing how many events will take place in each location.