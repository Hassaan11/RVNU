import {View, StyleSheet, Text, Image} from 'react-native';
import Box from '../../components/box/box';
import {useState} from 'react';
import PaymentMethod from '../../components/payment-method/payment-method';
import CustomButton from '../../components/button/button';
import {ScrollView} from 'react-native-gesture-handler';

const Payment = ({navigation}) => {
  const [checked, setChecked] = useState('');

  return (    
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{height:250, paddingHorizontal: 10,paddingBottom:50}}>
          <View style={styles.view1}>
            <View style={styles.view2}>
              <Image
                source={require('../../assets/images/star.jpeg')}
                style={{width: 40, height: 40}}
              />
              <Text style={{color: 'black', fontFamily: 'DM Sans'}}>
                Highly Rated
              </Text>
            </View>
            <View style={styles.view3}>
              <Image
                source={require('../../assets/images/menu.png')}
                style={{width: 30, height: 30}}
              />
            </View>
          </View>
          <View style={{alignItems: 'center',paddingVertical:20,}}>
            <Image
              source={require('../../assets/images/shoe.png')}
              style={{width: '80%', height: '100%'}}
              resizeMode='cover'
            />
          </View>
        </View>
        <View style={styles.container2}>
          <View>
            <Text style={styles.title}>Summary</Text>
            <Box />
          </View>
          <View>
            <Text style={styles.title}>Select payment method</Text>
            <PaymentMethod
              title="Credit or Debit Card"
              checked={checked}
              setChecked={() => setChecked('Credit or Debit Card')}
            />
            <PaymentMethod
              title="Klama"
              checked={checked}
              setChecked={() => setChecked('Klama')}
            />
            <PaymentMethod
              title="Paypal"
              checked={checked}
              setChecked={() => setChecked('Paypal')}
            />
            <CustomButton
              text="Pay by bank R V N U"
              onPress={() => navigation.navigate('ProductIntroduced')}
            />
          </View>
        </View>
        </ScrollView>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    paddingTop: 20,
    width: '100%',
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  view3: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  container2: {
    flex: 1,
    backgroundColor: 'black',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: 20,
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'BR shape',
    marginBottom: 20,
  },
});

export default Payment;
