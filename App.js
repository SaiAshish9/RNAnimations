import React,{useRef} from "react";
import { StyleSheet, Image, View, Animated } from "react-native";

const ImageLoader =(props)=> {
  const opacity=useRef(new Animated.Value(0)).current

const  onLoad = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };


    return (
      <>
        <Animated.Image
          onLoad={onLoad}
          {...props}
          style={[
            {
              opacity: opacity,
              transform: [
                {
                  scale: opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.85, 1],
                  }),
                },
              ],
            },
            props.style,
          ]}
        ></Animated.Image>
        <Animated.View
          onLoad={onLoad}
          style={{
            height: 100,
            width: 100,
            backgroundColor: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: ["#000", "#444"],
            }),
          }}
        ></Animated.View>
      </>
    );
}

const App = () => (
  <View style={styles.container}>
    <ImageLoader
      source={{
        uri:
          "https://images.unsplash.com/photo-1596704303384-3004d13b6502?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      }}
      style={{
        height: 300,
        width: 300,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
