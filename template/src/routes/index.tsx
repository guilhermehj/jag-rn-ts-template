import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';

export type RootStackParamsList = {
  Home: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={HomeScreen}
      />
      <Stack.Screen
        name={'Profile'}
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
