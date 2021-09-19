import { NavigationContainer } from '@react-navigation/native';

import RootStack from './routes';


const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default App;
