//initDBと定義しどのスクリプトからでもデータを更新できるようにしている
import * as SQLite from "expo-sqlite";
import { create } from "zustand";

type  DBstate ={//DBstate = 「データベース管理ストアの構造」
db:any;
initDB:()=>Promise<void>;//promiseは非同期関数という意味
};

export const createmoneytable = create<DBstate>((set)=>({//実際に作られた Zustand ストアそのもの
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
//文字だけ追加
