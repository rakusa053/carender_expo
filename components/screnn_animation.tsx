import { useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";




  const { width } = Dimensions.get("window");



export default function screen_animation(){
      const slide = useSharedValue(width);
      useEffect(() => {
      slide.value = withTiming(0, { duration: 400 });
      }, []);

    const styleAnim = useAnimatedStyle(() => ({
    transform: [{ translateX: slide.value }],
    }));
    return(
     <View style={styles.container}>
    <Animated.View style={[styles.box, styleAnim]}>
    <Text style={styles.text}>Slide In Screen</Text>
    </Animated.View>
    </View>


    );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
    container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
  },
  box: {
    backgroundColor: "#00AEEF",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
  }
});
