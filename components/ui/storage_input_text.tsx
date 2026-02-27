// components/ui/storage_input_text.tsx
import { createmoneytable } from "@/stores/create-money-table";
import { InputvalueStore } from "@/stores/input-value";
import React, { useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Storage_day_value2() {
  // UI更新のため念のため監視
  console.log("hook 1: initDB");
  const initDB = createmoneytable((s) => s.initDB);
  console.log("hook 2: initDB");
  const name = InputvalueStore((s) => s.name);
  console.log("hook 3: initDB");
  const isNumber = InputvalueStore((s) => s.isNumber); // true/false 切り替え
  console.log("hook 4: initDB");
  const setName = InputvalueStore((s) => s.setName);

  // useEffect を固定して最初のレンダーで必ず initDB を呼ぶ
  useEffect(() => {
    console.log("hook 5: initDB");
    initDB();
  }, [initDB]); // initDB を依存に入れると TypeScript 警告も出ない

  return isNumber ? (
    <View style={{ flex: 1 }}>
      <TextInput
        style={styles.inputtext}
        value={name}
        onChangeText={setName}
        placeholder="金額を入力してください"
      />
    </View>
  ) : (
    <View>
      <TextInput
        style={styles.errorinputtext}
        value={name}
        onChangeText={setName}
        placeholder="金額を入力してください"
      />
      <Text style={styles.text}>数字で入力してください</Text>
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
