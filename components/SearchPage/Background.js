import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Global_Styles } from "../../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const Background = ({ children }) => {
  return (
    <>
      <LinearGradient
        style={styles.container}
        colors={[Global_Styles.primary800, Global_Styles.primary300]}
      >
        <ImageBackground
          source={require("../../assets/Images/searchBackground.png")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.container}>{children}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
