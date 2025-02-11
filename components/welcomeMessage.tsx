import { View, Text, StyleSheet } from 'react-native';
import CityTabs from './cityTab';

export default function WelcomeMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to My New App</Text>
      <CityTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'blue',
  },
});