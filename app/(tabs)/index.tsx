import Circle_display from "@/components/ui/circle";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import Animated, {
  Easing,
  useSharedValue,
  withTiming
} from 'react-native-reanimated';
import { Circle } from 'react-native-svg';
import Screen_animation from "./change_to_screen";

export default function App() {
  const [selectedDate, setSelectedDate] = useState<string>("");

  const percentage = 65; // 表示したい割合（%）


const progress = useSharedValue(0);

const [screen_animatiom_parameters ,set_screen_animation]= useState(false);


const [routeDay,setRouteDay] = useState(0);

const [routeMonth,setRouteMonth] = useState(0);




//prrogressの値を保存.これは%の値の変化．


//値が変更されたら見た目を変更．
useEffect(() => {
  progress.value = withTiming(percentage / 100, {
    duration: 1500,
    easing: Easing.out(Easing.exp),
  });
}, [percentage]);
//円を作成し，アニメーションを追加．
const AnimatedCircle = Animated.createAnimatedComponent(Circle);




  return (
    <>

    <Screen_animation route = {routeDay} triger = {screen_animatiom_parameters} month={routeMonth} restriger= {()=>set_screen_animation(false)}>
    <View style={styles.container}>{/*全体のレイアウト 今の場合， */}
<Circle_display size={250}/>

<View style={{flex:0.3,backgroundColor:'#ffffffff'}}>
      <View style = {{justifyContent: 'flex-end'}}>
<Text style = {styles.result_month_text} >今月の利益</Text>

 {/*<ここでやりたいこと→入力されたお金を参照→反映→それをpushすると保存される*/}
{/* { money >= 0 ? (
    <Text style={styles.result_month_text}>+{money}円</Text>
  ) : (
    <Text style={styles.result_month_text}>{money}円</Text>
  )
} */}


<Text style = {styles.result_month_text} >+???円</Text>

    </View >
</View >
<View style={{flex:0.4,backgroundColor:'#ffffffff'}}>
<View style ={{justifyContent: 'flex-end'}}>
      <Calendar
        // 初期表示月を今日に設定
        current={new Date().toISOString().split("T")[0]}
        // ユーザーが日付をタップした時
        onDayPress={(day) => {
          set_screen_animation(true);
          setRouteDay(day.day);
          //set_screen_animation(false);//これが悪さしている。なぜ？pageが変わる前にfalseになっている？
          //router.push(`/about/${day.day}`);//ここでページ遷移
          setRouteMonth(day.month);
          console.log("選択された日：", day);
          setSelectedDate(day.dateString);
        }}
        // 選択された日付のスタイル
        markedDates={{
          [selectedDate]: {
            selected: true,
            marked: true,
            selectedColor: "#1455d6ff"
          }
        }}
        // カスタムテーマ（任意）
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "orange",
          monthTextColor: "blue",
          indicatorColor: "blue",
        }}
        style={styles.calendar}
      />


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
  circle:{position: "absolute", fontSize: 50, color: "black"},
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

