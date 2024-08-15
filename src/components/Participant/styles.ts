import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    flexDirection: 'row',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 16,
  },
  buttonContainer: {
    width: 56,
    height: 56,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#E23C44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
})
