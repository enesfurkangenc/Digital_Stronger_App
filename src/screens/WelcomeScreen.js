/* eslint-disable react/prop-types */
import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Animated
} from "react-native";
import ImageScreen from "../components/ImageScreen/ImageScreen";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const images = [
  { src: require("../assets/images/Logo_Screen.png") },
  {
    src: require("../assets/images/First_Screen.png"),
    headText: "Kendini keşfet",
    bodText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quae tempore, optio amet delectus vero. Aut ea aspernatur fugiat minus? Reprehenderit ducimus, assumenda ratione vel maiores iste nulla est delectus."
  },
  {
    src: require("../assets/images/Second_Screen.png"),
    headText: "Peformansını Öğren",
    bodText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quae tempore, optio amet delectus vero. Aut ea aspernatur fugiat minus? Reprehenderit ducimus, assumenda ratione vel maiores iste nulla est delectus."
  },
  {
    src: require("../assets/images/Thirt_Screen.png"),
    headText: "GÜÇLÜ OL",
    bodText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    isShow: true
  }
];
const scrollX = new Animated.Value(0);
const { width } = Dimensions.get("window");

const WelcomeScreen = props => {
  const position = Animated.divide(scrollX, width);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: scrollX } } }
        ])}
        scrollEventThrottle={16}
      >
        {images.map((source, i) => {
          return (
            <ImageScreen
              src={source.src}
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              HeadText={source.headText}
              BodyText={source.bodText}
              navigateButton={() => props.navigation.navigate("Main")}
              isShow={source.isShow}
            />
          );
        })}
      </ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 13
        }}
      >
        {images.map((_, i) => {
          const opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp"
          });
          return (
            <Animated.View
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              style={{
                opacity,
                height: 10,
                width: 10,
                backgroundColor: "#6B48FF",
                margin: 8,
                borderRadius: 5
              }}
            />
          );
        })}
      </View>
    </View>
  );
};

export default WelcomeScreen;
