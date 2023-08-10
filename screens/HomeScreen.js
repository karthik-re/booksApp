import { View, Text, StyleSheet } from "react-native";
import { Global_Styles } from "../constants/colors";

const HomeScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Global_Styles.primary500,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
