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
        <View>
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
    button:{
        width:25,
        height:25,
        borderWidth: 2,      // ← 線の太さ
        borderColor: "black",//
        borderRadius: 3,
    },
    text:{
        color:"white",
        fontSize:20,
        justifyContent:"center",
        alignItems:'center',
    },
    plusbutton:{
        width:20,
        height:20.,
        borderRadius:24,
        backgroundColor:"#ff0000ff"
    },
    minusbutton:{
        width:20,
        height:20.,
        borderRadius:24,
        backgroundColor:"#0d00ffff"
    }
})