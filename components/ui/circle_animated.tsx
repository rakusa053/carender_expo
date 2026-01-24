import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
    useAnimatedProps,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { Circle,Svg, } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
type Props ={
    size:number;
    progress:number;
    percentage:number;
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
                    
                    <AnimatedCircle />
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
        }
})