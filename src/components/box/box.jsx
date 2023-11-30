const {View, StyleSheet, Text, Image} = require('react-native');

const Box = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Nike Vaporfly 3</Text>
        <Text style={styles.text}>£234.95</Text>
      </View>
      <Text style={styles.text2}>Men's Road Racing</Text>
      <Text style={styles.text2}>
        Size 8.5{' '}
        <Image
          source={require('../../assets/images/arrow.png')}
          style={{width: 20, height: 20}}
        />
      </Text>
      <Text style={styles.text2}>
        Quantity 1{' '}
        <Image
          source={require('../../assets/images/arrow.png')}
          style={{width: 20, height: 20}}
        />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    width: '100%',
    marginBottom:10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'DM Sans',
    paddingBottom: 5,
    color:'black'
  },
  text2: {
    fontFamily: 'DM Sans',
    paddingBottom: 5,
    color: 'gray',
    flexDirection: 'row',
  },
});

export default Box;
