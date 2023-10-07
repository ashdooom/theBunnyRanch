import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { Text } from 'react-native';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    if (name === '' || email === '' || message === '') {
      Alert.alert('Error 😔', 'Please fill in all fields');
      return;
    }

    if (!email.includes('@') || email.length < 5) {
      Alert.alert('Error 😔', 'Please enter a valid email address');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');

    Alert.alert('Success 😊', 'Thanks for the message!');
  };


  return (

    <View
      style={styles.container}
    >
      
      <Image source={require('../assets/images/contactBun.png')} />
      <TextInput
        style={styles.text}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.text}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.text}
        placeholder="Message"
        value={message}
        onChangeText={text => setMessage(text)}
      />
      <Button color='#ff69b4' size='large' title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fce4e4'

  },

  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  image: {
    height: 300,
    width: 300
  },
  button: {
    marginTop: 30
  }
});


export default ContactForm;