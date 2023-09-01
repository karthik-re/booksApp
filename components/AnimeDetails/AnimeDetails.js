import { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Animated,
  Dimensions,
  LayoutAnimation,
} from "react-native";

import { Global_Styles } from "../../constants/colors";
import MainHeader from "../UI/MainHeader";
import RatingContainer from "./RatingContainer";
import Synopsis from "./Synopsis";
import TitleContainer from "./TitleContainer";
import Information from "./Information";
import Related from "./Related";
import Recommendations from "./Recommendations";
const { width } = Dimensions.get("window");

const BANNER_H = 450;

const AnimeDetails = ({ data }) => {
  const scrollA = useRef(new Animated.Value(0)).current;
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current.scrollTo({ x: 0, animated: true });
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  }, [data.id]);

  return (
    <>
      <View style={styles.container}>
        <Animated.ScrollView
          ref={scrollRef}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollA } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={15}
        >
          <View style={styles.imageContainer}>
            <Animated.Image
              style={styles.image(scrollA)}
              source={{ uri: data.main_img }}
            />
          </View>
          <TitleContainer data={data} />
          <RatingContainer data={data} />
          <MainHeader title={"Synopsis"}>
            <Synopsis synopsis={data.synopsis} />
          </MainHeader>
          <Information data={data} />
          <Related data={data} />
          <Recommendations data={data} />
        </Animated.ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Global_Styles.primary800,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: "center",
    overflow: "hidden",
  },
  image: (scrollA) => ({
    height: BANNER_H,
    width: "100%",
    minWidth: width,
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 1, 1],
        }),
      },
    ],
  }),
});

export default AnimeDetails;
