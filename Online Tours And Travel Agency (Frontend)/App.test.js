import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';

import App, { HomeScreen, AppStack } from './App';

describe('HomeScreen', () => {
  it('navigates on button press', () => {
    const push = jest.fn();
    const { getByText } = render(<HomeScreen navigation={{ push }} />);
    fireEvent.press(getByText('Go to Screen 2'));
    expect(push).toHaveBeenCalledWith('SecondScreen');
  });
});
