import { useState } from 'react';
import CustomButton from '../../components/button/button';
import Header from '../../components/header/header';
import CustomInput from '../../components/input/input';

const {View, StyleSheet, Text} = require('react-native');

const ProductIntroduced = ({navigation}) => {
  const [text, onChangeText] = useState('');
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.5}}>
        <Header title="Who introduced this product or retailer to you?" />
      </View>
      <View style={styles.view}>
        <View>
          <CustomInput
            text={text}
            setText={onChangeText}
            placeholder="Tag a user"
          />
          <CustomButton
            text="Continue"
            onPress={() => {
              navigation.navigate('PaymentSuccessful');
            }}
          />
        <Text style={styles.text}>Skip this step</Text>
        </View>
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
  text:{
    color:'lightgray',
    textAlign:'right',
    fontFamily: 'DM Sans',
  }
});

export default ProductIntroduced;
