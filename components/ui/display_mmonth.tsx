// uiを表示画面から持ってきて、それをこのスクリプトで表示する。
//　今月の収支という名前の表示と円という名前の表示
import React from "react";
import { StyleSheet, Text, View } from 'react-native';

type  Props = {
    total:number
}

export default function Display_month ({total}:Props){

return(
<View style={styles.percentbox}>
        <Text style = {styles.percenttext} >今月の収支</Text>
        <Text style = {styles.total}>{total}円</Text>
</View>

)
}

const styles = StyleSheet.create({
    percentbox:{ flex:0.5,
    backgroundColor: '#315071ff',
    flexDirection: 'column',
    justifyContent: 'flex-start',// ← 横方向の真ん中
    alignItems:'center'
    },
    percenttext:{
    color: '#000000ff',
    fontSize:30,
    },
    total:{
    color: '#000000ff',
    fontSize:30,
    }
})