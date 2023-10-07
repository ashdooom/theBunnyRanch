import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBun, removeBun } from '../cartSlices/bunSlice';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Image, Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import bunGif from '../assets/images/bunGif.gif'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import treatSlice from '../cartSlices/treatSlice';
import { addTreat, removeTreat } from '../cartSlices/treatSlice';

const CartScreen = () => {
  const dispatch = useDispatch();
  const buns = useSelector((state) => state.bun.buns);
  const treats = useSelector((state) => state.treat.treats);

  const handleRemoveBun = (id) => {
    dispatch(removeBun(id));
  }

  const handleRemoveTreat = (id) => {
    dispatch(removeTreat(id));
  }

  return (
    <ScrollView style={styles.scrollView}>
      {buns.length > 0 && (
        buns.map(bun => (
          <View style={styles.container}>
            <Text style={styles.bunName}>{bun.bunName}</Text>
            <Image style={styles.bunImage} source={bun.image} />
            <Text style={styles.bunDetails}>{`Adoption Fee: $${bun.bunPrice}`}</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleRemoveBun(bun.id)}>
              <FontAwesomeIcon
                icon={faTrash}
                style={styles.trashIcon}
                size={30}
              />
            </TouchableOpacity>
          </View>
        ))
      )}
      {treats.length > 0 && (
        treats.map(treat => (
          <View style={styles.container}>
            <Text style={styles.bunName}>{treat.treatName}</Text>
            <Image style={styles.bunImage} source={treat.image} />
            <Text style={styles.bunDetails}>{treat.treatPrice}</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleRemoveTreat(treat.id)}>
              <FontAwesomeIcon
                icon={faTrash}
                style={styles.trashIcon}
                size={30}
              />
            </TouchableOpacity>
          </View>
        ))
      )}
      {(buns.length === 0 && treats.length === 0) && (
        <View style={styles.noBunsContainer}>
          <Text style={styles.noBunsText}>You have no buns or treats in your cart yet</Text>
          <Image source={bunGif} style={styles.gif} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 20,
    paddingBottom: 40
  },
  noBunsText: {
    textAlign: 'center',
    fontSize: 25,
    margin: 30
  },
  button: {
    color: '#fce4e4',
    height: 30,
    width: 50
  },
  bunImage: {
    height: 300,
    width: 300,
    resizeMode: 'cover',
    marginTop: 30,
  },
  bunDetails: {
    textAlign: 'center',
    fontSize: 30,
    margin: 10
  },
  bunName: {
    fontSize: 40,
    marginTop: 10
  },
  gif: {
    height: 300,
    width: 300,
    margin: 65
  },
  trashIcon: {
    color: '#000',
    margin: 10
  }
})

export default CartScreen;
