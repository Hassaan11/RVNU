import React from 'react';
import {SafeAreaView, Platform, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Signup from './src/screens/Signup/Signup';
import Payment from './src/screens/Payment/Payment';
import {PaperProvider} from 'react-native-paper';
import ProductIntroduced from './src/screens/Product-introduced/Product-introduced';
import PaymentSuccessful from './src/screens/Payment-successful/Payment-successful';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' && 20,
        backgroundColor: 'black',
      }}>
      <StatusBar barStyle={'light-content'} />
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Payment" component={Payment} />
            <Stack.Screen name="ProductIntroduced" component={ProductIntroduced} />
            <Stack.Screen name="PaymentSuccessful" component={PaymentSuccessful} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaView>
  );
};

export default App;
