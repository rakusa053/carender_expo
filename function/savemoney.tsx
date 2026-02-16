// services/moneyService.ts

export const saveMoney = async (
  db: any,
  id: string,
  year: string,
  month: string,
  value: number
) => {
  await db.runAsync(
    `INSERT INTO items (id,year,month,value)
     VALUES (?, ?, ?, ?)
     ON CONFLICT(id, year, month)
     DO UPDATE SET value = excluded.value;`,
    [id, year, month, value]
  );
};
