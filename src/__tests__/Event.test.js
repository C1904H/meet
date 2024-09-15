// src/__tests__/Event.test.js

import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import { getEvents } from '../api';

describe('<Event /> component', () => {
  let EventComponent;
  let allEvents;

  beforeEach(async () => {
    allEvents = await getEvents();
    EventComponent = render(<Event event={allEvents[0]} />);
  });

  test('renders event title', () => {
    expect(
      EventComponent.queryByText(allEvents[0].summary)
    ).toBeInTheDocument();
  });

  test('renders event start time', () => {
    expect(
      EventComponent.queryByText(new Date(allEvents[0].created).toUTCString())
    ).toBeInTheDocument();
  });

  test('renders event location', () => {
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  test('renders event details button with the title (show details)', () => {
    expect(EventComponent.queryByText('Show details')).toBeInTheDocument();
  });

  //Scenario 1 - Event element is collapsed by default
  test('by default, the event details section should be hidden', () => {
    expect(
      EventComponent.container.querySelector('.eventDetails')
    ).not.toBeInTheDocument();
  });

  //Scenario 2 - User can expand event to see details
  test('show the event details upon click (show details) button', async () => {
    const user = userEvent.setup();
    const showDetailButton = EventComponent.queryByText('Show details');
    await user.click(showDetailButton);
    const eventDetails = EventComponent.container.querySelector('.eventDetails');
    expect(eventDetails).toBeInTheDocument();
  });

  //Scenario 3 - User can collapse event to hide details
  test('hides the details section when user clicks on (Hide details) button', async () => {
    const user = userEvent.setup();
    const showDetailButton = EventComponent.queryByText('Show details');
    await user.click(showDetailButton);

    const hideDetailButton = EventComponent.queryByText('Hide details');
    await user.click(hideDetailButton);
    const eventDetails = EventComponent.container.querySelector('.eventDetails');
    expect(eventDetails).not.toBeInTheDocument();
  });
});
