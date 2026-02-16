//料金を更新するプログラム
//引数がaddItemでこれは外部から渡される
//addItemを関数名として保存ボタンを押したら引数を渡せばいい

import { month_total } from "@/app/(tabs)/month_total";
import { saveMoney } from "@/function/savemoney";
import { create } from "zustand";
import { useDBStore } from "./createmoneytabale";
import { InputvalueStore } from "./inputvalue";
type MoneyState = {
    total:number;

    addItem:(
        id:string,
        month:string,
        year:string,
         ) => Promise<void>;
};

export const Savevalue = create<MoneyState>((set)=>({

    total:0,

    addItem:async(id,month,year)=>{
        const db = useDBStore.getState().db;//現在のdbの様子を取得
        const name = InputvalueStore.getState().name;
        const value = Number(name);
        if(!db)return;//新しいvalueがきたら更新するもの
        await saveMoney(db,id,year,month,value);
    

    const total = await month_total({month,year});//ここで合計金額を算出

    set({total});//totalの値を上書き保存これを行わないとstroreのtotalに保存されない

    InputvalueStore.setState({name:""});//これでテキストを空白にしている
    }
}))