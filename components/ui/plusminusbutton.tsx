import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PlusMinusButton(){
const [plusbutton,setplusbutton]= useState<Boolean>(false);
const [minussbutton,setminussbutton]= useState<Boolean>(false);

const press_plus_button = ()=>{
    setplusbutton(true);
}

const press_minus_button = ()=>{
    setminussbutton(true);
}
    return(
        <View style={styles.container}>
        <Pressable style = {styles.button} onPress={press_plus_button}>
            <Text style = {styles.text}>+</Text>
        </Pressable>
        <Pressable style = {styles.button} onPress={press_minus_button}>
            <Text style = {styles.text}>-</Text>
        </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row"
    },
    button:{
        width:50,
        height:50,
        borderWidth: 2,      // ← 線の太さ
        borderColor: "black",//
        borderRadius: 3,
        justifyContent:"center",
        alignItems:'center',
    },
    text:{
        color:"white",
        fontSize:35,
    },
    plusbutton:{
        width:50,
        height:50,
        borderRadius:24,
        backgroundColor:"#ff0000ff"
    },
    minusbutton:{
        width:50,
        height:50,
        borderRadius:24,
        backgroundColor:"#0d00ffff"
    }
})
