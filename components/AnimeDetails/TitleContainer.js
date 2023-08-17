import { StyleSheet, View, Text, Dimensions } from "react-native";

import { Global_Styles } from "../../constants/colors";

const { width, height } = Dimensions.get("window");

const TitleContainer = ({ data }) => {
  const genreString = data.genres?.map((item) => item.name).join(", ");
  const en_title = data.en_title;
  const jp_title = data.jp_title;
  const alt_titles =
    data.alt_titles.length > 0 &&
    data.alt_titles.map((item) => item).join(", ");
  return (
    <>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{data.title}</Text>
        </View>
        {en_title && (
          <View style={styles.genreContainer}>
            <Text style={styles.t1}>English: </Text>
            <Text style={styles.t2}>{en_title}</Text>
          </View>
        )}
        {jp_title && (
          <View style={styles.genreContainer}>
            <Text style={styles.t1}>Japanese: </Text>
            <Text style={styles.t2}>{jp_title}</Text>
          </View>
        )}
        {alt_titles && (
          <View style={styles.genreContainer}>
            <Text style={styles.t1}>Synonyms </Text>
            <Text style={styles.t2}>{alt_titles}</Text>
          </View>
        )}
        <View style={styles.genreContainer}>
          <Text style={styles.t1}>Genre: </Text>
          <Text style={styles.t2}>{genreString}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Global_Styles.primary500,
    marginTop: 10,
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  title: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  titleContainer: {
    // justifyContent: "center",
    // alignItems: "center",
  },
  t1: {
    color: Global_Styles.secondary500,
  },
  t2: {
    color: "white",
  },
  genreContainer: {
    flexDirection: "row",
    maxWidth: width - 100,
    marginTop: 2,
  },
});

export default TitleContainer;
