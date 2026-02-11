import { create } from "zustand";
import { useDBStore } from "./createmoneytabale";
import { InputvalueStore } from "./inputvalue";
import { month_total } from "@/app/(tabs)/month_total";

type MoneyState = {
    total:number;

    addItem:(
        id:string,
        month:string,
        year:string,
         ) => Promise<void>;
};

export const Savevalue = create<MoneyState>((set,get)=>({

    total:0,

    addItem:asnyc(id,month,year)=>{
        const db = useDBStore.getState().db;//現在のdbの様子を取得
        const name = InputvalueStore.getState().name;

        if(db!)return;
            await db.runAsync(
      `INSERT INTO items (id,year,month,value)
       VALUES (?, ?, ?, ?)
       ON CONFLICT(id, year, month)
       DO UPDATE SET value = excluded.value;`,
      [id, year, month, name]
    );

    const total = await month_total({month,year});

    set({total});//totalの値を上書き保存

    useInout
    }
}))