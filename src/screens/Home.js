import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Alert} from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase.config';

const HomeScreen = ({ navigation }) => {

  const userEmail = auth.currentUser.email;

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // User has been logged out
        Alert.alert('User logged out Successfully!');
        navigation.navigate('SignInHome'); // Navigate to the login screen or any other screen as needed
      })
      .catch((error) => {
        // Handle errors, e.g., display an error message
        console.error('Logout error:', error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>

          <Image source={require('../assets/images/user-icon.jpg')} style={styles.profileImage} />

        <Text style={styles.welcomeText}>Welcome, {userEmail}</Text>
      </View>
      <Button width={100} title="Sign Out" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 18,
  },
});

export default HomeScreen;
