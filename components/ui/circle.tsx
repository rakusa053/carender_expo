//円の表示
import { View } from "react-native";
import { Circle, G, Svg, Text as SvgText } from 'react-native-svg';

type Props ={
    size:number;
}







export default function Circle_display ({size}:Props){
  const strokeWidth = 20; // 円の太さ
  const percentage = 65; // 表示したい割合（%）
  const radius = (size - strokeWidth) / 2;//円の半径
  const circumference = 2 * Math.PI * radius;//円周の大きさ
  const strokeDashoffset = circumference * (1 - percentage / 100);//円周から書かない部分
    const circle = {//円のスタイル
      background: {//背景
        cx: size / 2,
        cy: size / 2,
        r: radius,
        stroke: "#e6e6e6",
        strokeWidth: strokeWidth,
        fill: "transparent",
      },
      circle: {//円の位置
        cx: size / 2,
        cy: size / 2,
        r: radius,
        stroke: "skyblue",
        strokeWidth: strokeWidth,
        fill: "transparent",
        strokeDasharray: circumference,
        strokeDashoffset: strokeDashoffset,
        strokeLinecap: "round"as const,
      },
        text: {//テキスト
  x: size / 2,                         // 横方向の中央
  y: size / 2,                         // 縦方向の中央
  fontSize: 100,                        // 文字サイズ
  fill: "black",                       // 色
  textAnchor: "middle" as const,       // 横方向中央揃え
  alignmentBaseline: "middle" as const // 縦方向中央揃え
},  text2: {//テキスト二個目
  x: size / 2,                         // 横方向の中央
  y: size / 2-60,                         // 縦方向の中央
  fontSize: 20,                        // 文字サイズ
  fill: "#000000ff",                       // 色
  textAnchor: "middle" as const,       // 横方向中央揃え
  alignmentBaseline: "middle" as const // 縦方向中央揃え
},
    };

    return(
        <View style={{justifyContent: 'flex-start',flex:0.4,backgroundColor:'rgba(255, 255, 255, 1)'}}>
              
            <View style={{ flex: 1, marginTop: 50, alignItems: 'center' }}>
              <Svg width={size} height={size}>
                 {/*<Rect
            x={0}
            y={0}
            width={size}
            height={size}
            fill="lightgray"  // 背景色
          /> */}
                <G rotation="-90" origin={`${size/2}, ${size/2}`}>
                  {/* 背景の円 */}
                   <Circle {...circle.background} />
                   <Circle {...circle.circle} />
                </G>
                <SvgText {...circle.text2}>勝率</SvgText>
                <SvgText {...circle.text}>75%</SvgText>
                </Svg>
                    {/*<Text style={[styles.circle,circlePosition]}>75%</Text>*/}
            </View>
        
        
        </View>
        
    )
}

// const styles = StyleSheet.create({
//      circle: {//円の位置
//        cx: size / 2,
//        cy: size / 2,
//        r: radius,
//        stroke: "skyblue",
//        strokeWidth: strokeWidth,
//        fill: "transparent",
//        strokeDasharray: circumference,
//        strokeDashoffset: strokeDashoffset,
//        strokeLinecap: "round"as Linecap,
//      },
//     }
// })