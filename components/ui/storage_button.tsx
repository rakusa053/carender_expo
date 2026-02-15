//現在は廃止

import { month_total } from "@/app/(tabs)/month_total";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props ={
  id :string
  month:string
  year:string
  totalchange:(total:number)=>void;
  db:any;
}


export default function Storage_button({id,month,year,totalchange,db}:Props){

const [input_value,setinput_value] = useState<number | null>(null);
const [items, setItems] = useState<{ id: number; value: string }[]>([]);
const [name, setName] = useState<string>("");
const [isnmuber,setisnumber] = useState<boolean>(true);

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

  const addItem = async () => {
    console.log("押された")
  if (!db) return;//データベースがなかったら中止する→これでidと値を保存することができるようになった
  await db.runAsync(`INSERT INTO items (id,year,month, value)
   VALUES (?, ?,?,?)
  ON CONFLICT(id, year, month)
  DO UPDATE SET value = excluded.value;`,
  [id, year,month,name]);
  //合計金額を算出
  console.log("入力された金額は",name);
//金額チェック
const allItems = await db.getAllAsync(
  `SELECT * FROM items;`
);
console.log("itemsテーブル全体:", allItems);



  const total = await month_total({
  month,
  year,
});

totalchange(total);
  loadItems(db);
  setinput_value(null);

  };
    return(
          isnmuber ? (
                <Pressable style={styles.button} onPress={addItem}>
                <Text style={{fontSize:20}}>保存</Text>
                </Pressable>
            ):(
                <View></View>
    )
)
}

const styles=StyleSheet.create({
  button:{
    borderRadius: 4,
    padding: 10,
    alignItems: "center",
    backgroundColor: '#ffffffff',
  },
})
