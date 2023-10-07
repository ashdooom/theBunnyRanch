import { StatusBar } from 'expo-status-bar';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { Animated } from 'react-native';
import { Image } from 'react-native';
import { useEffect } from 'react';
import { useRef } from 'react';



const HomeScreen = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);




  return (


    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim
      }}>

      <View style={styles.view}>

        <ScrollView style={styles.scrollview}>

          <Text style={styles.text}>
            welcome to 
            {'\n'}🐇 theBunnyRanch 🐇
          </Text>

          <Image style={styles.image} source={require('../assets/images/homeBun.jpg')} />

          <Text style={styles.titleText}>
            You can't buy love, but you can adopt it.
          </Text>

        </ScrollView>

      </View>
      
    </Animated.View>
  )
};

const styles = StyleSheet.create({

  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    paddingTop: 50,
    color: '#000'
  },
  image: {
    height: 300,
    width: 300,
    marginLeft: 40
  },
  view: {
    backgroundColor: '#fce4e4'
  },
  scrollview: {
    color: 'hotpink'
  },
  smalltext: {
    flex: 3,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    fontSize: 25,
    paddingBottom: 200,
    textAlign: 'center'
    
  },
  titleText: {
    fontSize: 30,
    marginTop: 20,
    margin: 30,
    textAlign: 'center',
    marginBottom: 50
  }

});




export default HomeScreen;