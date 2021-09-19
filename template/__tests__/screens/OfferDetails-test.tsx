import { act, cleanup, render } from '@testing-library/react-native';

import { NavigationContainer } from '@react-navigation/native';

import RootStack from '../../src/routes';

const navigationInitialState = {
  stale: false,
  type: 'stack',
  key: 'stack--ooLds0_R_0qhG7XOxgU0',
  routeNames: ['Home', 'Profile'],
  routes: [
    {
      key: 'Profile-4YcJovKIo8BwqWtI83B7H',
      name: 'Profile',
    },
  ],
  index: 1,
};

describe('Offer Details Screen', () => {
  beforeEach(cleanup);
  it('should render all components', async () => {
    const { getByText } = render(
        <NavigationContainer initialState={navigationInitialState}>
          <RootStack />
        </NavigationContainer>
    );

    await act(() => new Promise(resolve => setTimeout(resolve, 500)));

    getByText('Profile!');
  });
});
