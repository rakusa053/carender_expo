//カレンダーの表示
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Calendar, DateData } from "react-native-calendars";
type Props ={
    DayPress :(day:DateData)=> void;
}

export default function Make_calender ({DayPress}:Props){
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [screen_animatiom_parameters ,set_screen_animation]= useState(false);
    const [routeDay,setRouteDay] = useState(0);
    const [routeMonth,setRouteMonth] = useState(0);

    
    return(
              <Calendar
                // 初期表示月を今日に設定
                current={new Date().toISOString().split("T")[0]}
                // ユーザーが日付をタップした時
                onDayPress={DayPress}
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
        
    );
    
}

const styles = StyleSheet.create({
    calendar: { marginBottom: 20,justifyContent: 'flex-end' },
})
