import { Circle,Svg } from "react-native-svg";
import Animated,{
    useShareValue,
    useAnimatedProps,
    withTiming,
}from 'react-native-reanimated';
import { useEffect } from "react";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
type Props ={
    size:number;
    progress:number
}
export default function Circle_animation({size}:Props){
    const Progress = useShareValue(0);
    return(
        useEffect(()=>{
            progress.value=withTiming(precentage,{duration:1000});

        },[percentage]);
    )
}