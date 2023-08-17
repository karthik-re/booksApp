import { StyleSheet, Text, View } from "react-native";
import { Global_Styles } from "../../constants/colors";

const MainHeader = ({ children, title }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
        {children}
      </View>
    </>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
    backgroundColor: Global_Styles.primary500,
    borderRadius: 8,
  },
  text: {
    color: Global_Styles.secondary500,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
