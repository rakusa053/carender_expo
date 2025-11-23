import { useRouter } from "expo-router";
import React, { PropsWithChildren, useEffect, useState } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type  Props = PropsWithChildren<{
    route:`/about/${string}`
    triger? :boolean;
    restriger?:()=>void;
    }>;


export default function Screen_animation({children,route,triger,restriger}:Props){
    const router = useRouter();
    const [page,setPage]  =useState(0);
    const x = useSharedValue(0);
    const AnimatedStyle =  useAnimatedStyle(()=>({
        transform: [{translateX:x.value}],
    }))

    const goNext =()=>{
        x.value = withTiming(-300, { duration: 500 });
        setTimeout(() => {
      setPage(1);
      x.value = withTiming(0, { duration: 1 });
      triger = false;
      router.push(route);
      if(restriger)restriger();
    }, 500);
  
  };

  useEffect (()=>{
    if (triger){
            goNext();
    }
  },[triger]);
      return (
        <Animated.View style={[{flex:1},AnimatedStyle]}>
            {children}
        </Animated.View>
      )


}