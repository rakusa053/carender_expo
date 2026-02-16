//使用していいない
import * as SQLite from "expo-sqlite";
import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

// 最新 API でデータベースを開く
const openDB = async () => {
  const db = await SQLite.openDatabaseAsync("mydb.db");
  return db;
};

export default function SQLiteExample() {
  const [items, setItems] = useState<{ id: number; value: string }[]>([]);
  const [db, setDb] = useState<any>(null);

  // 初回読み込みで DB を設定＆テーブル作成
  useEffect(() => {
    const init = async () => {
      const database = await openDB();
      setDb(database);

      // テーブルを作成（存在しない場合のみ）
      await database.execAsync(`
        CREATE TABLE IF NOT EXISTS items (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          value TEXT
        );
      `);

      loadItems(database);
    };

    init();
  }, []);

  // データを読み込む関数
  const loadItems = async (database: any) => {
    try {
      const rows = await database.getAllAsync(
        "SELECT id, value FROM items ORDER BY id DESC"
      );
      setItems(rows);
    } catch (e) {
      console.log("読み込みエラー", e);
    }
  };

  // データを追加する関数
  const addItem = async () => {
    if (!db) return;
    await db.runAsync("INSERT INTO items (value) VALUES (?);", [
      `Item ${new Date().toLocaleTimeString()}`,
    ]);
    loadItems(db);
  };

  return (
    <View style={styles.container}>
      <Button title="Add Item" onPress={addItem} />
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.itemText}>
            {item.id}: {item.value}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  itemText: { fontSize: 18, marginVertical: 8 },
});
