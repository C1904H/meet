import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn\'t specified a number, 32 events shown by default.', ({ given, and, when, then }) => {
    let AppDOM;
    given('user opens the app', () => {
      const AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });

    and('user hasn\'t changed the number of events', () => {
    });

    let EventListItems
    when('the user views the event list', async () => {
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBeGreaterThan(0);
      });
    });

    then(/^the Number of Events input field should display default number of (\d+)$/, (arg0) => {
      const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
      const numberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');
      expect(numberOfEventsInput.value).toBe("32");
    });

    and(/^number of events in list should be default number of (\d+)$/, (arg0) => {
      expect(EventListItems.length).toBe(32);
    });
});

test('User can change the number of events displayed.', ({ given, when, then }) => {
    let AppDOM;
    given('user opens the app', () => {
      const AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
    });

    when('the user changes the Number of Events input field', async () => {
      const user = userEvent.setup();
      const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events');
      const numberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');
      await user.type(numberOfEventsInput, "{backspace}{backspace}10");
      expect(numberOfEventsInput.value).toBe("10");
    });

    then('the Number of Events in event list should update accordingly', async() => {
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(10);
      })
    });
});

});