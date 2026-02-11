import React, { useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import { useDBStore } from "@/stores/dbStore";
import { useInputStore } from "@/stores/inputStore";

type Props = {
  id: string;
  month: string;
  year: string;
};

export default function Storage_day_value({
  id,
  month,
  year,
}: Props) {

  const initDB = useDBStore((s) => s.initDB);

  const name = useInputStore((s) => s.name);
  const isNumber = useInputStore((s) => s.isNumber);
  const setName = useInputStore((s) => s.setName);

  useEffect(() => {
    initDB();
  }, []);

  return isNumber ? (
    <View>
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
