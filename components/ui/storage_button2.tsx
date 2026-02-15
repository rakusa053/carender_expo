//保存ボタン関係

import { InputvalueStore } from "@/stores/inputvalue";
import { Savevalue } from "@/stores/savevalue";
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props ={
  id :string
  month:string
  year:string
}

export default function Storage_button2({id,month,year}:Props){
const isnmuber = InputvalueStore ((s)=>s.isNumber)
const addItem = Savevalue((s)=>s.addItem)


    return(
          isnmuber ? (
                <Pressable style={styles.button} onPress={()=>addItem(id,month,year)}>
                <Text style={{fontSize:20}}>保存</Text>
                </Pressable>
            ):(
                <View></View>
    )
)
};

const styles=StyleSheet.create({
  button:{
    width: "100%",
    borderRadius: 4,
    padding: 10,
    alignItems: "center",
    backgroundColor: '#ffffffff',
  },
})
