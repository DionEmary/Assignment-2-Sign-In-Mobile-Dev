import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

type SignInProps = { setIsSignedIn: (isSignedIn: boolean) => void };

const SignIn: React.FC<SignInProps> = ({setIsSignedIn}) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSignIn = {

    }

    return (
        <View>
            <Text>Sign In</Text>
            <TextInput placeholder='Username' value={username} onChangeText={setUsername} />
            <TextInput placeholder='Password' value={password} onChangeText={setPassword} />
        </View>
    );
}

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});