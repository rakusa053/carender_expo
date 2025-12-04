import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from "react-native-gesture-handler";



export default function dayscrren() {
  const { id ,month} = useLocalSearchParams();
  const [name, setName] = useState<string>("");
  return (
    <>
    <View style={styles.days}>
       <Text style={[styles.monthtext,{marginTop:150},]}> {month}月{id}日</Text>
      
    
<TextInput 
style ={styles.inputtext}
value = {name}
onChangeText={setName}
placeholder="金額を入力してください"
></TextInput>

    </View>
      {/* <Stack.Screen 
        options={{
          headerTitle: `2025年: ${id}日`, 
        }} 
      /> */}



      <View style={styles.container}>
        <Text style={styles.text}> {id}日です</Text>
        <Text>{id}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  days:{
    flex:1,
    backgroundColor: '#ffffffff',
    justifyContent:'flex-start',
    alignItems:'center',

  },
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthtext: {
    color: '#000000ff',
    fontSize:50,
  },
    inputtext: {
    color: '#000000ff',
    fontSize:20,
  },
    text: {
    color: '#000000ff',
    fontSize:10,
  },
});