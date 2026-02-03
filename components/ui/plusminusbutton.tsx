import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PlusButton(){
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
            <Text style = {styles.plustext}>+</Text>
        </Pressable>
        <Pressable style = {styles.button} onPress={press_minus_button}>
            <Text style = {styles.minustext}>+</Text>
        </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        width:20,
        height:20.,
        borderRadius:24,
    },
    plusbutton:{
        
    }
})