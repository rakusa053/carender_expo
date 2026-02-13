//入力されたテキストが文字かそれとも数字かを判断する　+一応丹入力されたテキストを保存
//setNameで
//store に定義した setName はどのファイル（コンポーネント）からでも使える！！！
import { create } from "zustand";

type Inputvalue ={
    name:string;//状態
    isNumber:boolean;//状態を更新する関数

    setName:(text:string)=> void;
}

export const InputvalueStore = create<Inputvalue>((set)=>({
    name:"",//初期値
    isNumber:true,//初期値

    setName:(text)=>{//文字が変わるたびに呼ばれる
        const num = Number(text);

        set({
            name:text,
            isNumber:!Number.isNaN(num),//数字なら true、数字じゃなければ false
        });
    },
}));

//おそらく上の方は定義しているだけ。

//setNameのところから関数の定義