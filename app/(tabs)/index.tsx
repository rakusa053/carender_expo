import Circle_display from "@/components/ui/circle";
import Make_calender from "@/components/ui/make_calender";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { DateData } from "react-native-calendars";
import {
  useSharedValue
} from 'react-native-reanimated';
import Screen_animation from "./change_to_screen";

export default function App() {
const [selectedDate, setSelectedDate] = useState<string>("");
const percentage = 65; // 表示したい割合（%）
const progress = useSharedValue(0);
const [screen_animatiom_parameters ,set_screen_animation]= useState(false);
const [routeDay,setRouteDay] = useState(0);
const [routeMonth,setRouteMonth] = useState(0);

const setcalender = (day:DateData)=>{
            set_screen_animation(true);
          setRouteDay(day.day);
          //set_screen_animation(false);//これが悪さしている。なぜ？pageが変わる前にfalseになっている？
          //router.push(`/about/${day.day}`);//ここでページ遷移
          setRouteMonth(day.month);
          console.log("選択された日：", day);
          setSelectedDate(day.dateString);
}
  return (
    <>
<Screen_animation route = {routeDay} triger = {screen_animatiom_parameters} month={routeMonth} restriger= {()=>set_screen_animation(false)}>
<View style={styles.container}>{/*全体のレイアウト 今の場合， */}
    <Circle_display size={250}/>
          <View style={{flex:0.3,backgroundColor:'#ffffffff'}}>
            <View style = {{justifyContent: 'flex-end'}}>
                  <Text style = {styles.result_month_text} >今月の利益</Text>
                  <Text style = {styles.result_month_text} >+???円</Text>
            </View >
          </View >


    <View style={{flex:0.4,backgroundColor:'#ffffffff'}}>
        <View style ={{justifyContent: 'flex-end'}}>
            <Make_calender  DayPress={setcalender}/>
        </View>
    </View>
</View>
</Screen_animation>
     </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  calendar: { marginBottom: 20,justifyContent: 'flex-end' },
  selectedText: { fontSize: 18, textAlign: "center" },
  result_month_position:{justifyContent: 'flex-end',
     // 上寄せ（縦方向）
    //alignItems: "flex-start",     // 左寄せ（横方向）
    marginLeft:20},
  result_month_text:{
    fontSize:30,
    color:"#ff0000ff",
    textAlign: "center",
  },
  result_month_value:{
    fontSize:30,
    color:"#ff0000ff",
    textAlign: "center",
  },
});

