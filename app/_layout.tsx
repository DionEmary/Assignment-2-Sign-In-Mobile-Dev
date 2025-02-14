import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import SignIn from '../components/signIn';
import WelcomeMessage from '../components/welcomeMessage';

export default function Layout() {
const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  // Show Sign-In screen first
if (!isSignedIn) {
    return (
    <View style={styles.container}>
        <SignIn setIsSignedIn={setIsSignedIn} />
    </View>
    );
}

return (
    <>
    <Tabs
        screenOptions={{
        tabBarActiveTintColor: '#0099cc',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: { backgroundColor: '#fff', paddingBottom: 5 },
        }}
    >
    <Tabs.Screen name="index" options={{ title: 'Home'}} />
    <Tabs.Screen name="calgary" options={{ title: 'Calgary' }} />
    <Tabs.Screen name="edmonton" options={{ title: 'Edmonton' }} />
    </Tabs>
    </>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
});
