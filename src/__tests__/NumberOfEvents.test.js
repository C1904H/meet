// src/__tests__/NumberOfEventsList.test.js

import { render } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';
import userEvent from '@testing-library/user-event';

// UNIT TESTING
describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents
        setCurrentNOE={() => { }}
        setErrorAlert={() => { }}
      />
    );
  });

  test('ensure NumberOfEvents component contains element with role of textbox', () => {
    const textBox = NumberOfEventsComponent.queryByRole('textbox');
    expect(textBox).toBeInTheDocument();
    expect(textBox).toHaveClass('number-of-events-input');
  });

  test('ensure default value of input field is 32', () => {
    const textBox = NumberOfEventsComponent.queryByRole('textbox');
    expect(textBox).toHaveValue('32');
  });

  test('NumberOfEvents component textbox value changes with user input', async () => {
    const user = userEvent.setup();
    const textBox = NumberOfEventsComponent.queryByRole('textbox');
    await user.type(textBox, '{backspace}{backspace}10');
    expect(textBox).toHaveValue('10');
  });
});


