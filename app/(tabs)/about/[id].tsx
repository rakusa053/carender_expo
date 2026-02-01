import Storage_day_value from "@/components/ui/storage_day_value";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';


export default function dayscrren() {
  const prams = useLocalSearchParams();

  const id = typeof prams.id === "string" ? prams.id : undefined;
  const month = typeof prams.id === "string" ? prams.id : undefined;
  const year = typeof prams.id ==="string"? prams.id:undefined;
  if (!id || !month||!year) {// →id がstring[]になるのを防ぐため
  return <Text>パラメータが不正です</Text>;
}
  const [name, setName] = useState<string>("");
  const [total,settotal] = useState(0);
    const onPressButton = () => {
    console.log(total);
  };
  return (
    
    <>
    <View style={styles.days}>
       <Text style={[styles.monthtext,{marginTop:150},]}> {month}月{id}日</Text>
       <Text></Text>
    </View>



      {/* <Stack.Screen 
        options={{
          headerTitle: `2025年: ${id}日`, 
        }} 
      /> */}



<View style={styles.percent}>
  <View style = {styles.percentbox}>
   <Text style = {styles.percenttext}>今月の収支</Text>
  </View>
  
  <View style = {styles.percentbox}>
   <Text style = {styles.percenttext}>前日比</Text>
  </View>
</View>
   <Button title="押してね" onPress={onPressButton} />
      <View style={styles.container}>
<Storage_day_value id ={id} month ={month} year ={year} totalchange={settotal}/>
{/* <TextInput 
style ={styles.inputtext}
value = {name}
onChangeText={setName}
placeholder="金額を入力してください"
></TextInput> */}

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  days:{
    flex:0.3,
    backgroundColor: '#5c70efff',
    justifyContent:'flex-start',
    alignItems:'center',
  },
  percent:{
    flex:0.4,
    backgroundColor: '#315071ff',
    flexDirection: 'row',
    justifyContent: 'center',// ← 横方向の真ん中
    
  },
    percentbox:{
    flex:0.5,
    backgroundColor: '#315071ff',
    flexDirection: 'row',
    justifyContent: 'center',// ← 横方向の真ん中
    
  },
    percenttext:{
    color: '#000000ff',
    fontSize:30,
  },
  container: {
    flex: 0.3,
    backgroundColor: '#555b67ff',
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
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    borderRadius: 6,
  },
    text: {
    color: '#000000ff',
    fontSize:10,
  },
});