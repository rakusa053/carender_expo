import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from 'react-native';




export default function dayscrren() {
  const { id ,month} = useLocalSearchParams();
  return (
    <>
    <View style={styles.days}>
       <Text style={[styles.text,{marginTop:150}]}> {month}月{id}日</Text>
      
    </View>
      <Stack.Screen 
        options={{
          headerTitle: `2025年: ${id}日`, 
        }} 
      />

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
    alignItems:'center'

  },
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#000000ff',
  },
});