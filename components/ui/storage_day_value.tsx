//データベースに保存
import * as SQLite from "expo-sqlite";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

const openDB = async () => {
  const db = await SQLite.openDatabaseAsync("mydb.db");
  return db;
};

const [input_value,setinput_value] = useState<number | null>(null);
const [items, setItems] = useState<{ id: number; value: string }[]>([]);
const [db, setDb] = useState<any>(null);//データベースを他からもアクセスできるようにするため
//最初に実行される
  useEffect(() => {
    const init = async () => {
      const database = await openDB();
      setDb(database);//setDbにデータベースに繋がるルートを保存している.

      // テーブルを作成（存在しない場合のみ）
      await database.execAsync(`
        CREATE TABLE IF NOT EXISTS items (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          value TEXT
        );
      `);

      loadItems(database);
    };
        init();//関数を作成し実際に実行。
  }, []);//→依存する値今回はなし
  
  //データベースにアクセスし、データを取得し、rowに保存し、setItemsでに保存→uiに反映
    const loadItems = async (database: any) => {//※databaseは引数で使われる名前であり、特に意味はない。その関数で使う時に便利だからそう名付けているだけ
    try {
      const rows = await database.getAllAsync(//データベースからデータを取得する関数
        "SELECT id, value FROM items ORDER BY id DESC"
      );
      setItems(rows);
    } catch (e) {
      console.log("読み込みエラー", e);
    }
  };


  const addItem = async () => {
  if (!db) return;//データベースがなかったら中止する
  await db.runAsync("INSERT INTO items (value) VALUES (?);",[input_value//ここに式などを入れる今回は時刻を入れる関数が入っている。
  ]);
  loadItems(db);
  };

export default function Storage_day_value() {
    const [name, setName] = useState<string>("");

return(
    <View>
    <TextInput 
    style ={styles.inputtext}
    value = {name}
    onChangeText={setName}
    placeholder="金額を入力してください"
    ></TextInput>
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