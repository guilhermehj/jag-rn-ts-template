import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


import { RootStackParamsList } from '../../routes';


import styles from './styles';

type Props = NativeStackScreenProps<RootStackParamsList, 'Profile'>;

const ProfileScreen = (props: Props) => {
  return (
    <View style={styles.screenContainer}>
      <Text>Profile!</Text>
    </View>
  );
};

export default ProfileScreen;
