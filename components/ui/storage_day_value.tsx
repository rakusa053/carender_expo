//データベースに保存
import * as SQLite from "expo-sqlite";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, View } from 'react-native';
import { TextInput } from "react-native-gesture-handler";


export default function Storage_day_value() {


const openDB = async () => {
  const db = await SQLite.openDatabaseAsync("mydb.db");
  return db;
};

const [input_value,setinput_value] = useState<number | null>(null);
const [items, setItems] = useState<{ id: number; value: string }[]>([]);
const [db, setDb] = useState<any>(null);//データベースを他からもアクセスできるようにするため
const [name, setName] = useState<string>("");


  //データベースにアクセスし、データを取得し、rowに保存し、setItemsでに保存→uiに反映
    const loadItems = async (database: any) => {//※databaseは引数名関係ない
    try {
      const rows = await database.getAllAsync(//データベースからデータを取得し、rowに保存
        "SELECT id, value FROM items ORDER BY id DESC"
      );
      setItems(rows);
    } catch (e) {
      console.log("読み込みエラー", e);
    }
  };

//最初に実行される
  useEffect(() => {
    const init = async () => {
      const databasekari = await openDB();
      setDb(databasekari);//setDbにデータベースに繋がるルートを保存している.

      // テーブルを作成（存在しない場合のみ）
      await databasekari.execAsync(`
        CREATE TABLE IF NOT EXISTS items (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          value TEXT
        );
      `);

      loadItems(databasekari);
    };
        init();//関数を作成し実際に実行。
  }, []);//→依存する値今回はなし
  

 //ここで数字を保存すればいい
  const addItem = async () => {
  if (!db) return;//データベースがなかったら中止する
  await db.runAsync("INSERT INTO items (value) VALUES (?);",//ここでsetNameをnumberかどうかを調べて表示したい
    [input_value]);
  loadItems(db);
  setinput_value(null);
  };


return(
    <View>
    <TextInput 
    style ={styles.inputtext}
    value = {name}
    onChangeText={setName}//ここに入力内容が保存される。→ボタンを押したらこの値を参照してSQlに保存する関数を作成し、ボタンを教えてそれを呼べばいい
    placeholder="金額を入力してください"
    ></TextInput>
    <Button   title="保存" onPress={addItem}/>
    </View>
)
}


const styles = StyleSheet.create({
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