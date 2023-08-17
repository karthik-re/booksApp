import { StyleSheet, View, Text } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

import { Global_Styles } from "../../constants/colors";

const RatingContainer = ({ data }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.rankingContainer}>
          <View style={styles.innerRankContainer}>
            <FontAwesome5
              name="hashtag"
              color={Global_Styles.secondary500}
              size={12}
            />
            <Text style={styles.t1}>Rank: </Text>
            <Text style={styles.t2}>{data.rank}</Text>
          </View>
          <View style={styles.innerRankContainer}>
            <Ionicons
              name="trending-up"
              color={Global_Styles.secondary500}
              size={16}
            />
            <Text style={styles.t1}>Popularity: </Text>
            <Text style={styles.t2}>{data.popularity}</Text>
          </View>
        </View>
        <View style={styles.scoreContainer}>
          <Ionicons
            name={"star"}
            color={Global_Styles.secondary500}
            size={14}
          />
          <Text style={styles.t1}>Score: </Text>
          <Text style={styles.t2}>{data.mean || "--"}</Text>
          <Text
            style={styles.t3}
          >{` (${data.num_scoring_users.toLocaleString()} members)`}</Text>
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
  rankingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  innerRankContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  t1: {
    color: Global_Styles.secondary500,
  },
  t2: {
    color: "white",
    fontWeight: "bold",
  },
  t3: {
    color: "#aaa",
  },
  scoreContainer: {
    marginTop: 4,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default RatingContainer;
