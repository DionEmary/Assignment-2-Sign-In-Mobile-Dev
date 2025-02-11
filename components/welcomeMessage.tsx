import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 40,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0099cc',
    marginBottom: 20,
  },
});