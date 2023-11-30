import React, {useState} from 'react';
import Header from '../../components/header/header';
import CustomInput from '../../components/input/input';
import {View, StyleSheet, Text} from 'react-native';
import CustomButton from '../../components/button/button';

const Signup = ({navigation}) => {
  const [text, onChangeText] = useState('');
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.5}}>
        <Header title="Choose your username and make it memorable." />
      </View>
      <View style={styles.view}>
        <View>
          <CustomInput
            text={text}
            setText={onChangeText}
            placeholder="Enter username"
          />
          <CustomButton
            text="Continue"
            onPress={() => {
              navigation.navigate('Payment');
            }}
          />
        </View>
        <Text style={styles.text}>Clain your username.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 20,
    paddingHorizontal:20,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 50,
    fontFamily: 'BR shape',
    color: 'white',
  },
});

export default Signup;
