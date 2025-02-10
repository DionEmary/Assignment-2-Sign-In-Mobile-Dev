import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeMessage from '../components/welcomeMessage';
import SignIn from '../components/signIn';
import { useState } from 'react';

export default function App() {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            {isSignedIn ? <WelcomeMessage /> : <SignIn setIsSignedIn={setIsSignedIn} />}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});