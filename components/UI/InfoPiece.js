import { StyleSheet, Text, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const InfoPiece = ({ title, content }) => {
  return (
    <>
      <View style={styles.insideInfoContainer}>
        <Text style={styles.title}>{`${title}: `}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </>
  );
};

export default InfoPiece;

const styles = StyleSheet.create({
  insideInfoContainer: {
    flexDirection: "row",
    maxWidth: width - 100,
    paddingRight: 10,
  },
  title: {
    color: "white",
  },
  content: {
    color: "#aaa",
  },
});
