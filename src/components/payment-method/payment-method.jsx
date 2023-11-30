import {View, Text, Platform} from 'react-native';
import {RadioButton} from 'react-native-paper';

const PaymentMethod = ({title, checked, setChecked}) => {
  return (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
      <View
        style={Platform.OS ==='ios' ? {
          borderColor: 'lightgray',
          borderWidth: 1,
          width: 20,
          height: 20,
          borderRadius: 10,
          marginRight: 10,
        }:{marginRight: 10,}}>
        <RadioButton
          value={title}
          status={checked === title ? 'checked' : 'unchecked'}
          onPress={setChecked}
        />
      </View>
      <Text style={{fontFamily: 'DM Sans', color: 'gray'}}>{title}</Text>
    </View>
  );
};

export default PaymentMethod;
