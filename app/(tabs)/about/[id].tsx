import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from 'react-native';




export default function dayscrren() {
  const { id } = useLocalSearchParams();
  return (
    <>
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
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});