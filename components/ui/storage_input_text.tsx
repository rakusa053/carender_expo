//データベースに保存→保存するためのテキストも表示
import { useDBStore } from "@/stores/createmoneytabale";
import { InputvalueStore } from "@/stores/inputvalue";
import React, { useEffect } from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';

type Props = {
  id: string;
  month: string;
  year: string;
};

export default function Storage_day_value2({
  id,
  month,
  year,
}: Props) {
  //UI更新のため念のため監視
  const initDB = useDBStore((s) => s.initDB);
  const name = InputvalueStore((s) => s.name);
  const isNumber = InputvalueStore((s) => s.isNumber);//これを行うことで別のスクリプトでtueにするだけでokになっている
  const setName = InputvalueStore((s) => s.setName);

  //開始した時にテーブルを作成
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