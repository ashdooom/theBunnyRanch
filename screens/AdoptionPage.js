import React, { useRef, useEffect, useState } from 'react';
import { View, Text, Pressable, Animated, Image, ScrollView, StyleSheet, TurboModuleRegistry, Alert } from 'react-native';
import { Card } from 'react-native-elements';
import brownieBun from '../assets/images/brownieBun.jpg';
import bruiserBun from '../assets/images/bruiserBun.jpeg';
import lanaBun from '../assets/images/lanaBun.jpg';
import leonBun from '../assets/images/leonBun.jpg';
import pairedBuns from '../assets/images/pairedBuns.png';
import pepperBun from '../assets/images/pepperBun.jpg';
import peterBun from '../assets/images/peterBun.jpg';
import { useDispatch } from 'react-redux';
import { addBun, removeBun } from '../cartSlices/bunSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';


const AdoptionPage = () => {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const dispatch = useDispatch();

    const buns =
        [
            {
                id: 0,
                bunName: 'Leon',
                bunPrice: 50,
                quantity: 1,
                image: leonBun

            },
            {
                id: 1,
                bunName: 'Bruiser',
                bunPrice: 50,
                quantity: 1,
                image: bruiserBun
            },
            {
                id: 2,
                bunName: 'Lana',
                bunPrice: 50,
                quantity: 1,
                image: lanaBun
            },
            {
                id: 3,
                bunName: 'Mona',
                bunPrice: 50,
                quantity: 1,
                image: brownieBun
            },
            {
                id: 4,
                bunName: 'Pepper',
                bunPrice: 50,
                quantity: 1,
                image: pepperBun
            },
            {
                id: 5,
                bunName: 'Peter',
                bunPrice: 50,
                quantity: 1,
                image: peterBun
            },
            {
                id: 6,
                bunName: 'Ashley and Ryan',
                bunPrice: 85,
                quantity: 1,
                image: pairedBuns
            }

        ];


    const [addedToCart, setAddedToCart] = useState(new Array(buns.length).fill(false));

    const handleAddBunToCart = (bun, index) => {
        dispatch(addBun(bun));
        Alert.alert(`${bun.bunName} has been added to the cart!`);
        const updatedAddedToCart = [...addedToCart];
        updatedAddedToCart[index] = true;
        setAddedToCart(updatedAddedToCart);
    }

    const handleRemoveBunFromCart = (bun, index) => {
        dispatch(removeBun(bun.id));
        Alert.alert(`${bun.bunName} has been removed from the cart!`);
        const updatedAddedToCart = [...addedToCart];
        updatedAddedToCart[index] = false;
        setAddedToCart(updatedAddedToCart);
    }



    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 10000,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim]);




    return (

        <ScrollView style={styles.scrollView}>
            <Text style={styles.text}>Buns Available for Adoption</Text>
            {buns.map((item, index) => (
                <View style={styles.background}>
                    <Card style={styles.card} key={item.id}>
                        <Card.Title style={styles.cardTitle}>{item.bunName}</Card.Title>
                        <Image style={styles.image} source={item.image} />
                        <Card.Divider />
                        <Text style={styles.text}>Adoption Fee: ${item.bunPrice}</Text>

                        {!addedToCart[index] ? (
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => handleAddBunToCart(item, index)}
                            >
                                <Text style={styles.text}>Add Bun to Cart</Text>
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => handleRemoveBunFromCart(item, index)}
                            >
                                <Text style={styles.text}>Remove Bun from Cart</Text>
                            </TouchableOpacity>
                        )}
                    </Card>
                </View>
            ))}



        </ScrollView >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fce4e4',
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    },
    image: {
        height: 250,
        width: 250,
        marginLeft: 35
    },
    button: {
        backgroundColor: '#fce4e4'
    },
    cardTitle: {
        fontSize: 50
    },
    card: {
        backgroundColor: '#fff'
    }
});


export default AdoptionPage;