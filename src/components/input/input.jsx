const { TextInput } = require("react-native")

const CustomInput = ({text,setText,placeholder})=>{
  return <TextInput
  style={{
    height: 50,
    borderWidth: 1,
    marginBottom:20,
    padding: 10,
    borderRadius:20,
    color:'#D3D3D3',
    backgroundColor:'gray',
    fontFamily:'DM Sans',
  }}
  placeholderTextColor={'#D3D3D3'}
  onChangeText={setText}
  value={text}
  placeholder={placeholder}
/>
}
export default CustomInput