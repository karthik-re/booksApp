import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { Global_Styles } from "../../constants/colors";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const AnimeListItem = ({ data, onPress }) => {
  //data: id,title, image,rank
  return (
    <>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      >
        <Image source={{ uri: data.img_medium }} style={styles.image} />
        <View style={styles.info}>
          <View style={styles.rankingContainer}>
            <View style={styles.iconContainer}>
              <FontAwesome5
                name="hashtag"
                color={Global_Styles.secondary500}
                size={12}
              />
              <Text style={styles.rank}>{data.rank}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Ionicons
                name="trending-up"
                color={Global_Styles.secondary500}
                size={16}
              />
              <Text style={styles.rank}>{data.popularity}</Text>
            </View>
          </View>
          <Text numberOfLines={2} style={styles.title}>
            {data.title}
          </Text>
          <View style={styles.showInfoContainer}>
            <Text style={styles.infoText}>{`${
              data.num_episodes > 0 ? data.num_episodes : "?"
            } eps `}</Text>
            <Text style={styles.infoText}>{`(${data.period})`}</Text>
          </View>
          <View style={styles.ratingContainer}>
            <Ionicons
              name={"star"}
              color={Global_Styles.secondary500}
              size={14}
            />
            <Text
              style={styles.ratingText}
            >{`${data.mean} (${data.num_of_mean})`}</Text>
          </View>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 6,
    marginVertical: 8,
    backgroundColor: Global_Styles.primary500,
    alignItems: "flex-start",
    justifyContent: "center",
    shadowColor: "white",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  pressed: {
    opacity: 0.75,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    height: 150,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },
  rank: {
    fontSize: 14,
    color: "white",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  rankingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  ratingText: {
    color: "#aaa",
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  showInfoContainer: {
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 3,
  },
  infoText: {
    color: "#aaa",
  },
});

export default AnimeListItem;
