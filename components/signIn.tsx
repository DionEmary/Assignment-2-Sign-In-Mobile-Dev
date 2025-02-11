import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import credentials from '../credentials.json';
 
type SignInProps = { setIsSignedIn: (isSignedIn: boolean) => void };

const SignIn: React.FC<SignInProps> = ({setIsSignedIn}) => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string>(' ');

    const handleSignIn = () => {
        // Checks if the username and password are formatted correctly before checking credentials which were checked below setting the isValid variable.
        if(isValid) {
            // Finds the user object that matches the username entered.
            const user = credentials.users.find((user) => user.username === username);

            // Checks if the Username or Password is incorrect and returns appropriate error messages. otherwise, sets isSignedIn to true. 
            if(!user) {
                alert('User not found');
            } else if(user.password !== password) {
                alert('Incorrect password');
            } else {
                setIsSignedIn(true);
            }
        } else {
            // If trying to sign in with wrong format, alert the user to enter a valid username and password.
            alert('Please enter a valid username and password');
        }
    }

    // Input is just the Text Input Value So Username in this case
    const handleChangeUsername = (input: string) => {
        // Takes the inputed username and checks if its 5 characters or longer. Returning a error and setting isValid to false if not.
        if(input.length < 5) {
            setIsValid(false);
            setErrorMessage('Username must be at least 5 characters long');
        } else {
            setIsValid(true);
        }

        // Sets the Username to prevent it from resetting the input field every time the user types a character.
        setUsername(input);
    }

    // Input is just the Text Input Value So Password in this case
    const handleChangePassword = (input: string) => {
        // Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        // Checks if the Input matches the Regex Above</string>
        const result = passwordRegex.test(input);

        // If the password is valid, set isValid to true. Otherwise, set isValid to false and set an error message.
        if(result) {
            setIsValid(true);
        } else {
            setIsValid(false);
            setErrorMessage('Incorrect Password Format.');
        }

        // sets the password to prevent it from resetting the input field every time the user types a character.
        setPassword(input);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Sign In</Text>
            <TextInput style={styles.input} placeholder='Username' value={username} onChangeText={handleChangeUsername} />
            <TextInput style={styles.input} placeholder='Password' value={password} onChangeText={handleChangePassword} secureTextEntry={true} />
            <Button title='Sign In' onPress={handleSignIn} />
            {!isValid && <Text style={styles.error}>{errorMessage}</Text>}
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
  header: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
  },
  error: {
    color: 'red',
    margin: 5,
  }
  
});