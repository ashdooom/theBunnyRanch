import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import BunnyTreats from './screens/BunnyTreats';
import AdoptionPage from './screens/AdoptionPage';
import 'react-native-gesture-handler';
import ContactForm from './screens/ContactUs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import store from './store';
import { Provider } from 'react-redux';
import { useState } from 'react';
import CartScreen from './screens/Cart';


const MyTheme = {
  dark: false,
  colors: {
    primary: '#000',
    background: '#fce4e4',
    card: '#fce4e4',
    text: '#000',
    border: '#fce4e4',
    notification: '#000',
  },
};

const Drawer = createDrawerNavigator();

function App() {


  return (

    <Provider store={store}>

     <NavigationContainer theme={MyTheme}>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={HomeScreen} />
          <Drawer.Screen name='Adoption Page' component={AdoptionPage} />
          <Drawer.Screen name='Bunny Treats' component={BunnyTreats} />
          <Drawer.Screen name='Contact Us' component={ContactForm} />
          <Drawer.Screen name="Cart" component={CartScreen}>
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>



    </Provider>


  );

}


export default App;



