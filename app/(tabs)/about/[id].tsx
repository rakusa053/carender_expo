import Display_month from "@/components/ui/display_mmonth";
import PlusMinusButton from "@/components/ui/plusminusbutton";
import Storage_button2 from "@/components/ui/storage_button2";
import Storage_day_value2 from "@/components/ui/storage_input_text";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
export default function dayscrren() {
  const prams = useLocalSearchParams();

  const id = typeof prams.id === "string" ? prams.id : undefined;
  const month = typeof prams.month === "string" ? prams.month : undefined;
  const year = typeof prams.year ==="string"? prams.year:undefined;
  if (!id || !month||!year) {// →id がstring[]になるのを防ぐため
  return <Text>パラメータが不正です</Text>;
}
  const [name, setName] = useState<string>("");
  const [total,settotal] = useState(0);
  const [db, setdb] = useState<any>(null);
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
  <Display_month total={total}/>
  {/* <View style = {styles.percentbox}>
   <Text style = {styles.percenttext}>今月の収支</Text>
  </View> */}
  
  <View style = {styles.percentbox}>
   <Text style = {styles.percenttext}>前日比</Text>
  </View>
</View>
   <Button title="押してね" onPress={onPressButton} />
 

 <View style={{flex:0.3, backgroundColor:"#555b67"}}>
  <View style={styles.container}>
    <View style={styles.row}>
  <PlusMinusButton/>
  <Storage_day_value2 id ={id} month ={month} year ={year} />
  
    </View>


{/* <TextInput 
style ={styles.inputtext}
value = {name}
onChangeText={setName}
placeholder="金額を入力してください"
></TextInput> */}
<Storage_button2  id ={id} month ={month} year ={year} />
</View>
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
      alignItems:'center',
  },
    percenttext:{
    color: '#000000ff',
    fontSize:30,
  },
  row:{
  flexDirection:"row",
    width:"100%",
  },
  container: {
      width:"90%",      // ← 追加
  maxWidth:700,  
    backgroundColor: '#555b67ff',
    justifyContent: 'center',
      alignSelf:"center",
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