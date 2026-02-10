import * as SQLite from "expo-sqlite";
import { create } from "zustand";

type  DBstate ={
db:any;
initDB:()=>Promise<void>;//promiseは非同期関数という意味

};

export const useDBStore = create<DBstate>((set)=>({
    db:null,//初期値最初はない
    initDB:async()=>{//initの関数の内容を定義している
            const database = await SQLite.openDatabaseAsync("mydb.db");

    await database.execAsync(`
      CREATE TABLE IF NOT EXISTS items (
        id INTEGER,
        year INTEGER NOT NULL,
        month INTEGER NOT NULL,
        value INTEGER,
        UNIQUE (id, year, month)
      );
    `);
    set({db:database});//dbの内容をデータベースに更新
    },
}));