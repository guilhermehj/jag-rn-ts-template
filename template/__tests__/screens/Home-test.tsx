import { cleanup, render } from '@testing-library/react-native';

import { NavigationContainer } from '@react-navigation/native';

import RootStack from '../../src/routes';

describe('Home screen', () => {
  afterEach(cleanup);

  it('should render all components on success', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    );
    getByText('Home!');
  });
});
