import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import Event from '../components/Event';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {

  test('An event element is collapsed by default.', ({ given, when, then }) => {
    let AppComponent;
    given('user opens the app', () => {
      AppComponent = render(<App />);
    });
    
    let AppDOM;
    let EventListItems;
    when('the user views the event list', async () => {
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');

      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBeGreaterThan(0);
      });
    });

    then('all the listed events details should be hidden', async () => {
      await waitFor(() => {
        EventListItems.forEach(eventListItem => {
          expect(eventListItem.querySelector('.details')).not.toBeInTheDocument();
        });
      })
    });
});

test('User can expand an event to see details.', ({ given, when, then, and }) => {
    let AppComponent;
    given('user opens the app', () => {
      AppComponent = render(<App />);
    });

    let AppDOM;
    let EventListItems;
    when('the user clicks on event details button', async () => {
      const user = userEvent.setup();
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      let detailsButton;
      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole('listitem');
        detailsButton = within(EventListItems[0]).queryByText('Show details');
      });
      await user.click(detailsButton);
    });

    then('the event details should be shown', () => {
      const details = EventListItems[0].querySelector('.details');
      expect(details).toBeInTheDocument();
    });

    and('event details button text should changes to (Hide details)', () => {
      const detailsButton = within(EventListItems[0]).queryByText('Hide details');
      expect(detailsButton.textContent).toBe('Hide details');
    });
});

test('User can collapse an event to hide details.', ({ given, and, when, then }) => {
    let AppDOM;
    let EventListItems;
    let detailsButton;
    given('event details are displayed', async () => {
      const user = userEvent.setup();
      const AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector('#event-list');
      await waitFor(() => {
        EventListItems = within(EventListDOM).queryAllByRole('listitem');
        detailsButton = within(EventListItems[0]).queryByText('Show details');
      })
      await user.click(detailsButton);
      expect(EventListItems[0].querySelector('.details')).toBeInTheDocument();
    });

    and('event details button text is (Hide details)', () => {
      expect(detailsButton.textContent).toBe('Hide details');
    });

    when('the user clicks on button', async () => {
      const user = userEvent.setup();
      await user.click(detailsButton);
    });

    then('event details should be hidden', () => {
      expect(EventListItems[0].querySelector('.details')).not.toBeInTheDocument();
    });

    and('event details button text changes to (Show details)', () => {
      expect(detailsButton.textContent).toBe('Show details');
    });
});

});