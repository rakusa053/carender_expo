// components/ui/storage_input_text.tsx
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Storage_day_value2({
  name,
  isNumber,
  onChangeText,
}: {
  name: string;
  isNumber: boolean;
  onChangeText: (text: string) => void;
}) {
  return (
    <View style={isNumber ? { flex: 1 } : {}}>
      <TextInput
        style={isNumber ? styles.inputtext : styles.errorinputtext}
        value={name}
        onChangeText={onChangeText}
        placeholder="金額を入力してください"
      />
      {!isNumber && <Text style={styles.text}>数字で入力してください</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  inputtext: {
    flex: 1,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    borderRadius: 6,
  },

  errorinputtext: {
    fontSize: 20,
    borderColor: "#ff0000",
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#ff7e7e",
  },

  text: {
    textAlign: "center",
    color: "#ff0000",
    fontSize: 30,
  },
});
