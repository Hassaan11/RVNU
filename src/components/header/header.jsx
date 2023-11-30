import React from 'react';
import {Image, View} from 'react-native';

const Header = ({title}) => {
  return (
    <View>
      <Image source={{uri: ''}} />
      <Text>{title}</Text>
    </View>
  );
};

export default Header;
