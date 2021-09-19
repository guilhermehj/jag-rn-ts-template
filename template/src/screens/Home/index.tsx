import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamsList } from '../../routes';

import styles from './styles';



type Props = NativeStackScreenProps<RootStackParamsList, 'Home'>;

const HomeScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text>Home!</Text>
    </View>
  );
};

export default HomeScreen;
