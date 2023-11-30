const {TouchableOpacity, Text} = require('react-native');

const CustomButton = ({text, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#F9C6AD',
        height: 50,
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{textAlign: 'center', color: 'black', fontFamily: 'DM Sans'}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
