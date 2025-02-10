import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import credentials from '../credentials.json';
 
type SignInProps = { setIsSignedIn: (isSignedIn: boolean) => void };

const SignIn: React.FC<SignInProps> = ({setIsSignedIn}) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSignIn = () => {
        const user = credentials.users.find((user) => user.username === username && user.password === password);
        if (!user) {
            alert('Invalid username or password');
        } else {
            setIsSignedIn(true);
        }
    }

    const handleChangeUsername = () => {

        
        setUsername(username);
    }

    const handleChangePassword = () => {


        setPassword(password);
    }

    return (
        <View style={styles.container}>
            <Text>Sign In</Text>
            <TextInput placeholder='Username' value={username} onChangeText={setUsername} />
            <TextInput placeholder='Password' value={password} onChangeText={handleChangePassword} secureTextEntry={true} />
            <Button title='Sign In' onPress={handleSignIn} />
            {!isValid && <Text>{errorMessage}</Text>}
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
  button: {
    padding: 10,
    margin: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  }
});