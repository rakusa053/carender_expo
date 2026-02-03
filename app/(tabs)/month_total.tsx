//sqlの数値から合計料金を算出し、表示する→自動で呼ばれる関数を書く
// month_total.ts
import * as SQLite from "expo-sqlite";

let db: SQLite.SQLiteDatabase | null = null;

// DBを安全に取得する関数
const getDB = async () => {
  if (!db) {
    db = await SQLite.openDatabaseAsync("mydb.db");
  }
  return db;
};

type Props = {
  month: string;
  year: string;
};

export const month_total = async (
  { month, year }: Props
) => {
  const database = await getDB();
  
  const row = await database.getFirstAsync<{ total: number }>(
    `
    SELECT COALESCE(SUM(value), 0) AS total
    FROM items
    WHERE year = ? AND month = ?;
    `,
    [year, month]
  );
  
  
  console.log("合計金額は",row);

  return row?.total ?? 0;
};
