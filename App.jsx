import React from 'react';
import {
  SafeAreaView,
  Platform,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Signup from './src/screens/Signup/Signup';

const Stack = createStackNavigator();


const App = () => {
  return (
    <SafeAreaView
      style={{flex: 1, paddingTop: Platform.OS === 'android' && 30}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Signup" component={Signup} />
          {/* <Stack.Screen name="Painting" component={Painting} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
