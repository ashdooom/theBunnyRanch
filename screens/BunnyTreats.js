import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native-elements';
import bunDrops from '../assets/images/bunDrops.webp';
import bunSticks from '../assets/images/bunSticks.webp';
import driedStrawberries from '../assets/images/driedStrawberries.jpg';
import biscuitBun from '../assets/images/biscuitBun.jpg';
import bananaBun from '../assets/images/bananaBun.jpg';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import { addTreat, removeTreat } from '../cartSlices/treatSlice';

const BunnyTreats = () => {
  const dispatch = useDispatch();
  const [treats, setTreats] = useState([
    {
      id: 0,
      treatName: 'Freeze-Dried Strawberries',
      treatPrice: '$5.99',
      image: driedStrawberries,
      inCart: false
    },
    {
      id: 1,
      treatName: 'Drops',
      treatPrice: '$6.99',
      image: bunDrops,
      inCart: false
    },
    {
      id: 2,
      treatName: 'Crunch Sticks',
      treatPrice: '$4.99',
      image: bunSticks,
      inCart: false
    },
    {
      id: 3,
      treatName: 'Freeze-Dried Bananas',
      treatPrice: '$5.99',
      image: bananaBun,
      inCart: false
    },
    {
      id: 4,
      treatName: 'Biscuits',
      treatPrice: '$4.99',
      image: biscuitBun,
      inCart: false
    }
  ]);

  const handleAddTreatToCart = (treat) => {
    dispatch(addTreat(treat));
    Alert.alert('Treat added to cart!');
    setTreats(treats.map(t => (t.id === treat.id ? { ...t, inCart: true } : t)));
  };

  const handleRemoveTreatFromCart = (treat) => {
    dispatch(removeTreat(treat.id));
    Alert.alert('Treat removed from cart!');
    setTreats(treats.map(t => (t.id === treat.id ? { ...t, inCart: false } : t)));
  };

  return (
    <View style={styles.view}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>Healthy and Delicious Treats for your Bun!</Text>
        {treats.map(item => (
          <Card containerStyle={styles.card} key={item.id}>
            <Card.Title style={styles.cardTitle}>{item.treatName}</Card.Title>
            <Image style={styles.image} source={item.image} />
            <Card.Divider />
            <Text style={styles.text}>{item.treatPrice}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => item.inCart ? handleRemoveTreatFromCart(item) : handleAddTreatToCart(item)}
            >
              <Text style={styles.text}>{item.inCart ? 'Remove from Cart' : 'Add to Cart'}</Text>
            </TouchableOpacity>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    justifyContent: 'center'
  },
  container: {
    backgroundColor: '#fce4e4',
    justifyContent: 'center'
  },
  image: {
    height: 250,
    width: 250,
    alignSelf: 'center',
    marginLeft: 40
  },
  button: {
    backgroundColor: '#fce4e4',
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  card: {
    marginBottom: 20,
    padding: 35,
    paddingBottom: 30
  },
  cardTitle: {
    fontSize: 30
  }
});

export default BunnyTreats;
