//画面遷移のアニメーション
import { useRouter } from "expo-router";
import React, { PropsWithChildren, useEffect, useState } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type  Props = PropsWithChildren<{
    route:number
    month:number;
    year:number;
    triger? :boolean;
    restriger?:()=>void;
    }>;


export default function Screen_animation({children,route,month,year,triger,restriger}:Props){
    const router = useRouter();
    const [page,setPage]  =useState(0);
    const x = useSharedValue(0);
    const AnimatedStyle =  useAnimatedStyle(()=>({
        transform: [{translateX:x.value}],
    }))

    const goNext =()=>{
        x.value = withTiming(-500, { duration: 300 });
        setTimeout(() => {
      setPage(1);
      x.value = withTiming(0, { duration: 1 });
      triger = false;
      router.push({
        pathname:"/about/[id]",
        params:{id:route,month:month,year:year},//これでもパラメーターを渡すことができる

      }

      );
      if(restriger)restriger();
    }, 200);
  
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