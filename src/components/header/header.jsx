import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{width: 30, height: 30}}
      />
      {title === 'Payment Successful' ? (
        <Text style={styles.title}>{title} {"\n"}
        <Text style={{color:'#F9C6AD'}}> chris</Text> earnt £15.00
        </Text>
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60,
  },
  title: {
    marginTop: 30,
    fontFamily: 'BR shape',
    textAlign: 'center',
    fontSize: 18,
    width: '80%',
    color:'black'
    // DM Sans
  },
});

export default Header;
