import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PauseAndResumeButton from '../PauseAndResumeButton';
import { PAUSE, RESUME } from '../../../languages/en/ui';
import * as actions from '../../../actions/userManagement';
import { userProfileMock } from '../../../__tests__/mockStates';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import { renderWithProvider } from '../../../__tests__/utils';
jest.mock('react-toastify');

describe('PauseAndResumeButton', () => {
  beforeEach(() => {
    renderWithProvider(<PauseAndResumeButton isBigBtn userProfile={userProfileMock} />);
  });
  describe('Structure', () => {
    it('should render a button', () => {
      const pauseButton = screen.getByRole('button', { name: PAUSE });
      expect(pauseButton).toBeInTheDocument();
    });
  });

  describe('Behavior', () => {
    it('should render modal after the user clicks the pause button', async () => {
      userEvent.click(screen.getByRole('button', { name: PAUSE }));
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('should change pause button to resume button after user clicks on pause button', async() => {
      //Select one Pause button
      const pausebutton = screen.getAllByRole('button', { name: PAUSE })[0]

      //Click on the selected Pause button
      await fireEvent.click(pausebutton);

      //Select a future date and click Pause the User button.
      const date = screen.getByTestId('date-input');
      await userEvent.type(date, '2100-08-30', { allAtOnce: false });
      await fireEvent.click(screen.getByRole('button', { name: /pause the user/i }));

      await expect(pausebutton).toHaveTextContent(RESUME);
    });


    it('should change resume button to pause button after user clicks on resume button', async() => {
      ////Select one Pause button
      const button = screen.getAllByRole('button', { name: PAUSE })[0]

      //Click on the selected Pause button
      await fireEvent.click(button);

      //Select a future date and click Pause the User button.
      const date = screen.getByTestId('date-input');
      await userEvent.type(date, '2100-08-30', { allAtOnce: false });
      await fireEvent.click(screen.getByRole('button', { name: /pause the user/i }));

      //Click on Resume button
      await fireEvent.click(button);
      await expect(button).toHaveTextContent(PAUSE);

    });

  });

});