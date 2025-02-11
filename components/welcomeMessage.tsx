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
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    alignContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
});