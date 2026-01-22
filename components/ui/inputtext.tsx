import React from 'react'; // Reactのインポートが必要な場合があります
import { StyleSheet, TextInput } from 'react-native'; // インポート元を変更

type Props = {
    name: string;
    setName: (text: string) => void;
};

// コンポーネント名を大文字にし、型（Props）を適用
export default function InputText({ name, setName }: Props) {
  return (
    <TextInput
      style={styles.input}
      value={name}
      onChangeText={setName}
      placeholder="金額を入力してください"
      keyboardType="numeric" // 金額入力なので数字キーボードにすると親切です
    />
  );
}

const styles = StyleSheet.create({
  input: {
    color: '#000000',
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#999",
    padding: 10,
    borderRadius: 6,
  },
});