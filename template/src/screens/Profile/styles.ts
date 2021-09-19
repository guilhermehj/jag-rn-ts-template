import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  button: {
    marginHorizontal: 16,
    marginVertical: 8,
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#9400FF',
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },
});

export default styles;
