import { StyleSheet } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

type Props ={
    name:string;
    setName:(text:string) =>void;
}


export default function inputtext({name, setName }){
return(
    <TextInput
    style ={styles.input}
    value = {name}
    onChangeText={setName}
    placeholder="金額を入力してください"></TextInput>
)
}




const styles = StyleSheet.create({
  input:{
     color: '#000000ff',
    fontSize:20,
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    borderRadius: 6,
  },
});