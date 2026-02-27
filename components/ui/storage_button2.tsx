//保存ボタン関係

import { Savevalue } from "@/stores/save-value";
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props ={
  id :string
  month:string
  year:string
  isNumber: boolean
}

export default function Storage_button2({id,month,year,isNumber}:Props){
  const addItem = Savevalue((s)=>s.addItem)


    return(
          isNumber ? (
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
