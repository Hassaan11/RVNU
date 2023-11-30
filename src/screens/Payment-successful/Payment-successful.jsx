import Header from '../../components/header/header';

const {View, StyleSheet, Text,Image} = require('react-native');

const PaymentSuccessful = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.5}}>
        <Header title="Payment Successful" />
      </View>
      <View style={styles.view}>
        <View>
          <View style={styles.row}>
            <Image source={require('../../assets/images/tick.png')} style={{width:20,height:20,marginRight:10}}/>
            <Text style={styles.text}>
              Your username <Text style={{color:'#F9C6AD'}}>jamesfrancis</Text> is now active
            </Text>
          </View>
          <View style={styles.row}>
            <Image source={require('../../assets/images/tick.png')} style={{width:20,height:20,marginRight:10}}/>
            <Text style={styles.text}>
              Your username will be active for 14 days.{"\n"} so get sharing!
            </Text>
          </View>
        </View>
        <Text style={styles.text1}>Pay, {"\n"}share, {"\n"}earn.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 40,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  row:{
    flexDirection:'row',
    marginBottom:20,
  },
  text: {
    color: 'lightgray',
    fontFamily: 'DM Sans',
  },
  text1: {
    fontSize: 50,
    fontFamily: 'BR shape',
    color: 'white',
  },
});

export default PaymentSuccessful;
