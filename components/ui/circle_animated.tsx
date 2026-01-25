import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
    useAnimatedProps,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { Circle, Svg, Text as SvgText } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
type Props ={
    size:number;
}

export default function Circle_animation({size}:Props){
  const strokeWidth = 20; // 円の太さ
  const percentage = 65; // 表示したい割合（%）
  const radius = (size - strokeWidth) / 2;//円の半径
  const circumference = 2 * Math.PI * radius;//円周の大きさ

    const progress = useSharedValue(0);

        useEffect(()=>{
            progress.value=withTiming(percentage,{duration:1000});
        },[percentage]);
        
        const animatedProps = useAnimatedProps(()=>({
            strokeDashoffset:
            circumference *(1-progress.value/100),
        }));

const circle = {//円のスタイル
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
        <View style={styles.container}>
              <View style={styles.circle_position}>
                <Svg width={size} height={size}>
                    <Circle 
                    cx = {size/2}
                    cy={size/2} 
                    r ={radius}
                    stroke="#545454ff"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    />
                    <AnimatedCircle
                       cx = {size/2}
                    cy={size/2} 
                    r ={radius}
                    stroke="#22c7e0ff"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={circumference}
                    animatedProps={animatedProps}
                    strokeLinecap="round"
                    origin={`${size / 2}, ${size / 2}`}
                    rotation="-90"
                    />
                    <SvgText {...circle.text2}>勝率</SvgText>
                    <SvgText {...circle.text}>75%</SvgText>
                </Svg>
              </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container:{justifyContent: 'flex-start',
        flex:0.4,
        backgroundColor:'rgba(255, 255, 255, 1)'
    },
    circle_position:{ flex: 1,
         marginTop: 50,
          alignItems: 'center'
        },
})