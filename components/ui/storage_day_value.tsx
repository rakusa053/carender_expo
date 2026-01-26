//データベースに保存
import * as SQLite from "expo-sqlite";
import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';



export default function Storage_day_value() {


const openDB = async () => {
  const db = await SQLite.openDatabaseAsync("mydb.db");
  return db;
};

const [input_value,setinput_value] = useState<number | null>(null);
const [items, setItems] = useState<{ id: number; value: string }[]>([]);
const [db, setDb] = useState<any>(null);//データベースを他からもアクセスできるようにするため
const [name, setName] = useState<string>("");
const [isnmuber,setisnumber] = useState<boolean>(true);


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
  //入力された数字をキャストして検証
  useEffect(()=>{
  const num = Number(name);
  if (Number.isNaN(num)){
    setisnumber(false);
  }else {
     setisnumber(true);
    }
  } ,[name])


return(
  isnmuber ? (
    <View>
      <TextInput 
      style ={styles.inputtext}
      value = {name}
      onChangeText={setName}
      placeholder="金額を入力してください"/>
      <Button   title="保存" onPress={addItem}/>
    </View>
):(
<View>
      <TextInput 
      style ={styles.errorinputtext}
      value = {name}
      onChangeText={setName}
      placeholder="金額を入力してください"/>
      {/* <Button   title="保存" onPress={addItem}/> */}
      <Text style = {styles.text} >数字で入力してください</Text>
</View>
)
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
  errorinputtext:{
    color: '#000000ff',
    fontSize:20,
    borderColor: "#ff0000ff",
    padding: 10,
    borderRadius: 6,
    backgroundColor:"#ff7e7eff"
  },
    text: {
    textAlign: "center",
    color: '#ff0000ff',
    fontSize:20,
  },
});